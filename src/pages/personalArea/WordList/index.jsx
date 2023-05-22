import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import img from '../../../images/CLIPB001.gif'
import { useEffect, useState } from "react";
import "../saved.css";
import PersonalWordsList from './PersonalWordsList'
import { Link, useNavigate } from "react-router-dom";

export default function SavedWordList() {
  const [renderChild, setRenderChild] = useState(false);
  const navigate = useNavigate()

  const handleClick = () => {
    console.log("navigate");
    navigate(`savedWordsList`);
  };
  
  return (
 
   <Card sx={{ maxWidth: 300,minWidth:200,minHeight:200, maxHeight:300, backgroundColor:'#bbdefb' }} onClick={()=>handleClick()}>
      <CardActionArea onClick={()=>handleClick()}>
        <CardContent  sx={{ minHeight:200,justifyContent:'center',display:'flex',alignItems:'center'}} onClick={()=>handleClick()}>
              <Typography gutterBottom variant="h5" component="div" >
                My Words List
              </Typography>
          
            </CardContent>
        <div className="buttom_line" style={{backgroundColor:'#039be5'}} >
                    0/60 מילים
        </div>
      </CardActionArea>
    </Card>

  );
}
