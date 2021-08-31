import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import NavBar from '../components/NavBar'
import '@fontsource/roboto'
import '../assets/css/dashboard.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import PublicIcon from '@material-ui/icons/Public';
import WorkIcon from '@material-ui/icons/Work';
import CardsHeader from '../components/CardsHeader'
import Cards from '../components/Cards'
import Graphics from '../components/Graphics';
import TableMaterial from '../components/TableMaterial';


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1
    },
    iconos: {
        color: 'white'
    },
    container: {
        paddingTop: '40px',
        alignItems: 'center'
    },
    containerGrafica: {
        marginTop: '40px'
    },
    containerTabla: {
        marginTop: '40px'
    }
}))

const data = [
    {
        id: 1,
        title:
            "repo-pokemon",
        link: "https://github.com/hugotata78/repo-pokemon",
        commits:22
    },
    {
        id: 2,
        title:
            "meli-challenge",
        link: "https://github.com/hugotata78/meli-challenge",
        commits:16
    },
    {
        id: 3,
        title:
            "tuto-material-ui",
        link: "https://github.com/hugotata78/tuto-material-ui",
        commits:5
    },
];
const Dashboard = () => {

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <NavBar />
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <CardsHeader icono={<GitHubIcon className={classes.iconos} />} titulo="GITHUB" texto="https://github.com/hugotata78" color="rgba(248,80,50,1)" font="white" />
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <CardsHeader icono={<PublicIcon className={classes.iconos} />} titulo="PAÍS" texto="ARGENTINA" color="rgba(248,80,50,1)" font="white" />
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <CardsHeader icono={<WorkIcon className={classes.iconos} />} titulo="PROFESIÓN" texto="FULL STACK DEVELOPER" color="rgba(248,80,50,1)" font="white" />
                </Grid>
                <Grid container spacing={1} className={classes.container} xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <Cards titulo="SEGUIDORES" texto="1" />
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <Cards titulo="REPOSITORIOS" texto="25" />
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <Cards titulo="CONTRIBUCIONES 2021" texto="104" />
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <Cards titulo="PROC. CONTRIBUCIONES" texto="9.36%" />
                    </Grid>
                </Grid>
                <Grid item xs={0} sm={0} md={1} lg={1} xl={1}></Grid>

                <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className={classes.containerGrafica}>
                    <Graphics />
                </Grid>
                <Grid item xs={12} className={classes.containerTabla}>
                    <TableMaterial data={data} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard