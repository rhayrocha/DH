import Cadastro from "./components/Cadastro";
import { useState } from "react";

[
  {
    
  },

];

function App() {

  const [listaTarefa, setListaTarefa] = useState([]);
  const [inputText, setInputText] = useState("");
  const [inputDescricao, setInputDescricao] = useState("");
  const [inputCategoria, setInputCategoria] = useState("");
  const [inputData, setInputData] = useState("");


  function addName() {
    event.preventDefault();
    const novoItem = {
      titulo: inputText,
      categoria: inputCategoria,
      data: inputData,
      descricao: inputDescricao,
    };

    setListaTarefa([...listaTarefa, novoItem]);
    setInputText("");
    setInputDescricao("");
    setInputData("");
    setInputCategoria("");
  }

  return (
    <div className="principal">

      <div className="fundoCadastro">
        <div className="fundoCardCadastro">
          <h1>Cadastrar Tarefa</h1>
          <form className="formulario">
            <input placeholder="Titulo" value={inputText} onChange={(event) => setInputText(event.target.value)} />
            <select name="Categoria" onChange={(event) => setInputCategoria(event.target.value)}>
              <option value="Categoria" disabled selected>Categoria</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Lazer">Lazer</option>
              <option value="Prioridade">Prioridade</option>
              <option value="Outros">Outros</option>
            </select> 
            <input input type="date" id="diaa" name="diaa" placeholder="Data" value={inputData} onChange={(event) => setInputData(event.target.value)}/>
            <input placeholder="Descrição" value={inputDescricao} onChange={(event) => setInputDescricao(event.target.value)}/>
            <button onClick={addName}>Clicar</button>
          </form>
        </div>
      </div>

      <div className="fundoTarefa">
          <h2>Minhas Tarefas</h2>
          <div className="cards">
          {listaTarefa.map((item, indice) => (
            <div className="cardInfo" key={indice}>
              <div className="esquerda">
                <h3>{item.titulo}</h3>
                <h4>{item.categoria}</h4>
                <h5>{item.descricao}</h5>
              </div>
              <div className="direita">
              <h6>{item.data} </h6>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};
export default App;