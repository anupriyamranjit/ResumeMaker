const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
	);
const connection = mongoose.connection;
connection.once('open',() =>{
	console.log("MongoDB database connection established")
})

const awardRouter = require('./routes/award');
const experienceRouter = require('./routes/experience');
const projectsRouter = require('./routes/projects');
const resumeRouter = require('./routes/resume');
const languagesRouter = require('./routes/languages');
const frameworkRouter = require('./routes/framework');

app.use('/api/award',awardRouter);
app.use('/api/experience',experienceRouter);
app.use('/api/projects',projectsRouter);
app.use('/api/resume',resumeRouter);
app.use('/api/languages',languagesRouter);
app.use('/api/framework',frameworkRouter);


app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
})




