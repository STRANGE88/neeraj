import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import Addst from './Addst';

const Read = () => {
    var [st, setst] = useState([])
    var  [single,setsingle]=useState([])
    var [update,setupdate]=useState(false)
    useEffect(() => {
        axios.get("http://localhost:3005/students")
            .then(response => {
                setst(st = response.data);
            })
            .catch(err => console.log(err))
    }, []);
    const dele =(id)=>{
        console.log("Dele"+id);
        axios.delete("http://localhost:3005/students/"+id)
        .then(response=>{
            alert("Deleted")
            window.locatiom.reload(false)
        })
    }
    const updateval = (value)=>{
    setsingle(value);
    setupdate(true);
    }
     var finaljsx =  
     <TableContainer component={Paper}>
         <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
             <TableHead>
                 <TableRow>
                     <TableCell >Id</TableCell>
                     <TableCell>Name</TableCell>
                     <TableCell>Grade</TableCell>
                     <TableCell>DELECT</TableCell>
                      <TableCell>UPDATE</TableCell>
                 </TableRow>
             </TableHead>
             <TableBody>
                 {st.map((value,index)=>{
                     return<TableRow key={index}>
                         <TableCell>{value.id}</TableCell>
                         <TableCell>{value.name}</TableCell>
                         <TableCell>{value.grade}</TableCell>
                         <TableCell><Button variant='contained'
                         onClick={()=>dele(value.id)}>DELECT</Button> 
                         </TableCell>
                         <TableCell><Button variant='contained'
                         onClick={()=>updateval(value)}>UPDATE</Button> 
                         </TableCell>
                     </TableRow>
                 })}
             </TableBody>
         </Table>
     </TableContainer>
     if (update){
        finaljsx = <Addst data={single} method="put"></Addst>
     }
    return (
        <div>
           <br></br>
           <br></br>
           {finaljsx}
        </div>
    )
}

export default Read
