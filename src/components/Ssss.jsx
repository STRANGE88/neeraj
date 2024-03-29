import { Typography } from '@mui/material'
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

const Ssss = () => {
    var [st, setst] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3005/teacher")
            .then(response => {
                setst(st = response.data);
            })
            .catch(err => console.log(err))
    }, []);
    return (
        <div>
            <Typography>WELCOME TO MY APP</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Id</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Grade</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {st.map((value,index)=>{
                            return<TableRow key={index}>
                                <TableCell>{value.id}</TableCell>
                                <TableCell>{value.name}</TableCell>
                                <TableCell>{value.class}</TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Ssss


