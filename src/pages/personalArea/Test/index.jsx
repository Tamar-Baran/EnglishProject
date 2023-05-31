import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";

import "../saved.css";
export default function MyTests() {
  const navigate = useNavigate()

  const handleClick = () => {
    console.log("navigate");
    navigate(`my-test`);
  };
    return (
        <Card sx={{ maxWidth: 300,minWidth:200, backgroundColor:'#b9f6ca' }}  onClick={()=>handleClick()}>
          <CardActionArea>
      
            <CardContent  sx={{ minHeight:200,justifyContent:'center',display:'flex',alignItems:'center'}}  onClick={()=>handleClick()}>
              <Typography gutterBottom variant="h5" component="div">
                My Tests
              </Typography>
          
            </CardContent>  
            <div className="buttom_line" style={{backgroundColor:'#00bfa5'}} >
                 7
        </div>
          </CardActionArea>  
          
        </Card>
   

  );
}
