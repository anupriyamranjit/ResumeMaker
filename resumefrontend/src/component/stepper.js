import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import Check from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {StepConnector} from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const Accepted = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,#11998e 0%,#11998e 50%,#38ef7d 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,#000000 0%,#11998e 50%,#38ef7d 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);






const IconStyleAccepted = 

  makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#38ef7d',
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: '100%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#38ef7d',
    zIndex: 1,
    fontSize: 18,
  },
});



function StepIconAccept(props) {
    const classes = IconStyleAccepted();
    const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}






function getSteps(reject) {
  return ['Experience', 'Award', 'Framework', 'Languages','Project'];
}

function getStepContent(step,props,reject) {
  switch (step) {
    case 0:
      return props.one;
    case 1:
      return props.two;
    case 2:
      return props.three;
    case 3:
      return props.four;
    case 4:
      return props.five;
    default:
      return 'Unknown step';
  }
}

function getConnector(step ,reject){
  switch (step) {
    default:
      return <Accepted />;
  }
}

export default function HorizontalLinearStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [isRejected, setReject] = React.useState(true);
  const steps = getSteps(isRejected);

  const getIcon = () => {

      return StepIconAccept
      
    }
    
    

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}  style={{ backgroundColor: "transparent" }} connector={getConnector(activeStep ,isRejected)}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
          
            <Step key={label} {...stepProps} >
              <StepLabel {...labelProps} StepIconComponent={getIcon()}>{label}</StepLabel>
            </Step>

          );
        }
        )
      }
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep,props,isRejected)}</Typography>
            <div>
            
              <Button disabled={activeStep === 0} variant="contained" color="primary" onClick={handleBack} className={classes.button}>
              Back
            </Button>

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
