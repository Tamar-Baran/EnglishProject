import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import img from '../../../images/CLIPB001.gif'
import "../saved.css";
export default function SavedWordList() {
  return (
    <Card sx={{ maxWidth: 300,minWidth:200,minHeight:200, maxHeight:300, backgroundColor:'#bbdefb' }}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="200"
          image={img}
          alt="word List"
        /> */}
        <CardContent  sx={{ minHeight:200,justifyContent:'center',display:'flex',alignItems:'center'}}>
              <Typography gutterBottom variant="h5" component="div">
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
