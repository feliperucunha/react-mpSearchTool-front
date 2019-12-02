import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Item from "../components/Item";
import Button from "@material-ui/core/Button";
import { normalize } from "path";
import axios from "axios";

function ItemList() {
  const [pesquisa, setPesquisa] = useState("");
  const handleClick = async () => {
    const response = await axios.post("/pesquisar", { pesquisa: pesquisa });
    console.log(response);
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

        <Grid container spacing={24} style={{ padding: 24 }}></Grid>
      </div>
    </section>
  );
}

export default ItemList;
