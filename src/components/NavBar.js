import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = () => {
    return(
        <div>
            <AppBar position="static" color="secondary">
            <Toolbar>
                    <Typography variant="title" color="inherit">
                        Ferramenta de Pesquisa | Ministério Público
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar;