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
	const [what,setWhat] = useState("");
	const [year,setYear] = useState(0);

	const onSubmit = e =>{
      e.preventDefault();

      const award = {
      	name:name,
      	what:what,
      	year:year
      }
      axios.post('/api/award/add', award)
      .then((res) => alert(res.data))
    }

	return(
		<Card>
			<CardContent>

			<Typography variant="h3" gutterBottom>
			    Add Awards
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

          <Grid item md={12}>
           <TextField
                id="outlined-name"
                name= "Year"
                label= "What Year Did You Get The Award"
                value={year}
                onChange={e => setYear(e.target.value)}
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