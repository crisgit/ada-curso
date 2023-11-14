// import MeuComponente from "./components/MeuComponente"
// import MeuContador from "./components/MeuContador"

import MinhaLista from "./components/MinhaLista"
function App() {

  return (
    <div>
      {/* <h1>Olá Mundo, React!</h1>
      <MeuComponente />
    
      <MeuBotao conteudo='me clique' />

      <MeuBotao conteudo='depois aqui'/>

      <MeuBotao conteudo='e por fim aqui'/>

      <MeuContador /> */}

      <h1>Listas no React</h1>

      <MinhaLista />

    </div>
  )
}

function MeuBotao(props) {
  return (
    <button> {props.conteudo} </button>
  )
}


export default App
