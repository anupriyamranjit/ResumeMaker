import React, {useState,useEffect} from 'react';
import {
    Button,
    Card,
    Fab,
    CardContent,
    Grid,
  } from "@material-ui/core";
import axios from 'axios'
import {Link} from "react-router-dom"
import AddIcon from '@material-ui/icons/Add';

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
            <iframe src={project.project.data_uri} height="500" width="100%"></iframe>
	    <Button style={{color: "red"}} onClick={() => handleDelete(project.project._id)}>Delete </Button>
        <Button style={{color: "yellow"}} onClick={() => handleUpdate(project.project._id)}>Update </Button>
        </CardContent>
    </Card>
    )
}






export default function AllExperiences(){
    const [resume,setResume] = useState([]);
    const handleDelete = (id) => {
		axios.delete('/api/resume/' + id)
		.then(response => {
			alert(response.data);
			window.location.reload(false)
		})
	}
    useEffect(()=>{
        axios.get('/api/resume')
            .then(response => {
                setResume(response.data)
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
                        {resume.map(resume=>(
                            <ItemCard onDelete={handleDelete}  project={resume}/>
                        ))}
                    </Grid>
                </Grid>
        <Link to="/addresume">
        <Fab style={{float:"right"}}color="primary" aria-label="add">
        <AddIcon/>
        </Fab>
        </Link>
             </CardContent>
        </Card>
    )
}
