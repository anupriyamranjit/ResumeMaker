import React,{useState,useEffect} from 'react';
import jsPDF from 'jspdf';
import axios from 'axios';
import {
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
    Collapse,
    Typography
  } from "@material-ui/core";
  import Checkbox from '@material-ui/core/Checkbox';
  import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Stepper from './stepper';



export default function ResumePage(){
	const [PDF,setPDF] = useState('');
	const [jobPosition,setjobPosition] = useState("Software Developer")
	const [award,setAward] = useState([]);
	const [project,setProject] = useState([]);
  const [experience,setExperience] = useState([]);
  const [projectList,setProjectList] = useState([]);
  const [experienceList,setExperienceList] = useState([]);
  const [awardList,setAwardList] = useState([]);
  const [languages,setLanguages] = useState([]);
  const [frameworks,setFramework] = useState([]);
  const [languageList,setLanguagesList] = useState([
    "5f0009046671b9e5a4e70c54",
    "5f00144c6671b9e5a4e70c5f",
    "5f0014526671b9e5a4e70c60",
    "5f00145a6671b9e5a4e70c61",
    "5f00145e6671b9e5a4e70c62",
    ]);
  const [frameworkList,setFrameworkList] = useState([
    "5f00090c6671b9e5a4e70c55",
    "5f0009156671b9e5a4e70c56",
    "5f00091c6671b9e5a4e70c57",
    "5f00092a6671b9e5a4e70c58",
    "5f000d646671b9e5a4e70c59",
    "5f000d7b6671b9e5a4e70c5a",
    "5f000d836671b9e5a4e70c5b",
    "5f000d8a6671b9e5a4e70c5c",
    "5f000d936671b9e5a4e70c5d",
    "5f000da26671b9e5a4e70c5e",
    ]);
  const [name,setName] = useState("Anupriyam Resume");
  const [lastResume,setlastResume] = useState("");
  const [expanded, setExpanded] = React.useState(false);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const getCheck = (id, type) => {
      if(type === 'project'){
        let itemList = projectList
         if(itemList.indexOf(id) === -1){
          return false
        } else {
          return true
        }
      }
      else if(type === 'award'){
        let itemList = awardList
         if(itemList.indexOf(id) === -1){
          return false
        } else {
          return true
        }
      }
      else if(type === 'framework'){
        let itemList = frameworkList
         if(itemList.indexOf(id) === -1){
          return false
        } else {
          return true
        }
      }
      else if(type === 'language'){
        let itemList = languageList
         if(itemList.indexOf(id) === -1){
          return false
        } else {
          return true
        }
      }
      else {
        let itemList = experienceList
        if(itemList.indexOf(id) === -1){
          return false
        } else {
          return true
        }
      }


    }


  function ItemCard(project){


  const handleChange= (id,checked) => {
    if(project.type === 'project'){
      let itemList = projectList
    
    if(checked === false){
      const index = projectList.indexOf(id)
      if(index > -1){
        itemList.splice(index, 1)
      } 
    } else {
        itemList.push(id)
      }
      setProjectList(itemList)
      

    }

    if(project.type === 'award'){
      let itemList = awardList
    
    if(checked === false){
      const index = awardList.indexOf(id)
      if(index > -1){
        itemList.splice(index, 1)
      } 
    } else {
        itemList.push(id)
      }
      setAwardList(itemList)
      

    }

    if(project.type === 'framework'){
      let itemList = frameworkList
    
    if(checked === false){
      const index = frameworkList.indexOf(id)
      if(index > -1){
        itemList.splice(index, 1)
      } 
    } else {
        itemList.push(id)
      }
      setFrameworkList(itemList)
      

    }

    if(project.type === 'language'){
      let itemList = languageList
    
    if(checked === false){
      const index = languageList.indexOf(id)
      if(index > -1){
        itemList.splice(index, 1)
      } 
    } else {
        itemList.push(id)
      }
      setLanguagesList(itemList)
      

    }

    if(project.type === 'experience'){
      let itemList = experienceList
    
    if(checked === false){
      const index = experienceList.indexOf(id)
      if(index > -1){
        itemList.splice(index, 1)
      } 
    } else {
        itemList.push(id)
      }
      setExperienceList(itemList)
 

    }
  }
    
    return(
    <Card style={{ display:'flex', justifyContent:'center' }}>
        <CardContent>
            <h7>{project.project.name} </h7>
            <Checkbox defaultChecked={project.check ? true : false} onChange={(e) => handleChange(project.project._id,e.target.checked)}/>
        </CardContent>
    </Card>
    )
}

	useEffect(()=>{
        axios.get('/api/award')
            .then(response => {
                setAward(response.data)
            })
            .catch(err => {
                console.log(err);
            });
	axios.get('/api/projects')
		.then(response => {
			setProject(response.data)
		})
		.catch(err => {
			console.log(err);
		});

    axios.get('/api/experience')
    .then(response => {
      setExperience(response.data)
    })
    .catch(err => {
      console.log(err);
    });

    axios.get('/api/framework')
    .then(response => {
      setFramework(response.data)
    })
    .catch(err => {
      console.log(err);
    });

    axios.get('/api/languages')
    .then(response => {
      setLanguages(response.data)
    })
    .catch(err => {
      console.log(err);
    });

    },[])

    const handleDownload = () => {
      generatePDF('Download')
    }

    const handleSaveDatabase = () => {
      generatePDF('Database')
    }

    const handleGenerate = () => {
      generatePDF('Generate')
    }







	const generatePDF = (action) => {
	var doc = new jsPDF();

	const leftside = 15
	const rightside = 100
	const font_xsmall = 8
	const font_small = 10
	const font_medium = 20
	const font_large = 22
	const font_xlarge = 30
	

	doc.addFont('ArialMS', 'Arial', 'normal','Calibri');
	doc.setFillColor("#293e60");
	doc.setFont('ArialMS');
	doc.setFontSize(font_xlarge);
	doc.setTextColor("Black");
	doc.text(leftside, 25, 'Anupriyam Ranjit');


//Job Position Section
	doc.setFontSize(font_medium);
	var job_position = jobPosition;
	doc.text(210-4*job_position.length, 25, `${job_position}`);
// Contact
	var contact_info = ["aranjit@uwaterloo.ca", "www.anupriyamranjit.weebly.com", "www.github.com/anupriyamranjit"];
	doc.setLineWidth(0.5);
	doc.setFontSize(font_large);
	doc.text(leftside, 45, 'Contact');
	doc.line(leftside, 47, 65, 47, "DF")
	doc.setFontSize(10);
	var latest_element = 0;
	var i = 0; 
	for (i = 0; i < contact_info.length; i++) {

  	doc.text(leftside,52+ 5*i,contact_info[i]);
  	latest_element = 52+ 5*i;
	}
  //["Python","Javascript","C","Latex","HTML","CSS","SQL"]
	var p_lang = []

  for(i = 0; i < languages.length; i++){
  if(languageList.indexOf(languages[i]._id) > -1){
    p_lang.push(languages[i].name)
  }
}
	var p_frame = []

  for(i = 0; i < frameworks.length; i++){
  if(frameworkList.indexOf(frameworks[i]._id) > -1){
    p_frame.push(frameworks[i].name)
  }
}
  //["Django","React","Firebase", "Heroku", "Bootstraps", "Git", "BeautifulSoup","Selenium","Pandas","Mathplotlib","Seaborn", "sklearn","NLTK" ]
doc.setFontSize(font_large);
doc.text(leftside, latest_element + 15, 'Skills');
doc.line(leftside, latest_element + 17, 65, latest_element + 17, "DF");
latest_element += 22;
doc.setFontSize(font_small);
doc.setFontType('bold')
doc.text(leftside, latest_element , 'Languages');
doc.setFontType('normal');
doc.setFontSize(font_small);
latest_element += 5;
for (i = 0; i < p_lang.length; i++) {
  doc.text(leftside,latest_element,p_lang[i]);
  latest_element = latest_element+ 5
}
latest_element += 5
doc.setFontSize(font_small);
doc.setFontType('bold')
doc.text(leftside, latest_element , 'Frameworks');
doc.setFontType('normal');
doc.setFontSize(font_small);
latest_element += 5;
for (i = 0; i < p_frame.length; i++) {
  doc.text(leftside,latest_element,p_frame[i]);
  latest_element = latest_element+ 5
}
// Education
doc.setFontSize(font_large);
doc.text(leftside, latest_element + 10, 'Education');
doc.line(leftside, latest_element + 12, 65,latest_element + 12)
doc.setFontSize(font_small + 2);
doc.setFontType('bold')
doc.text(leftside, latest_element + 17 , 'University of Waterloo');
doc.setFontType('normal');
doc.setFontSize(font_small);
doc.text(leftside, latest_element + 22 , 'Bachelors in Computer Science');
doc.text(leftside, latest_element + 27 , 'and Business Administration');
doc.text(leftside, latest_element + 32 , 'Double Degree');
doc.setFontSize(font_xsmall);
doc.text(leftside, latest_element + 37 , '2019-Present');
latest_element += 37
// Courses/Certifications 
doc.setFontSize(font_large);
doc.text(leftside, latest_element + 15, 'Certifications');
doc.line(leftside, latest_element + 17, 65,latest_element + 17)
latest_element += 22;
doc.setFontSize(font_small);
var certs = [["Intoduction to SQL", "University of Michigan"],["Data Analysis with Panda", "Codeacademy"]]
for (i = 0; i < certs.length; i++) {
  doc.setFontSize(font_small);
  doc.text(leftside,latest_element,certs[i][0]);
  doc.setFontSize(font_xsmall);
  doc.text(leftside,latest_element+4, "by " + certs[i][1]);
  latest_element = latest_element+ 9
}
doc.setFontSize(font_small);
var experience2 = []

for(i = 0; i < experience.length; i++){
  if(experienceList.indexOf(experience[i]._id) > -1){
    experience2.push([experience[i].name,experience[i].position,experience[i].firstLine,experience[i].secondLine,experience[i].thirdLine])
  }
}



var right_side = 75
var new_latest = 30
doc.setFontSize(font_large);
doc.text(right_side, 45, 'Experience');
doc.line(right_side, 47, 150, 47)
new_latest += 2
for (i = 0; i < experience2.length; i++) {
  new_latest += 21
  doc.setFontSize(12);
  doc.text(right_side,new_latest,experience2[i][0]);
  doc.setFontSize(9);
  doc.setTextColor("Gray");
  doc.text(right_side,new_latest+4,experience2[i][1]);
  doc.setTextColor("Black");
  doc.setFontSize(9);
  doc.text(right_side+3,new_latest+9,experience2[i][2]);
  doc.circle(right_side+1,new_latest+9,0.5,'F');
  doc.text(right_side+3,new_latest+14,experience2[i][3]);
  doc.circle(right_side+1,new_latest+14,0.5,'F');
  doc.text(right_side+3,new_latest+19,experience2[i][4]);
  doc.circle(right_side+1,new_latest+19,0.5,'F');
  new_latest += 5
}
new_latest += 25
doc.setFontSize(font_large);
doc.text(right_side, new_latest, 'Projects');
doc.line(right_side, new_latest+2, 150, new_latest+2)
new_latest += 2
				
var project2 = []

for(i = 0; i < project.length; i++){
  if(projectList.indexOf(project[i]._id) > -1){
    project2.push([project[i].name,project[i].position,project[i].what,project[i].tools])
  }
}

new_latest -= 13
for (i = 0; i < project2.length; i++) {
  new_latest += 18
  doc.setFontSize(12);
  doc.text(right_side,new_latest,project2[i][0]);
  doc.setFontSize(9);
  doc.setTextColor("Gray");
  doc.text(right_side,new_latest+4,project2[i][1]);
  doc.setTextColor("Black");
  doc.setFontSize(9);
  doc.text(right_side+3,new_latest+9,project2[i][2]);
  doc.circle(right_side+1,new_latest+8,0.5,'F');
  doc.text(right_side+3,new_latest+14,project2[i][3]);
  doc.circle(right_side+1,new_latest+13,0.5,'F');
  new_latest += 2
}

var award2 = []

for(i = 0; i < award.length; i++){
  if(awardList.indexOf(award[i]._id) > -1){
    award2.push([award[i].name,award[i].what,award[i].year])
  }
}

new_latest += 22
doc.setFontSize(font_large);
doc.text(right_side, new_latest, 'Awards');
doc.line(right_side, new_latest+2, 150, new_latest+2)
new_latest += 8
for (i = 0; i < award2.length; i++) {
  doc.setFontSize(11);
  doc.text(right_side,new_latest,award2[i][0]);
  doc.setFontSize(8);
  doc.setTextColor("Gray");
  doc.text(right_side,new_latest+4,award2[i][1]);
  doc.setTextColor("Black");
  new_latest += 10
}

	var string = doc.output('datauristring');

  if(action === 'Download'){
    doc.save(`${name}.pdf`)
  }

  if(action === 'Database'){
    const resume = {name:name, data_uri: lastResume}
    axios.post('http://localhost:5000/api/resume/add', resume)
      .then((res) => {
        alert(res.data)
        setName('')
      })
      .catch((err) => alert(err))
  }
	setPDF(string)
  setlastResume(string)
	}

  function MakeExperience(){
    return(
    <Card style={{ display:'flex', justifyContent:'center' }}>
<CardContent>
<h1 style={{ display:'flex', justifyContent:'center' }}> Experience </h1>

                        {experience.map(experience =>(
                            <ItemCard check={getCheck(experience._id,'experience')} type = 'experience' project ={experience}/>
                        ))}

      
    </CardContent>
    </Card>
    )


  }


  function MakeAward(){
    return(
    <Card style={{ display:'flex', justifyContent:'center' }}>
<CardContent>
<h1 style={{ display:'flex', justifyContent:'center' }}> Award </h1>

                        {award.map(awards =>(
                            <ItemCard  check={getCheck(awards._id,'award')} type = 'award'project ={awards}/>
                        ))}

      
    </CardContent>
    </Card>
    )


  }

  function MakeFramework(){
    return(
    <Card style={{ display:'flex', justifyContent:'center' }}>
<CardContent>
<h1 style={{ display:'flex', justifyContent:'center' }}> Frameworks </h1>

                        {frameworks.map(framework =>(
                            <ItemCard check={getCheck(framework._id,'framework')} type = 'framework' project ={framework}/>
                        ))}
    

    


      
    </CardContent>
    </Card>
    )


  }

  function MakeLanguages(){
    return(
    <Card style={{ display:'flex', justifyContent:'center' }}>
<CardContent>
<h1 style={{ display:'flex', justifyContent:'center' }}> Languages </h1>

                        {languages.map(language =>(
                            <ItemCard check={getCheck(language._id,'language')} type = 'language' project ={language}/>
                        ))}
    

    


      
    </CardContent>
    </Card>
    )


  }

  function MakeProject(){
    return(
    <Card style={{ display:'flex', justifyContent:'center' }}>
<CardContent>
<h1 style={{ display:'flex', justifyContent:'center' }}> Project </h1>

                        {project.map(project =>(
                            <ItemCard check={getCheck(project._id,'project')} type = 'project' project ={project}/>
                        ))}
    

    


      
    </CardContent>
    </Card>
    )


  }


	return(
		<Grid container spacing={4} style={{ display:'flex', justifyContent:'center' }}>

		<Grid item xs={6}>
    <TextField
                id="outlined-name"
                name= "Name"
                label= "Name"
                value={name}
                onChange={e => setName(e.target.value)}
                variant="outlined"
                fullWidth
              />
              
             <Card >
<CardContent> 

<Stepper one={<MakeExperience/>} two={<MakeAward />} three={<MakeFramework />} four={<MakeLanguages />} five={<MakeProject />}/>


    



    </CardContent>
    </Card>

    

     


    



    


    <Card style={{ display:'flex', justifyContent:'center' }}>
        <CardContent>
        <Box m={2} pt={1} style={{ display:'flex', justifyContent:'center' }}>
            <Button pt={10} variant="contained" color="primary"  onClick ={handleGenerate}>Generate PDF</Button>
            </Box>
            <Box m={2} pt={1} style={{ display:'flex', justifyContent:'center' }}>
            <Button pt={1} variant="contained" color="primary" onClick ={handleDownload}>Download PDF</Button>
            </Box>
            <Box m={2} pt={1} style={{ display:'flex', justifyContent:'center' }}>
            <Button pt={1} variant="contained" color="primary" onClick ={handleSaveDatabase}>Save PDF in Database</Button>
            </Box>
        </CardContent>
    </Card>
    
		</Grid>



  
		<Grid item xs={6}>
    <h3>{name}</h3>
		<iframe src={PDF} height="100%" width="100%"></iframe>
		</Grid>

		</Grid>




	)

}
