import './App.css';
import Header from './components/Header/index.jsx';

// Outlet
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}

export default App;