import * as PropTypes from "prop-types";
import styles from "./styles.module.css";

function CardTrilha({ dadosTrilha }) {
  return (
    <div>
      <div className={styles.card_container}>
        <img
          className={styles.card_imagem}
          width={200}
          src={dadosTrilha.urlImagem}
          alt="imagem trilha"
        />
        <div className={styles.descriptions_wrapper}>
          <div className={styles.title_wrapper}>
            <h2>
              {dadosTrilha.nomeTrilha} - {dadosTrilha.cidade} /{" "}
              {dadosTrilha.estado}
            </h2>
            <i className="fa-regular fa-heart"></i>
          </div>
          <h3 className={styles.username}>Por: {dadosTrilha.nomeUsuario}</h3>
          <div className={styles.trail_data}>
            <p>Duração: {dadosTrilha.duracao}min</p>
            <p>Trajeto: {dadosTrilha.trajeto}km</p>
            <div>
              <span>{dadosTrilha.dificuldade}</span>
            </div>
          </div>
          <div className={styles.rating_wrapper}>
            <ul className={styles.stars_wrapper}>
              <li>
                <img
                  src={"assets/star-icon-colorede.png"}
                  alt="Imagem de uma estrela de avaliações"
                />
              </li>
              <li>
                <img
                  src={"assets/star-icon-colorede.png"}
                  alt="Imagem de uma estrela de avaliações"
                />
              </li>
              <li>
                <img
                  src={"assets/star-icon-colorede.png"}
                  alt="Imagem de uma estrela de avaliações"
                />
              </li>
              <li>
                <img
                  src={"assets/star-icon-colorede.png"}
                  alt="Imagem de uma estrela de avaliações"
                />
              </li>
              <li>
                <img
                  src={"assets/star-icon.png"}
                  alt="Imagem de uma estrela de avaliações"
                />
              </li>
            </ul>
            <a href="#">Avalliações</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// configuração das props types

CardTrilha.propTypes = {
  dadosTrilha: PropTypes.exact({
    nomeTrilha: PropTypes.string.isRequired,
    cidade: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
    duracao: PropTypes.number.isRequired,
    trajeto: PropTypes.number.isRequired,
    dificuldade: PropTypes.string.isRequired,
    // enum
    tipo: PropTypes.oneOf(["caminhada / trekking", "ciclismo"]),
    nomeUsuario: PropTypes.string.isRequired,
    urlImagem: PropTypes.string.isRequired,
  }),
};
export default CardTrilha;
