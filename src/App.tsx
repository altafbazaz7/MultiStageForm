import "./App.css"
import {useState} from "react";
import {Stack,TextField, Button, Typography} from '@mui/material/' 
import { Box } from "@mui/system";


const App = () => {
  const [stage, setStage] = useState(1)
  const [data, setData] = useState({
    name:"",
    address:"",
    email:"",
    age:"",
    phone:"",
    profession:"",
  })
  const [active, setActive] = useState(false)

  

  const handleStage =() => {
    setStage(2)
    console.log(stage)
    setActive(true)
  }

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const {name, value} = e.target
    setData({
      ...data,
       [name]: value
    })
  }
  console.log(data)


  return (
    <>
      <Stack direction={"column"}  width={"25vw"} padding={"30px"}  marginTop={"25%"} boxShadow={"2px 2px 2px 2px silver"}>
        <Stack direction={"row"} gap={"0.25rem"}>
          <Box sx={{width:"33%",height:"40px",borderRadius:"5px",display:"flex", justifyContent:"center", alignItems:"center", border: stage === 1 ? "1px solid blue" : "1px solid black" }} >1</Box>
          <Box sx={{width:"33%",height:"40px",borderRadius:"5px",display:"flex", justifyContent:"center", alignItems:"center", border: stage === 2 ? "1px solid blue" : "1px solid black" }} >2</Box>
          <Box sx={{width:"33%",height:"40px",borderRadius:"5px",display:"flex", justifyContent:"center", alignItems:"center", border: stage === 3 ? "1px solid blue" : "1px solid black" }} >3</Box>

        </Stack>

        {
          stage === 1 && (
      <Stack  direction={"column"} gap="1.5rem" padding="0.5rem">
          <TextField sx={{width:"70%", marginLeft:"15%"}} label="Name" name="name"  onChange={handleChange} value={data.name} />
          <TextField sx={{width:"70%", marginLeft:"15%"}}  label="Address" name="address" onChange={handleChange} value={data.address}/>
          <TextField sx={{width:"70%", marginLeft:"15%"}}  label="Email" name="email"  onChange={handleChange}value={data.email} />
          <Button variant={"outlined"} onClick={handleStage}>Next</Button>
        </Stack>
          )
        }



{
          stage === 2 && (
            <>
      <Stack  direction={"column"} gap="1rem"  padding="0.5rem">
          <TextField sx={{width:"70%", marginLeft:"15%"}}  label="Age" name="age" onChange={handleChange}   value={data.age} />
          <TextField sx={{width:"70%", marginLeft:"15%"}} label="Phone" name="phone"  onChange={handleChange}  value={data.phone}/>
          <TextField sx={{width:"70%", marginLeft:"15%"}}  label="Profession" name="profession"  onChange={handleChange} value={data.profession} />
          <Button variant={"outlined"} onClick={() => setStage(1)}>Previous</Button>
          <Button variant={"outlined"} onClick={() => setStage(3)}>Next</Button>
        </Stack>
        </>
          )
        }



{
          stage === 3 && (
            <>
      <Stack  direction={"column"} gap="1rem">
          <Typography sx={{width:"70%", marginLeft:"15%"}}> {data.name} </Typography>
          <Typography sx={{width:"70%", marginLeft:"15%"}}>{data.age} </Typography>
          <Typography sx={{width:"70%", marginLeft:"15%"}}>{data.phone}</Typography>
          <Typography sx={{width:"70%", marginLeft:"15%"}}>{data.address} </Typography>
          <Typography sx={{width:"70%", marginLeft:"15%"}}> {data.profession}</Typography>
          <Typography sx={{width:"70%", marginLeft:"15%"}}> {data.email}</Typography>


          <Button variant={"outlined"} onClick={() => alert("Does Something ...")}>Submit</Button>
        </Stack>
        </>
          )
        }



        
      </Stack>
    </>
  )
}

export default App
