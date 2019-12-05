import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


function ItemList() {
  const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  });
  const classes = useStyles();
  const [pesquisa, setPesquisa] = useState("");
  const [resultados, setResultados] = useState([]);
  const handleClick = async () => {
    const response = await axios.post("/pesquisar", { pesquisa: pesquisa });
    console.log(response.data); //diferente do data do backend
    setPesquisa("");
    setResultados([...resultados, response.data.res]); //res do backend

  };


  return (
    <section class="conteiner flex">
      <div>
        <TextField
          style={{ padding: 34 }}
          value={pesquisa}
          id="searchInput"
          placeholder="Procure pelo nome"
          margin="normal"
          onChange={e => setPesquisa(e.target.value)}
          
        />

        <Button
          onClick={handleClick}
          variant="outlined"
          color="secondary"
          style={{ margin: 45 }}
        >
          Buscar
        </Button>

        <ul>
          {resultados.map(resultado => (
            <li key={resultado}>{resultado}</li>
          ))}
        </ul>

        <Grid container spacing={24} style={{ padding: 24 }}></Grid>
      </div>
    </section>
  );
}
export default ItemList; 
