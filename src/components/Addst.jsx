import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addst = (props) => {
  var [st,setst] = useState(props.data)
  const handler = (e) =>{
    const {name,value}= e.target 
    setst({...st,[name]:value})
    console.log(st)
  }
  const saveData = () =>{
    console.log("Button clicked")
    if (props.method==="post"){
    axios.post("  http://localhost:3005/students",st)
    .then(respones=>{
      alert("succesfully added")
    })
    .catch(error=>{
      alert("Failed")
    })}
   else if (props.method==="put"){
    axios.put("http://localhost:3005/students/"+st.id,st)
    .then(respones=>{
      alert("succesfully ADD")
    })}
  }
  return (
    <div>
        <Typography>ADD STUDENTS</Typography>
      <TextField id="outlined-basic" label="ID"
       name='id'value={st.id}
       onChange={handler}
        variant="outlined" />
      <br></br>
      <br></br>
      <TextField id="outlined-basic" label="name" 
      name='name'value={st.name}
      onChange={handler} variant="outlined" />
      <br></br><br></br>
      <TextField id="outlined-basic" label="Grade"
      name='grade'value={st.grade}
      onChange={handler} variant="outlined" />
      <br></br>
      <Button variant='contained' onClick={saveData}>submit</Button>
    </div>
  )
}

export default Addst
