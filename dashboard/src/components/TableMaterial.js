import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const StyledTableCell= withStyles(()=>({
    head:{
        color: 'white',
        background: 'black',
        textAlign: 'center'
    },
   body:{
        fontSize: 14,
    },
    }))(TableCell);

function TableMaterial(props) {
    return (
        <TableContainer>
            <Table>
            <TableHead>
            <TableRow>
               <StyledTableCell>Nombre Repositorio</StyledTableCell> 
               <StyledTableCell>Link Github</StyledTableCell> 
               <StyledTableCell>Contribuciones</StyledTableCell> 
            </TableRow>
            </TableHead>
            <TableBody>
                {props.data.map(element=>(
                    <TableRow key={element.id}>
                        <TableCell align="center">{element.title}</TableCell>
                        <TableCell align="center">{element.link}</TableCell>
                        <TableCell align="center">{element.commits}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableMaterial;