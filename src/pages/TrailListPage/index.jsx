import styles from "./styles.module.css";

import CardTrilha from "../../components/CardTrilha";

// useContext
import { useContext } from "react";

// TrailsContext
import { TrailsContext } from "../../context/trailsContext";

function TrailListPage() {
  const { trails, loading } = useContext(TrailsContext);

  return (
    <div>
      <div className={styles.cover}>
      </div>
      <div className={styles.container}>
        <h1 className={styles.title_1}>Explore trilhas incríveis</h1>
        {loading && <h4>Carregando trilhas</h4>}
        {!loading && trails !== null && (
          <>
            {trails.map((trail, index) => (
              <div className={styles.card_wrapper}>
                <CardTrilha dadosTrilha={trail} key={index} />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default TrailListPage;
