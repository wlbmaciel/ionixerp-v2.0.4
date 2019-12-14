import React, { Component } from "react";
//import AppService from "../AppService";
import Typography from "@material-ui/core/Typography";
import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Link,
  Paper
} from "@material-ui/core";
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
//import { makeStyles } from "@material-ui/styles";
import { withStyles } from '@material-ui/core/styles';
//import { MuiThemeProvider } from '@material-ui/core/styles';
//import { createMuiTheme } from '@material-ui/core/styles';

const style = {
  marginTop: "80px",
  marginLeft: "40px",
  marginRight: "40px",
  flexGrow: 1
};

// //const useStyles = makeStyles(theme => ({
// class UseStyles extends makeStyles(theme => ({
//   paper: {
//     marginTop: theme.spacing(3),
//     marginBottom: theme.spacing(3),
//     padding: theme.spacing(2),
//     [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
//       marginTop: theme.spacing(6),
//       marginBottom: theme.spacing(6),
//       padding: theme.spacing(3),
//     },
//   },
// //}));
// ));

//const useStyles = theme => ({
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    }
  }}));

//const Atividades = props => {
class Atividades extends Component {
  constructor() {
    super();

    this.state = {
      data: null
    };

    window.localStorage.setItem("action", "");
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    // fetch("http://sotisolutions.web1208.kinghost.net/app/?endpoint=Atividade")
    //   .then(response => response.json())
    //   .then(data => this.setState({ data }));

    this.setState({
      data: [
        {
          FILIAL: 12,
          COD_ATIV: "000001",
          DESCRICAO: "NAO DEFINIDO",
          DT_INCLUSAO: "2018-07-13 03:36:38",
          USU_INCLUSAO: 1,
          DT_ULT_ALT: "2018-07-13 03:36:38",
          USU_ULT_ALT: "1"
        },
        {
          FILIAL: 12,
          COD_ATIV: "000002",
          DESCRICAO: "COMERCIAL",
          DT_INCLUSAO: "2018-07-26 12:10:57",
          USU_INCLUSAO: 1,
          DT_ULT_ALT: "2018-07-26 12:10:57",
          USU_ULT_ALT: "1"
        },
        {
          FILIAL: 12,
          COD_ATIV: "000003",
          DESCRICAO: "COMERCIAL",
          DT_INCLUSAO: "2018-07-26 12:10:57",
          USU_INCLUSAO: 1,
          DT_ULT_ALT: "2018-07-26 12:10:57",
          USU_ULT_ALT: "1"
        }
      ]
    });
  }

  add() {
    window.localStorage.setItem("action", "add");
    this.props.history.push("/atividades");
  }

  render() {
    //const { classes } = this.props;
    const classes = useStyles();

    const action = window.localStorage.getItem("action");

    if (action === "") {
      return (
        <div style={style}>
          <Paper className={classes.paper}>

          </Paper>
          <Typography component="h1" variant="h5">
            Atividades
          </Typography>
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.add()}
          >
            Criar nova atividade
          </Button>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Código</TableCell>
                <TableCell>Descrição</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.data != null &&
                this.state.data.map(row => (
                  <TableRow key={row.COD_ATIV}>
                    <TableCell>{row.COD_ATIV}</TableCell>
                    <TableCell>{row.DESCRICAO}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      );
    } else if (action === "add") {
      return (
        <div style={style}>
          <Typography component="h1" variant="h5">
            Atividades
          </Typography>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={2}>
                <TextField
                  label="Código"
                  id="COD_ATIV"
                  name="COD_ATIV"
                  variant="outlined"
                  margin="normal"
                  //fullWidth
                  //autoComplete="email"
                  //autoFocus
                  //required
                  disabled
                  value="0"
                />
              </Grid>
              <Grid item xs>
                <TextField
                  id="DESCRICAO"
                  name="DESCRICAO"
                  label="Descrição"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  // type="password"
                  // autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Grid container align-items-xs-center justify-xs-flex-end>
              <Grid item xs align-items-xs-center justify-xs-flex-end>
                <Button
                  type="submit"
                  //fullWidth
                  variant="contained"
                  color="primary"
                >
                  Incluir
                </Button>
              </Grid>
              <Grid item align-items-xs-center justify-xs-flex-end>
                <Button
                  //fullWidth
                  variant="contained"
                  color="default"
                >
                  Cancelar
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      );
    }
  }
}

//export default Atividades;
export default withStyles(useStyles)(Atividades);
