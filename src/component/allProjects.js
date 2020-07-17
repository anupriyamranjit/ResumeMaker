import React, {useState,useEffect} from 'react';
import {
    Avatar,
    Breadcrumbs as MuiBreadcrumbs,
    Button,
    Box,
    Card,
    Fab,
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
import {Link} from "react-router-dom"
import AddIcon from '@material-ui/icons/Add';



function ItemCard(project){
	const handleDelete =  (id) => {
		project.onDelete(id);
	}
    const handleUpdate =  (id) => {
        window.location.href="http://localhost:3000/projects/" + id
    }
    return(
    <Card>
        <CardContent>
            <h2>{project.project.name}</h2>
            <h4>{project.project.position}</h4>
            <h6>{project.project.what}</h6>
            <h6>{project.project.tools}</h6>
	    <Button style={{color: "red"}} onClick={() => handleDelete(project.project._id)}>Delete </Button>
        <Button style={{color: "yellow"}} onClick={() => handleUpdate(project.project._id)}>Update </Button>
        </CardContent>
    </Card>
    )
}






export default function AllProjects(){
    const [projects,setProjects] = useState([]);
    const handleDelete = (id) => {
		axios.delete('/api/projects/' + id)
		.then(response => {
			alert(response.data);
			window.location.reload(false)
		})
	}
    useEffect(()=>{
        axios.get('/api/projects')
            .then(response => {
                setProjects(response.data)
            })
            .catch(err => {
                console.log(err);
            });
            
        

    },[])
    return(
        <Card>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        {projects.map(project =>(
                            <ItemCard onDelete={handleDelete} project={project}/>
                        ))}
                    </Grid>
                </Grid>
                <Link to="/addproject">
                <Fab style={{float:"right"}}color="primary" aria-label="add">
        <AddIcon/>
        </Fab>
        </Link>
             </CardContent>
        </Card>
    )
}
