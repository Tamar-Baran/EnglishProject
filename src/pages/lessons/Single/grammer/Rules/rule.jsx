import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { useEffect, useState } from "react";
import axios from "axios";

import { Box } from '@mui/material';

export default function GrammerRules({lessonId}) {
    const [rulesList, setRulesList] = useState([]);
    const [contentRule, setContentRule] = useState([]);
  
    useEffect(() => {
        async function fetchData() {
          const config = {
            headers: {
              'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token"))
            }
          }
          const { data } = await axios.get(`http://localhost:3600/api/lesson/lessonContent/${lessonId}`, config)
         console.log(data)
            var values = [];
            var keys = [];
            Object.values(data).forEach(function (d) {
            Object.values(d).forEach((val) => { values.push(val) })
            Object.keys(d).forEach((val) => { keys.push(val) })
            setRulesList(keys)
            setContentRule(values)
            console.log(values)
            console.log(keys)

      })
        }
        fetchData();
      }, []);
  return (
  <List
      
        sx={{
        width: '105%',
        maxWidth:'102%',
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 500,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {rulesList.map((content,index) => (
        <li key={`section-${index}`} >
          <ul>
            <ListSubheader >{`${content}` }</ListSubheader>
          {contentRule[index]}
          </ul>
        </li>
      ))}
    </List>
  );
}
