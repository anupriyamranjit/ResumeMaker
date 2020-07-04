
import React, {useState,useEffect} from 'react';
import {
    Avatar,
    Breadcrumbs as MuiBreadcrumbs,
    Button,
    Box,
    Fab,
    Card,
    CardContent,
    Divider,
    FormControl as MuiFormControl,
    Grid,
    Input,
    InputLabel,
    MenuItem,
    TextField,
    Typography
  } from "@material-ui/core";
import axios from 'axios'
import AddIcon from '@material-ui/icons/Add';
import {Link} from "react-router-dom";



function ItemCard(project){
	const handleDelete =  (id) => {
		project.onDelete(id);
	}
    const handleUpdate =  (id) => {
        window.location.href="http://localhost:3000/award/" + id
    }
    return(
        <Grid item md={6}>
    <Card>
        <CardContent>
            <h2>{project.project.name}</h2>
            <h6>{project.project.what}</h6>
            <h6>{project.project.year}</h6>
	    <Button style={{color: "red"}} onClick={() => handleDelete(project.project._id)}>Delete </Button>
        <Button style={{color: "yellow"}} onClick={() => handleUpdate(project.project._id)}>Update </Button>
        </CardContent>
    </Card>
    </Grid>
    )
}






export default function AllAwards(){
    const [awards,setAward] = useState([]);
    const handleDelete = (id) => {
		axios.delete('/api/award/' + id)
		.then(response => {
			alert(response.data);
			window.location.reload(false)
		})
	}

    useEffect(()=>{
        axios.get('/api/award')
            .then(response => {
                setAward(response.data)
            })
            .catch(err => {
                console.log(err);
            });
    },[])
    return(
    <Grid container spacing={2} style={{padding: '20px'}}>
        <Card style={{backgroundImage: 'linear-gradient( 95deg,#1f4037 0%,#1f4037 50%,#99f2c8 100%)'}}>
            <CardContent>
                <Grid container spacing={2}>
                        {awards.map(award =>(
                            <ItemCard  onDelete={handleDelete} project ={award}/>
                        ))}
                </Grid>
             </CardContent>
        </Card>
        <Link to="/addaward">
        <Fab style={{float:"right"}}color="primary" aria-label="add">
        <AddIcon/>
        </Fab>
        </Link>
        </Grid>
    )
}
