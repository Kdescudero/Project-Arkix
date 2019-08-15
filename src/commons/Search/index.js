import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, Icon, IconButton, TextField } from '@material-ui/core'

const Index = ({ value = "", onChange = () => null, label = "" }) => {
   return(
      <>
         <FormControl>
            <TextField
               onChange =  {(e)=>onChange(e.target.value)}
               label    =  {label}
               value    =  {value}
               name     =  {"search"}
            />
         </FormControl>
         <IconButton>
            <Icon>search</Icon>
         </IconButton>
      </>
   )
};

Index.propTypes = {
   onChange       : PropTypes.func,
   label          : PropTypes.string,
   value          : PropTypes.string,
};

export default Index
