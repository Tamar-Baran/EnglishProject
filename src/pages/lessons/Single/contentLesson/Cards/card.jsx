import "./styleCards.css";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { useEffect, useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';



export default function Cards({ lessonId, index }) {
  const [wordsHeb, setWordsHeb] = useState([]);
  const [wordsEng, setWordsEng] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const config = {
        headers: {
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token"))
        }
      }
      const { data } = await axios.get(`http://localhost:3600/api/lesson/lessonContent/${lessonId}`, config)
      var values = [];
      var keys = [];
      Object.values(data).forEach(function (d) {

        Object.values(d).forEach((val) => { values.push(val) })
        Object.keys(d).forEach((val) => { keys.push(val) })
      })
      setWordsHeb(values)
      setWordsEng(keys)
    }
    fetchData();
  }, []);



  return (

    <> {index > (wordsEng.length-1) ?
      <h1>you finished!</h1> :
      (<div className='card' >
        <div className='content'>
          <div className='front'>
            {wordsHeb[index]}
          </div>
          <div className='back'>
            {wordsEng[index]}
          </div>
        </div>
      </div>)}
    

    </>

  )
}