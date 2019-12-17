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
import TablePagination from '@material-ui/core/TablePagination';




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

  const rows = [
  ];


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage); 

  };
  const handleChangeRowsPerPage = event => {
     setRowsPerPage(+event.target.value);
    setPage(0);
   };


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
            onChange={e => setPesquisa(e.target.value)} //input
          />

          <Button
            type="submit" //pra funcionar o Enter
            onClick={handleSubmit} //faz o botão funcionar
            variant="outlined"
            color="secondary"
            style={{ margin: 45 }}
          >
            Buscar
          </Button>
      
            {/* TESTE SEM TABELA PRONTA 
            {resultado.length>0 && resultado.map((res,index)=><div key={index}><h1>
            Nome: {res[0]}</h1><h3>
            Link: <a href="http://{res[1]}">{res[1]}</a></h3><span>
            Arquivo: {res[2]}</span></div>)}
            */}

          <Paper className={classes.root}>
            <Table className={classes.table} aria-label="customized table" >
             <TableHead>
                <TableRow>
                  <StyledTableCell variant='head' align="left">Nome</StyledTableCell>
                  <StyledTableCell variant='head' align="right">Link</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {resultado.length>0&&resultado.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((resultado,index) => {
              return (
                <TableRow key={index}>
                <TableCell component="th" scope="row">
                   {resultado[0].replace(/b'|\n'|\r\n'|'|\n|\r\n/g, "").replace("\n'", "")}
                 </TableCell>
                <TableCell align='right'><a href="http://{resultado[1]}">{resultado[1]}</a>
                   </TableCell>
               </TableRow> );})}
              </TableBody>
            </Table>
            <TablePagination
        rowsPerPageOptions={[15, 30, 100]}
        labelRowsPerPage='Itens por página:'
        component="div"
        count={resultado.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
          </Paper>              
          </form>
        </div>
      </section>
  );
}
export default ItemList; 
