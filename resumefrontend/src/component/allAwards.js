
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
		alert(id)
	}
    return(
    <Card>
        <CardContent>
            <h2>{project.project.name}</h2>
            <h6>{project.project.what}</h6>
            <h6>{project.project.year}</h6>
	    <Button style={{color: "red"}} onClick={() => handleDelete(project.project._id)}>Delete </Button>
        </CardContent>
    </Card>
    )
}






export default function AllAwards(){
    const [awards,setAward] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/award')
            .then(response => {
                setAward(response.data)
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
                        {awards.map(award =>(
                            <ItemCard  project ={award}/>
                        ))}
                    </Grid>
                </Grid>
             </CardContent>
        </Card>
    )
}
