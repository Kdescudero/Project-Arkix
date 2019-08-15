import React from 'react'
import {Fab, Icon} from "@material-ui/core";
import './styles/index.css'

const FabButton = () =>(
   <div className={"Button_Fab"}>
      <Fab style={{ backgroundColor : "#F18F24", color : '#FFF' }}><Icon>add</Icon></Fab>
   </div>
);

export default FabButton;
