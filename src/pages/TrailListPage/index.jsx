import CardTrilha from "../../components/CardTrilha";

// useContext
import { useContext } from 'react';

// TrailsContext
import { TrailsContext } from "../../context/trailsContext";

function TrailListPage() {

  const {trails, loading} = useContext(TrailsContext);

  return (
    <div className="container">
      <h1>Explore trilhas incríveis</h1>
      {loading && <h4>Carregando trilhas</h4>}
      {!loading && trails !== null && (
        <>
          {trails.map((trail, index) => (
            <CardTrilha dadosTrilha={trail} key={index} />
          ))}
        </>
      )}
    </div>
  );
}

export default TrailListPage;
