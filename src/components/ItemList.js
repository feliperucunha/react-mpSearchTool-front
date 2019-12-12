import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


function ItemList() {
  useEffect(()=>{
    document.title = `Pesquisa MP`  //nome do site
  },[])

  const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontSize: 16
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });

  const [nome, link] = useState("");
  const[nome2, link2] = useState("");
  const classes = useStyles();
  const [pesquisa, setPesquisa] = useState(""); //lista de repo que começa com lista vazia
  const [resultado, setResultado] = useState({}); //o set é uma função que atualiza o estado da lista
  const handleSubmit = async (e) => {
    //setResultado("");
    e.preventDefault(); //previne o reload ao pressionar enter
    const response = await axios.post("/pesquisar", { pesquisa: pesquisa });
    console.log(response.data.res); //diferente do data do backend, mostra o dado que chega no console.log
   //setPesquisa(""); //faz não acumular pesquisas
    //setResultados([...resultados, response.data.res]); //res do backend
    setResultado(response.data.res);
    link("Nome")
    link2("Link")
  };
  //const handleRefresh = async(a) => {window.location.reload()} ;
 


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
            onChange={e => setPesquisa(e.target.value)} //input
            
          />

          <Button
            type="submit" //pra funcionar o Enter
            onClick={handleSubmit} //faz o botão funcionar
            variant="outlined"
            color="secondary"
            //onClick={handleRefresh}
            style={{ margin: 45 }}
          >
            Buscar
          </Button>
      
            {/*
            {resultado.length>0 && resultado.map((res,index)=><div key={index}><h1>
            Nome: {res[0]}</h1><h3>
            Link: <a href="http://{res[1]}">{res[1]}</a></h3><span>
            Arquivo: {res[2]}</span></div>)}
            */}

          <Paper className={classes.root}>
            <Table className={classes.table} aria-label="customized table" >
             <TableHead>
              <TableRow>
                <StyledTableCell variant='head' align="left">{nome}</StyledTableCell>
                <StyledTableCell variant='head' align="left">{link}</StyledTableCell>
                <StyledTableCell variant='head' align='left'>{link2}</StyledTableCell>
                <StyledTableCell variant='head' align="left">{nome2}</StyledTableCell>
              </TableRow>
            </TableHead>
              <TableBody>
                {resultado.length>0 && resultado.map((resultado,index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {resultado[0].replace(/b'|\n'|\r\n'|'|\n|\r\n/g, "").replace("\n'", "")}
                  </TableCell>
                  <TableCell align='right'><a href="http://{resultado[1]}">{resultado[1]}</a></TableCell>
                </TableRow>
                        ))}
              </TableBody>
            </Table>
          </Paper>              

          </form>
        </div>
      </section>
  );
}
export default ItemList; 
