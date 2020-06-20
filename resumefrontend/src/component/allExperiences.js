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
    return(
    <Card>
        <CardContent>
            <h2>{project.project.name}</h2>
            <h6>{project.project.position}</h6>
            <h6>{project.project.firstLine}</h6>
            <h6>{project.project.secondLine}</h6>
            <h6>{project.project.thirdLine}</h6>
        </CardContent>
    </Card>
    )
}






export default function AllExperiences(){
    const [experiences,setExperience] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/experience')
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
                <Grid>
                    <Grid item md={6}>
                        {experiences.map(experience=>(
                            <ItemCard  project={experience}/>
                        ))}
                    </Grid>
                </Grid>
             </CardContent>
        </Card>
    )
}
