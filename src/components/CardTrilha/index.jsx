import * as PropTypes from "prop-types";
import "./styles.css";

function CardTrilha({ dadosTrilha }) {
  return (
    <div>
      <div className="card_container">
        <img
          className="card_imagem"
          width={200}
          src={dadosTrilha.urlImagem}
          alt="imagem trilha"
        />
        <div className="descriptions_wrapper">
          <div className="title_wrapper">
            <h2>
              {dadosTrilha.nomeTrilha} - {dadosTrilha.cidade} /{" "}
              {dadosTrilha.estado}
            </h2>
            <i class="fa-regular fa-heart"></i>
          </div>
          <h3 className="username">Por: {dadosTrilha.nomeUsuario}</h3>
          <div className="trail_data">
            <p>Duração: {dadosTrilha.duracao}min</p>
            <p>Trajeto: {dadosTrilha.trajeto}km</p>
            <div>
              <span>{dadosTrilha.dificuldade}</span>
            </div>
          </div>
          <div className="rating_wrapper">
            <ul className="stars_wrapper">
              <li>
                <img
                  src={"public/assets/star-icon-colorede.png"}
                  alt="Imagem de uma estrela de avaliações"
                />
              </li>
              <li>
                <img
                  src={"public/assets/star-icon-colorede.png"}
                  alt="Imagem de uma estrela de avaliações"
                />
              </li>
              <li>
                <img
                  src={"public/assets/star-icon-colorede.png"}
                  alt="Imagem de uma estrela de avaliações"
                />
              </li>
              <li>
                <img
                  src={"public/assets/star-icon-colorede.png"}
                  alt="Imagem de uma estrela de avaliações"
                />
              </li>
              <li>
                <img
                  src={"public/assets/star-icon.png"}
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
