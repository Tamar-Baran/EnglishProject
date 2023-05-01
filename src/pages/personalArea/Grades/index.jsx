import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "../saved.css";
export default function MyTests() {

    return (
        <Card sx={{ maxWidth: 200 }}>
          <CardActionArea>
      
            <CardContent  sx={{ minHeight:200,justifyContent:'center',display:'flex',alignItems:'center'}}>
              <Typography gutterBottom variant="h5" component="div">
                My Grades
              </Typography>
          
            </CardContent>  
            <div className="buttom_line" >
                 7
        </div>
          </CardActionArea>  
          
        </Card>
   

  );
}
