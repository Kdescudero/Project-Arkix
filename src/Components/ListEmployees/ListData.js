import React from 'react';
import {Index} from "./compones";
import { TableHead, Table, TableBody, TableCell, Paper, TableRow, TableFooter, TablePagination,} from '@material-ui/core'
import './styles/Tabla.css'
import PropTypes from 'prop-types';

const ListData = ({ data = [] }) => {

   const [rowsPerPage, setRowsPerPage]  =  React.useState(5);
   const [page, setPage]                =  React.useState(0);
   const [name, setName]                =  React.useState("");
   const [salary, setSalary]            =  React.useState("");
   const [age, setAge]                  =  React.useState("");

   const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

   const filterList = data.filter(item => {

      if(name.length >= 1){
         return `${item.employee_name}`.toLowerCase().includes(name.toLowerCase());
      }

      if(age.length >= 1){
         return `${item.employee_age}`.toLowerCase().includes(age.toLowerCase());
      }

      if(salary.length !== ''){
         return `${item.employee_salary}`.toLowerCase().includes(salary.toLowerCase());
      }

      return null
   });

   const values = [
      { onChange : setName,   label : "Nombre",  value : name,    },
      { onChange : setAge,    label : "Edad",    value : age,     },
      { onChange : setSalary, label : "Salario", value : salary,  },
   ];


   const handleChangePage=(event, newPage)=> {
      setPage(newPage);
   };

   const handleChangeRowsPerPage=(event)=> {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
   };

   return (
      <>
         <Paper className={"Root"}>
            <div className={"TableWrapper"}>
               <Table className={"Table"}>
                  <TableHead>
                     <TableRow>
                        <TableCell><h3>Nombre</h3></TableCell>
                        <TableCell><h3>Edad</h3></TableCell>
                        <TableCell><h3>Salario</h3></TableCell>
                     </TableRow>
                  </TableHead>
                  <TableHead>
                     <TableRow>
                        {values.map((value, key) =>(
                           <TableCell key={`key_key_${key}`}>
                              <Index
                                 onChange =  {value.onChange}
                                 label    =  {value.label}
                                 value    =  {value.value}
                              />
                           </TableCell>
                        ))}
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {filterList.length === 0
                        ?
                        <TableRow>
                           <TableCell component={"th"} align={"center"}>
                              <h4>No se encontraron resultados</h4>
                           </TableCell>
                        </TableRow>
                        :
                        <>
                           {filterList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(item => (
                              <TableRow key={item.id}>
                                 <TableCell>   {item.employee_name}    </TableCell>
                                 <TableCell>   {item.employee_age}     </TableCell>
                                 <TableCell>   {item.employee_salary}  </TableCell>
                              </TableRow>
                           ))}
                        </>
                     }
                     {emptyRows > 0 && (
                        <TableRow style={{ height: 48 * emptyRows }}>
                           <TableCell colSpan={6} />
                        </TableRow>
                     )}
                  </TableBody>
                  <TableFooter>
                     <TableRow>
                        <TablePagination
                           onChangeRowsPerPage  =  {handleChangeRowsPerPage}
                           rowsPerPageOptions   =  {[5, 10, 25]}
                           onChangePage         =  {handleChangePage}
                           SelectProps          =  {{inputProps: { 'aria-label': 'rows per page' }, native: true,}}
                           rowsPerPage          =  {rowsPerPage}
                           colSpan              =  {3}
                           count                =  {data.length}
                           page                 =  {page}
                        />
                     </TableRow>
                  </TableFooter>
               </Table>
            </div>
         </Paper>
      </>
   );
};

ListData.propTypes = {
   data : PropTypes.array,
};

export default ListData;
