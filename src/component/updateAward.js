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

export default function UpdateAward({ match }){
let params = match.params;
const [name,setName] = useState("");
const [what,setWhat] = useState("");
const [year,setYear] = useState("");



useEffect(() => {
	axios.get('/api/award/' +`${params.id}`)
	.then(response => {
        setName(response.data.name)
        setWhat(response.data.what)
        setYear(response.data.year)
    })
	.catch(err => alert(err))

},[])




const onSubmit = e =>{
      e.preventDefault();
      const updatedAward ={
        id: params.id,
        name: name,
        what : what,
        year : year
      }
      axios.post('/api/award/update/'+`${params.id}`, updatedAward)
      .then(res => {
        alert(res.data) 
        window.location.href="http://localhost:3000/award"})
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
          label="What"
          value={what}
          defaultValue={what}
          onChange= {e => setWhat(e.target.value)}
          variant="outlined"
          fullWidth
        />
        </Grid>
        <Grid item md={6}>

         <TextField
          id="standard-helperText"
          label="Year"
          value={year}
          defaultValue={year}
          onChange= {e => setYear(e.target.value)}
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
