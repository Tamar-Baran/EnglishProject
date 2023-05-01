
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AlertDialog from './alertGrade';
import { Dialog } from '@mui/material';
import { DialogTitle } from '@mui/material';
import { DialogContent } from '@mui/material';
import { DialogContentText } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { DialogActions } from '@mui/material';
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from 'react';
import LockPersonIcon from '@mui/icons-material/LockPerson';
export default function Elevation({ i, grade, name, lessonId, type }) {
  const [open, setOpen] = React.useState(false)
  const [disable, setDisable] = useState(false);
  const { logedIn } = useContext(AuthContext);
  const [counter, setCounter] = useState(false);
  const handleClickOpen = ()=>{
    setOpen(true)
  }
  const handleClose = ()=>{
    setOpen(false)
  }
  const onClickLearnMore=()=>{
     navigate( `lesson/${lessonId}`)
  }
  const navigate = useNavigate()

  useEffect(() => {
   if(logedIn==false){

    if(i!=0)
    setDisable(true);

   }
  }, []);
  //   const gradeText = typeof grade === 'object' ? JSON.stringify(grade) : grade;
  return (
 <div style={{width:210,lineHeight:7}}>
    <Card sx={{ maxWidth:223 ,backgroundColor:'gainsboro' }}>
     
      <CardContent>
   
        <Typography
          variant="h6"
          noWrap
          component="a"
          href={!disable?`/${type}/lesson/${lessonId}`:''}
          sx={{
            mr: 2,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            textAlign: 'center'
          }}
        >
          <div>{name}</div>
        </Typography>
        {!disable==true && logedIn&&
        ` Your grade is: ${grade}`
        }
         {!disable==true && !logedIn&&
       grade
        }
       {!disable==false && grade &&
        <LockPersonIcon style={{}}></LockPersonIcon>
        
      }
        <Typography variant="body2" color="text.secondary" >
        </Typography>
      </CardContent>
      <CardActions style={{backgroundColor:'white'}}>
        
      <Button disabled={disable} onClick={handleClickOpen}>
View Grades      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"your grades"}
        </DialogTitle>
      
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           here it supposes to take to your profil,
           do you want to improve your test?

          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Improve </Button>
          <Button onClick={handleClose} autoFocus>
            Continue
          </Button>
        </DialogActions>
      </Dialog>

     

        <Button size="small" disabled={disable} onClick={onClickLearnMore}>Learn More</Button>
      </CardActions>
    </Card>
    </div> 
  );





}
