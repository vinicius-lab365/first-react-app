import './App.css'
import CardTrilha from './components/CardTrilha/index.jsx'

function App() {

  const listaTrilhas = [
    {
      nomeTrilha: "Trilha da Costa da Lagoa",
      cidade: "Florianópolis",
      estado: "SC",
      duracao: "120",
      trajeto: "4",
      dificuldade: "Iniciante",
      tipo: "Caminhada / Trekking",
      nomeUsuario: "Vinícius",
      urlImagem: "src/assets/imagem-trilha-exemplo.jpeg"
    },
    {
      nomeTrilha: "Trilha do Cambirela",
      cidade: "Palhoça",
      estado: "SC",
      duracao: "180",
      trajeto: "4",
      dificuldade: "Intermediário",
      tipo: "Caminhada / Trekking",
      nomeUsuario: "Vinícius",
      urlImagem: "src/assets/imagem-trilha-exemplo.jpeg"
    }
  ]

  return (
    <>
      {
        listaTrilhas.map((trilha, index) => (
          <CardTrilha dadosTrilha={trilha} key={index} />
        ))
      }

    </>
  )
}

export default App