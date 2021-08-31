import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import github from '../assets/img/github.png'


const useStyles= makeStyles(()=>({
    root:{
        flexGrow: 1
    },
    menuButton:{
        marginRight: '16px'
    },
    title:{
        flexGrow: 1
    },
    imagen:{
        borderRadius: '50%'
    }
    }));

const NavBar = ()=>{

    const classes = useStyles()
    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                       Dashboard
                    </Typography>

                    <IconButton color="inherit">
                            <img src={github} width="40px" height="40px" className={classes.imagen} alt='img'/>
                            </IconButton>
                </Toolbar>

            </AppBar>
            
        </div>
    )
}

export default NavBar