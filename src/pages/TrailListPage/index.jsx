import CardTrilha from '../../components/CardTrilha'
import useFetch from '../../hooks/useFetch'

function TrailListPage() {
  const [trails, loading] = useFetch("public/data/trails.json");

  return (
    <div className="container">
        <h1>Explore trilhas incríveis</h1>
      {loading && <h4>Carregando trilhas</h4>}
      {!loading && trails !== null && (
        <>
          {trails.map((trilha, index) => (
            <CardTrilha dadosTrilha={trilha} key={index} />
          ))}
        </>
      )}
    </div>
  );
}

export default TrailListPage;
