import React, {useState,useEffect} from 'react';
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



function ItemCard(project){
	const handleDelete =  (id) => {
		project.onDelete(id);
	}
    return(
    <Card>
        <CardContent>
            <h2>{project.project.name}</h2>
            <h4>{project.project.position}</h4>
            <h6>{project.project.what}</h6>
            <h6>{project.project.tools}</h6>
	    <Button style={{color: "red"}} onClick={() => handleDelete(project.project._id)}>Delete </Button>
        </CardContent>
    </Card>
    )
}






export default function AllProjects(){
    const [projects,setProjects] = useState([]);
    const handleDelete = (id) => {
		axios.delete('http://localhost:5000/projects/' + id)
		.then(response => {
			alert(response.data);
			window.location.reload(false)
		})
	}
    useEffect(()=>{
        axios.get('http://localhost:5000/projects')
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
                <Grid>
                    <Grid item md={6}>
                        {projects.map(project =>(
                            <ItemCard onDelete={handleDelete} project={project}/>
                        ))}
                    </Grid>
                </Grid>
             </CardContent>
        </Card>
    )
}
