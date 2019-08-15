import React from "react";
import {LinearProgress, Typography, Paper} from '@material-ui/core';
import "./styles/index.css"

const Spinner = () => (
   <Paper className={"Container_Spinner"}>
      <Typography variant={"h4"} style={{ textAlign : 'center', marginBottom : 10 }}>Cargando Datos...</Typography>
      <LinearProgress style={{ backgroundColor : "#f7941d" }}/>
   </Paper>
);

export default Spinner;
