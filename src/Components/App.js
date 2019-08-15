import React from 'react';
import Header from '../Components/Header'
import ListEmployees from "./ListEmployees";
import { Grid } from '@material-ui/core'

const App=()=>{
  return (
     <Grid container>
        <Grid item xs={12}>
           <Header />
        </Grid>
        <Grid item xs={12}>
           <ListEmployees/>
        </Grid>
     </Grid>
  );
};

export default App;
