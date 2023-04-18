
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: 'theme.palette.text.secondary',
  backgroundColor:'#F9AAAA',
  height: 260,
  width: 180,
  lineHeight: '80px',

}));


const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Elevation({grade,name}) {
 console.log(grade)
 console.log(name)

  return (
   
    <Grid container spacing={0}>
      {[lightTheme].map((theme, index) => (
        <Grid item xs={6} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: 'background.default',
                display: 'grid',
                display: { xs: 'none', md: 'flex' },
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
              }}
            >
              
                <Item  elevation={12} ><TaskAltIcon/>     
            <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              textAlign:'center'
            }}
          >
          <div>{name}{grade}</div>
               
           </Typography>
</Item>

            
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
    
  );
}
