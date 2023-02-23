import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './components/Form';


function App() {

  const [visualizar, setVisualizar] = useState([]);
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();

  
    useEffect(() => {
      axios.get("http://localhost:3000/")
      .then(res=>{
          const dadosPessoas = res.data
          setVisualizar(dadosPessoas)
      })
    }, [])
  
  function cadastrarUsuario() {
    axios.post("http://localhost:3000/", {nome: nome, email: email})
    .then(res=>{
      console.log(res)
    })
  }

  function editarUsuario(req, res) {
    const {id} = 
    axios.put("http://localhost:3000/", {nome: nome, email: email})
  }
  
  function deletarUsuario(id) {
    const confirma = confirm(`Você tem certeza que deseja excluir o usuário com id ${id}?`)
    if(confirma){
      axios.delete(`http://localhost:3000/${id}`)
      setVisualizar(visualizar.filter(teste => teste.id !== id))
    }
  }

  return (
    <div>
      {visualizar.map((item) => (
        <div key={item.id}>
          {item.id} - {item.nome} - {item.email} <button onClick={() => deletarUsuario(item.id)}>Excluir</button>
        </div>
      ))}
      <form onSubmit={cadastrarUsuario}>
        <label htmlFor="nome">Nome:</label>
        <input type="text" name="nome" id="nome" onChange={(e) => setNome(e.target.value)}/>
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id="email" onChange={(e)=> setEmail(e.target.value)} />
        <input type="submit" value="Cadastrar" />
      </form>
      
    </div>
  );
}

export default App

