import './App.css';
import CardTrilha from './components/CardTrilha/index.jsx';
import Header from './components/Header/index.jsx';
import useFetch from './hooks/useFetch.js';

// Outlet
import { Outlet } from 'react-router-dom'

function App() {

  const [trails, loading] = useFetch("public/data/trails.json");

  return (
    <>
    <Header />
    <Outlet />

    {loading && <h4>Carregando trilhas</h4>}
    {!loading && trails !== null && (
      <>
      {
        trails.map((trilha, index) => (
          <CardTrilha dadosTrilha={trilha} key={index} />
        ))
      }
      </>
    )}

    </>
  )
}

export default App;