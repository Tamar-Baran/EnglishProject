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
  height: '100%',
  width: '100%',
  maxWidth: '180px',
  maxHeight: '260px',
  lineHeight: '80px',

}));


const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Elevation({grade,name}) {
  const gradeText = typeof grade === 'object' ? JSON.stringify(grade) : grade;
  return (
    <Grid container spacing={0}>
      {[lightTheme].map((theme, index) => (
        <Grid item xs={12} md={6} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: 'background.default',
                display: 'grid',
                sx: {
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  [theme.breakpoints.up('md')]: {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                  },
                },
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
              }}
            >
              <Item  elevation={12} sx={{
                height: '100%',
                width: '100%',
                maxWidth: '180px',
                maxHeight: '260px',
              }}>
                <TaskAltIcon/>     
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    textAlign:'center'
                  }}
                >
                  <div>jjjj</div>
                </Typography>
              </Item>
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
    
  );
}