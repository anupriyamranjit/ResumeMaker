import React,{useState,useEffect} from 'react';
import jsPDF from 'jspdf';
import axios from 'axios';
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
    Stepper,
    Typography
  } from "@material-ui/core";

function ItemCard(project){
    return(
    <Card>
        <CardContent>
            <h7>{project.project.name}</h7>
        </CardContent>
    </Card>
    )
}
export default function ResumePage(){
	const [PDF,setPDF] = useState('');
	const [jobPosition,setjobPosition] = useState("Software Developer")
	const [award,setAward] = useState([]);
	const [project,setProject] = useState([]);
	useEffect(()=>{
        axios.get('http://localhost:5000/award')
            .then(response => {
                setAward(response.data)
            })
            .catch(err => {
                console.log(err);
            });
	axios.get('http://localhost:5000/projects')
		.then(response => {
			setProject(response.data)
		})
		.catch(err => {
			console.log(err);
		});

    },[])





	const generatePDF = () => {
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
	var p_lang = ["Python","Javascript","C","Latex","HTML","CSS","SQL"]
	var p_frame = ["Django","React","Firebase", "Heroku", "Bootstraps", "Git", "BeautifulSoup","Selenium","Pandas","Mathplotlib","Seaborn", "sklearn","NLTK" ]
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
var experience = [
					["Central Peel Secondary School", "Full Stack Web Developer", "Developed a responsive website using React.js, Three.js, HTML/CSS and Javascript.","Worked in an Agile team to create an volume optimization web application.","Collaborated through Git in order to ensure maximum productivity.","Utilized Firebase to host on web."],
					["FoodPlastics Australia", "Quality Assurance Intern ", "Collaborated in a team to find any problems with a customers product.","Communicated with manager about the problem and challenges we were facing.","Created SOP and designed a process on how to ensure employees received the training."],
					["Kumon","Math Tutor","Personally taught over 200 kids from middle school to highschool students.","Worked in a fast-paced and result driven team to provide the best experience for students.","Lead team to successfully create the curriculum and correctly present it for the students."],
					["Spark Hackathon", "Organizer", "Organized one of Canada’s largest high-school student hackathon.","Communicated with Walmart and other retailers for fundraising.","Developed workshops and activities for the participants."]
				]


var right_side = 75
var new_latest = 30
doc.setFontSize(font_large);
doc.text(right_side, 45, 'Experience');
doc.line(right_side, 47, 150, 47)
new_latest += 2
for (i = 0; i < experience.length; i++) {
  new_latest += 21
  doc.setFontSize(12);
  doc.text(right_side,new_latest,experience[i][0]);
  doc.setFontSize(9);
  doc.setTextColor("Gray");
  doc.text(right_side,new_latest+4,experience[i][1]);
  doc.setTextColor("Black");
  doc.setFontSize(9);
  doc.text(right_side+3,new_latest+9,experience[i][2]);
  doc.circle(right_side+1,new_latest+9,0.5,'F');
  doc.text(right_side+3,new_latest+14,experience[i][3]);
  doc.circle(right_side+1,new_latest+14,0.5,'F');
  doc.text(right_side+3,new_latest+19,experience[i][4]);
  doc.circle(right_side+1,new_latest+19,0.5,'F');
  new_latest += 5
}
new_latest += 25
doc.setFontSize(font_large);
doc.text(right_side, new_latest, 'Projects');
doc.line(right_side, new_latest+2, 150, new_latest+2)
new_latest += 2
				
var project2 = []
{project.map(item => (
	project2.push([item.name,item.position,item.what,item.tools])))}
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
{award.map(award => (
	award2.push([award.name,award.what])
))}

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
	setPDF(string)
	}

	return(
		<Grid container spacing={3}>
		<Grid item xs={6}>
                    <Grid item md={6}>
                        {award.map(awards =>(
                            <ItemCard  project ={awards}/>
                        ))}
                    </Grid>
		<Button  variant="contained" color="primary"  onClick ={generatePDF}>Generate PDF</Button>
		<br />
		<br />
		<Button  variant="contained" color="primary" onClick ={generatePDF}>Download PDF</Button>
		<br />
		<br />
		<Button  variant="contained" color="primary" onClick ={generatePDF}>Save PDF in Database</Button>
		</Grid>
		<Grid item xs={6}>
		<iframe src={PDF} height="200%" width="100%"></iframe>
		</Grid>
		</Grid>




	)

}
