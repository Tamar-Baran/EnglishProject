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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#afe6d1',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  position: 'center',
  color: 'theme.palette.text.secondary',
  height: 60,
}));

export default function WordsList({ lessonId }) {
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
      console.log(wordsHeb, "wordsHeb")
      console.log(wordsEng, "wordsEng")
    }
    fetchData();
  }, []);
  return (
    <List
      sx={{
        width: '102%',
        maxWidth: 10000,

        position: 'relative',
        overflow: 'auto',
        height: '100%',
        maxHeight: 400,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >

      <li >
        <ul>
          <Box sx={{ width: '85%', color: '#fcedee', margin: '5%' }}>
            <Stack spacing={2}>
              {
                { wordsEng } && wordsEng.map((word, index) => {
                  return <Item>{wordsEng[index]} - {wordsHeb[index]}</Item>
                })
              }
              {/* <Item>Item 3</Item>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item> */}
            </Stack>
          </Box>
        </ul>
      </li>

    </List>
  );
}





