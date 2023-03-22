import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addst = () => {
  var [st,setst] = useState({id:"",name:"",grade:""})
  const handler = (e) =>{
    const {name,value}= e.target 
    setst({...st,[name]:value})
    console.log(st)
  }
  const saveData = () =>{
    console.log("Button clicked")
    axios.post("  http://localhost:3005/students",st)
    .then(respones=>{
      alert("succesfully added")
    })
    .catch(error=>{
      alert("Failed")
    })

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
