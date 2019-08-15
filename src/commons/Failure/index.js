import React from "react";
import { Paper, Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDizzy } from '@fortawesome/free-regular-svg-icons'
import PropTypes from 'prop-types'
import './styles/index.css'

const Failure = ({ message }) =>(
   <Paper className  =  {"Container_Failure"}>
      <FontAwesomeIcon
         className   =  {"Icon"}
         icon        =  {faDizzy}
      />
      <Typography
         className   =  {"Message"}
         variant     =  {"h5"}>
         {message}
      </Typography>
   </Paper>
);

Failure.propTypes = {
   message : PropTypes.string,
};

export default Failure;
