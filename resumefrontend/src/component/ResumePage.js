import React,{useState} from 'react';
import jsPDF from 'jspdf';
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

export default function ResumePage(){
	const [PDF,setPDF] = useState('');

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
	var job_position = 'Software Developer';
	doc.text(210-4*job_position.length, 25, `${job_position}`);


	var string = doc.output('datauristring');
	var embed = "<embed width='720px' height='700px' src='" + string + "'/>"
	setPDF(string)
	}

	return(
		<div>
		<embed width='720px' height='700px' src=' " +  {PDF} + "'/>
		<Button onClick ={generatePDF}> Generate PDF</Button>
		</div>




	)

}
