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
	const [firstLine,setfirstLine] = useState("");
  const [secondLine,setsecondLine] = useState("");
  const [thirdLine,setthirdLine] = useState("");

	const onSubmit = e =>{
      e.preventDefault();

      const experience = {
      	name:name,
      	position:position,
      	firstLine:firstLine,
        secondLine:secondLine,
        thirdLine:thirdLine,
      }
      axios.post('/api/experience/add', experience)
      .then((res) => alert(res.data))
    }

	return(
		<Card>
			<CardContent>

			<Typography variant="h3" gutterBottom>
			    Add Experience
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
                label= "First Line"
                value={firstLine}
                onChange={e => setfirstLine(e.target.value)}
                variant="outlined"
                fullWidth
                multiline
                rows={4}
              />
          </Grid>

          <Grid item md={6}>
           <TextField
                id="outlined-name"
                label= "Second Line"
                value={secondLine}
                onChange={e => setsecondLine(e.target.value)}
                variant="outlined"
                fullWidth
                multiline
                rows={4}
              />
          </Grid>

          <Grid item md={6}>
           <TextField
                id="outlined-name"
                label= "Third Line"
                value={thirdLine}
                onChange={e => setthirdLine(e.target.value)}
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
            <br />
            </Box>
            </Grid>

            </form>
            <br />
			</CardContent>
		</Card>
		)
}