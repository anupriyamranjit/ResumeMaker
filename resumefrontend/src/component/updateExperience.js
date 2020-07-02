import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {withRouter, RouteComponentProps} from "react-router";
import {
    Avatar,
    Breadcrumbs as MuiBreadcrumbs,
    Button,
    Box,
    Card,
    CardContent,
    Divider,
    FormControl as MuiFormControl,
    Grid,
    Input,
    InputLabel,
    MenuItem,
    Link,
    TextField,
    Typography
  } from "@material-ui/core";

export default function UpdateExperience({ match }){
let params = match.params;
const [name,setName] = useState("");
const [position,setPosition] = useState("");
const [firstLine,setfirstLine] = useState("");
const [secondLine,setsecondLine] = useState("");
const [thirdLine,setthirdLine] = useState("");


useEffect(() => {
	axios.get('/api/experience/' +`${params.id}`)
	.then(response => {
        setName(response.data.name)
        setPosition(response.data.position)
        setfirstLine(response.data.firstLine)
        setsecondLine(response.data.secondLine)
        setthirdLine(response.data.thirdLine)
    })
	.catch(err => alert(err))

},[])




const onSubmit = e =>{
      e.preventDefault();
      const updatedExperience ={
        id: params.id,
        name: name,
        position : position,
        firstLine : firstLine,
        secondLine : secondLine,
        thirdLine : thirdLine
      }
      axios.post('/api/experience/update/'+`${params.id}`, updatedExperience)
      .then(res => {
        alert(res.data) 
        window.location.href="http://localhost:3000/experience"})
      .catch(err => console.log(err))


  }
	return(
        <Card>
        <CardContent>
    <Grid container spacing={2}>
    <Grid item md={6}>
        <TextField
          id="standard-helperText"
          label="Name"
          value={name}
          defaultValue={name}
          onChange= {e => setName(e.target.value)}
          variant="outlined"
          fullWidth
        />
        </Grid>
    <Grid item md={6}>
         <TextField
          id="standard-helperText"
          label="Position"
          value={position}
          defaultValue={position}
          onChange= {e => setPosition(e.target.value)}
          variant="outlined"
          fullWidth
        />
        </Grid>
        <Grid item md={6}>

         <TextField
          id="standard-helperText"
          label="First Line"
          value={firstLine}
          defaultValue={firstLine}
          onChange= {e => setfirstLine(e.target.value)}
          variant="outlined"
          fullWidth
        />
        </Grid>
<Grid item md={6}>
         <TextField
          id="standard-helperText"
          label="Second Line"
          value={secondLine}
          defaultValue={secondLine}
          onChange= {e => setsecondLine(e.target.value)}
          variant="outlined"
          fullWidth
        />
 </Grid>
<Grid item md={12}>
         <TextField
          id="standard-helperText"
          label="Third Line"
          value={thirdLine}
          defaultValue={thirdLine}
          onChange= {e => setthirdLine(e.target.value)}
          variant="outlined"
          fullWidth
        />
         </Grid>
         <Grid alignContent='center' item md={12}>
          <Button style={{backgroundImage: 'linear-gradient( 95deg,#a8ff78 0%,#a8ff78 50%,#78ffd6 100%)',color: 'black'}}onClick={onSubmit}> Submit </Button>
         </Grid>
        </Grid>

       
        </CardContent>
        </Card>
		
	)

}
