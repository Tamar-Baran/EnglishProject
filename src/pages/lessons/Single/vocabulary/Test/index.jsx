
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';

import axios from "axios";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


function SwipeableTextMobileStepper({lessonId}) {
  const [questions, setQuestions] = useState({});
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(2);
  const [maxSteps,setMaxSteps] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  useEffect(() => {
    async function fetchData() {
      const config = {
        headers: {
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token"))
        }
      }
      const { data } = await axios.get(`http://localhost:3600/api/question/lessonId/${lessonId}`, config)

      const arr=data.reduce((questionsObj,currentAnswer)=>
      {  
        const { questionId }=currentAnswer

        return {...questionsObj,
          [questionId]:[...(questionsObj[questionId]||[]),currentAnswer]
        }
         
      },[])
      console.log("1234",arr);
      setQuestions(arr)

       

      // {Object.entries(questions).map(([_, answers])=>
      //   <>
      //   {answers[0].question_Id?.questionText}
       
      //   {answers.map(({answerText})=>(<div>{answerText}</div>) )}
      //   </>
      //   )}

    }
     fetchData();

  }, []);


 

   

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
     <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{Object.values(questions)[activeStep]?Object.values(questions)[activeStep][0].question_Id?.questionText:<CircularProgress></CircularProgress>}</Typography>

      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {Object.values(questions).map((answers, index) => (
          <div key={index}>
            {answers.map(({ answerText }) => (
              <Button key={answerText} onClick={() => console.log(answerText)}>
                {answerText}
              </Button>
            ))}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default SwipeableTextMobileStepper;