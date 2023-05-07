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
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function IconCheckboxes() {
  return (
    <div>
      <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
    </div>
  );
}


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#afe6d1',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  position: 'center',
  color: 'theme.palette.text.secondary',
  height: 60,


})
);



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
 
  const addWord = async (wordEnglish, wordHebrew) => {
       
      const config = {
        headers: {
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token"))
        }
      } 
      console.log(config)
      const res = await axios.post("http://localhost:3600/api/user/wordsList",  {wordEnglish, wordHebrew},config);
      console.log(res)
     
  }
  const deleteWord = async (wordEnglish, wordHebrew) => {
       
    const config = {
      headers: {
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token"))
      }
    } 
    console.log(config)
    const res = await axios.delete("http://localhost:3600/api/user/wordsList", {
      data: { wordEnglish, wordHebrew },
      ...config
    });
    console.log(res)
   
}

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
                  return <Item>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Checkbox onChange={(e) => {
                        if (e.target.checked == true)
                        addWord(wordsEng[index], wordsHeb[index]);
                        else
                        deleteWord(wordsEng[index], wordsHeb[index])
                        }}   {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                      <div>{wordsEng[index]} - {wordsHeb[index]}</div>
                    </div>

                  </Item>
                })
              }
             
            </Stack>
          </Box>
        </ul>
      </li>

    </List>
  );
}





