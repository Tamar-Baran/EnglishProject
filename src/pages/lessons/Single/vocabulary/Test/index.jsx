// import * as React from 'react';

// function fetchWords(){
//     //get all question by lessonId
//     //get all aswers
//     //map 
//     //dict {question:[answers]}
//     //{what is umbrela:[{word:מטריה, isCorrect:true},{word:מטריה, isCorrect:true}]}
// }


// export default function (){
// return(
//     //stepper
//     <></>
//     //Card
//     //4 answers 
//     //onclick = checkAnswer()
// );

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
import axios from "axios";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

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
        {/* {console.log(Object.entries(questions)[activeStep][1])}  */}
      {Object.entries(questions).map(([_, answers])=>
      <>
      {answers[0].question_Id?.questionText}
      
      {answers.map(({answerText})=>(<div>{answerText}</div>) )}
      </>
      )}


      {/* {Object.entries(questions)[2]} */}
  
      
     
{/* {console.log(Object.entries(questions)[activeStep][1])}        */}
      {/* <Paper
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

        <Typography></Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
      
        {Object.entries(questions).map((question, index) => (
          <div key={question.questionId}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
              src="dsdasfdf"
              alt={question[0].question_Id?.questionText}
              />
            ) : null}
         {question.questionId} </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      /> */}
    </Box>
  );
}

export default SwipeableTextMobileStepper;



