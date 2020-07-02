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
    const handleUpdate =  (id) => {
        window.location.href="http://localhost:3000/experience/" + id
    }
    return(
    <Card>
        <CardContent>
            <h2>{project.project.name}</h2>
            <h6>{project.project.position}</h6>
            <h6>{project.project.firstLine}</h6>
            <h6>{project.project.secondLine}</h6>
            <h6>{project.project.thirdLine}</h6>
	    <Button style={{color: "red"}} onClick={() => handleDelete(project.project._id)}>Delete </Button>
        <Button style={{color: "yellow"}} onClick={() => handleUpdate(project.project._id)}>Update </Button>
        </CardContent>
    </Card>
    )
}






export default function AllExperiences(){
    const [experiences,setExperience] = useState([]);
    const handleDelete = (id) => {
		axios.delete('/api/experience/' + id)
		.then(response => {
			alert(response.data);
			window.location.reload(false)
		})
	}
    useEffect(()=>{
        axios.get('/api/experience')
            .then(response => {
                setExperience(response.data)
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
                        {experiences.map(experience=>(
                            <ItemCard onDelete={handleDelete}  project={experience}/>
                        ))}
                    </Grid>
                </Grid>
             </CardContent>
        </Card>
    )
}
