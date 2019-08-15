import React from 'react'
import { AppBar, Typography, Toolbar, IconButton, Icon  } from '@material-ui/core';

const Header=()=>(
   <AppBar position={"static"} style={{ backgroundColor : "#F18F24", color : '#FFF' }}>
      <Toolbar style={{ justifyContent: "space-between" }}>

         <div style={{ display : 'flex', alignItems : 'center' }}>
            <IconButton color={"inherit"}><Icon>menu</Icon></IconButton>
            <Typography variant={"h6"} style={{ marginLeft : 5 }} noWrap>Lista Empleados</Typography>
         </div>

         <div className={"Profile"}>
            <IconButton color={"inherit"}>
               <Icon>person_outline</Icon>
            </IconButton>
         </div>

      </Toolbar>
   </AppBar>
);

export default Header;
