import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Item from '../components/Item'
import Button from '@material-ui/core/Button';
import { normalize } from 'path';




class ItemList extends Component {
    
      render() {
        return (
            <section class="conteiner flex">
                    <div>
                        <TextField style={{padding: 34}}
                            id="searchInput"
                            placeholder="Procure pelo nome"
                            margin="normal"
                            onChange={this.onSearchInputChange}
                        />

                            <Button variant="outlined" color="secondary" style={{margin: 45 }}
                                      onClick={async () => {
                                        const [nome] = ""
                                        const data = { nome };
                                        const response = await fetch("/pesquisar", {
                                          method: "POST",
                                          headers: {
                                            "Content-Type": "application/json"
                                          },
                                          body: JSON.stringify(data)
                                        });
                                      }}
                            >Buscar</Button>

                            <Grid container spacing={24} style={{padding: 24}}>
                        </Grid>


                        
                    </div>  
            </section>
     

        )
    }
}
export default ItemList;