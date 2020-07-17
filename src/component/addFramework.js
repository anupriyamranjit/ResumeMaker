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



export default function Framework(){
	const [name,setName] = useState("");

	const onSubmit = e =>{
      e.preventDefault();

      const framework = {
      	name:name,
      }
      axios.post('/api/framework/add', framework)
      .then((res) => alert(res.data))
    }

	return(
		<Card>
			<CardContent>

			<Typography variant="h3" gutterBottom>
			    Add Frameworks
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


          </Grid>

          <Grid container spacing={8}>

            <Box pt={10} mx="auto">
              <Button style={{margin:5}} color="primary" variant="contained" type="submit">
               Save
            </Button>
            <br />
            </Box>
            </Grid>

            </form>
            <br />
			</CardContent>
		</Card>
		)
}