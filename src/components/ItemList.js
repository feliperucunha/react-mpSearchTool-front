import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";




function ItemList() {
  useEffect(()=>{
    document.title = `Pesquisa MP`  //nome do site
  },[])
  const [pesquisa, setPesquisa] = useState(""); //lista de repo que começa com lista vazia
  const [resultado, setResultado] = useState({}); //o set é uma função que atualiza o estado da lista
  const handleSubmit = async (e) => {
    e.preventDefault(); //previne o reload ao pressionar enter
    const response = await axios.post("/pesquisar", { pesquisa: pesquisa });
    console.log(response.data.res); //diferente do data do backend, mostra o dado que chega no console.log
    setPesquisa("");
    //setResultados([...resultados, response.data.res]); //res do backend
    setResultado(response.data.res);

  };

  

  return (
    <section className="conteiner flex">
      <div>
        <form onSubmit={handleSubmit}> 
          <TextField
            style={{ padding: 34 }}
            value={pesquisa}
            id="searchInput"
            placeholder="Procure pelo nome"
            margin="normal"
            onChange={e => setPesquisa(e.target.value)} 
          />

          <Button
            type="submit"
            onClick={handleSubmit}
            //onKeyPress={handleClick}
            variant="outlined"
            color="secondary"
            style={{ margin: 45 }}
          >
            Buscar
          </Button>
  
          
          {resultado.length>0 && resultado.map((res,index)=><div key={index}><h1>
            Nome: {res[0]}</h1><h3>
            Link: <a href="{res[1]}">{res[1]}</a></h3><span>
            Arquivo: {res[2]}</span></div>)}

          </form>
        </div>
      </section>
  );
}
export default ItemList; 
