import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "../saved.css";
export default function MyLevel() {

    return (
        <Card sx={{ maxWidth: 300,minWidth:200, backgroundColor:'#ffccbc' }}>
          <CardActionArea>
      
            <CardContent  sx={{ minHeight:200,justifyContent:'center',display:'flex',alignItems:'center'}}>
              <Typography gutterBottom variant="h5" component="div">
                My Level
              </Typography>
          
            </CardContent>  
            <div className="buttom_line"style={{backgroundColor:'#f4511e'}} >
                 7
        </div>
          </CardActionArea>  
          
        </Card>
   

  );
}
