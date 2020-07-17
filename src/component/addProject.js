import React, {useState} from 'react';
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
import axios from 'axios'



export default function Project(){
	const [name,setName] = useState("");
	const [position,setPosition] = useState("");
	const [what,setWhat] = useState("");
	const [tools,setTool] = useState("");

	const onSubmit = e =>{
      e.preventDefault();

      const project = {
      	name:name,
      	position:position,
      	what:what,
      	tools:tools
      }
      axios.post('/api/projects/add', project)
      .then((res) => alert(res.data))
      .catch((err) => alert(err))
    }

	return(
		<Card>
			<CardContent>

			<Typography variant="h3" gutterBottom>
			    Add Project
			  </Typography>
			  <Divider my={6} />
			  <br />
			  <form onSubmit={onSubmit}>

			<Grid container spacing={2}>
          <Grid item md={6}>
           <TextField
                id="outlined-name"
                name= "Name"
                label= "Name"
                value={name}
                onChange={e => setName(e.target.value)}
                variant="outlined"
                fullWidth
              />
          </Grid>

          <Grid item md={6}>
           <TextField
                id="outlined-name"
                name= "Position"
                label= "Position"
                value={position}
                onChange={e => setPosition(e.target.value)}
                variant="outlined"
                fullWidth
              />
          </Grid>

           <Grid item md={6}>
           <TextField
                id="outlined-name"
                name= "What"
                label= "What is it"
                value={what}
                onChange={e => setWhat(e.target.value)}
                variant="outlined"
                fullWidth
                multiline
                rows={4}
              />
          </Grid>

          <Grid item md={6}>
           <TextField
                id="outlined-name"
                name= "Tools"
                label= "What Tools Did You Use"
                value={tools}
                onChange={e => setTool(e.target.value)}
                variant="outlined"
                fullWidth
                multiline
                rows={4}
              />
          </Grid>

          </Grid>

          <Grid container spacing={8}>

            <Box pt={10} mx="auto">
              <Button style={{margin:5}} color="primary" variant="contained" type="submit">
               Save
            </Button>
            </Box>
            </Grid>

            </form>
            <br />
			</CardContent>
		</Card>
		)
}
