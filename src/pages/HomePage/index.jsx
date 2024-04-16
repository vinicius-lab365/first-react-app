import Button from "../../components/Button";
import styles from "./styles.module.css";

// Link
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.main_section}>
          <h1 className={styles.title_1}>
            Que tal aproveitar um tempo com a natureza?
          </h1>
          <p className={styles.text}>
            Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas
            aventuras e inspire-se com as experiências de outros aventureiros.
            Prepare-se para explorar novos horizontes e se conectar com a
            natureza através do Adventure Trails!
          </p>
          <Link to={"/lista-trilhas"}>
            <Button value={"Explorar trilhas"} />
          </Link>
        </div>
      </div>

      <div className={styles.mid_section}>
        <h2 className={styles.title_2}>Explore trilhas incríveis</h2>
        <p>
          O "Adventure Trails FD" é seu portal para explorar e compartilhar as
          melhores trilhas para trekking e ciclismo ao redor do mundo. Descubra
          rotas deslumbrantes, desde caminhos tranquilos por florestas
          exuberantes até trilhas desafiadoras em montanhas majestosas. Encontre
          informações detalhadas sobre cada trilha, incluindo distância,
          dificuldade, pontos de interesse naturais e dicas úteis para uma
          experiência eco-friendly.
        </p>
        <Link to={"/lista-trilhas"}>
          <Button value={"Explorar trilhas"} />
        </Link>
      </div>

      <div className={styles.bottom_section}>
        <div className={styles.bottom_section_wrapper}>
          <h2 className={styles.title_2}>
            Compartilhe fotos, dicas e localização das suas trilhas favoritas
          </h2>
          <Link to={"cadastro-trilha"}>
            <Button value={"Cadastrar nova trilha"} />
          </Link>
        </div>
        <img src={"public/assets/imagem-trilha-2.png"} alt="" />
      </div>
    </div>
  );
}

export default HomePage;
