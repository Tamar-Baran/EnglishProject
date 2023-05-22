


import DeleteIcon from '@mui/icons-material/Delete';
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
import IconButton from '@mui/material/IconButton';

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
  height: 100,


})
);
export default function PersonalWordsList() {
    const [words, setWords] = useState([]);
    const [wordsHeb, setWordsHeb] = useState([]);
    const [wordsEng, setWordsEng] = useState([]);
  
    
      useEffect(() => {
        async function fetchData() {
          const config = {
            headers: {
              'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token"))
            }
          }
         
       const {data} = await axios.get("http://localhost:3600/api/user/wordsList",config);

      var values = [];
      var keys = [];
      Object.values(data).forEach(function (d) {

        Object.values(d).forEach((val) => { values.push(val) })
        Object.keys(d).forEach((val) => { keys.push(val) })

        })
        setWordsHeb(values)
        setWordsEng(keys)
        console.log(values, "wordsHeb")
        console.log(keys, "wordsEng")
  
    
    }

        fetchData();
      }, []);
      const deleteWord=async(wordEnglish,wordHebrew)=>{
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
        setWordsHeb(wordsHeb.filter((w) => w !== wordHebrew));
        setWordsEng(wordsEng.filter((w) => w !== wordEnglish));

      }
return(<>
 <div >

    <li >
        <ul>
          <Box sx={{ width: '65%', color: '#fcedee', margin: '10%' }} >
            <Stack spacing={2}>
              {
                 wordsEng.length?wordsEng.map((word, index) => {
                  return <Item>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <IconButton onClick={()=>deleteWord(wordsEng[index],wordsHeb[index])} ><DeleteIcon /></IconButton>
                      <div>{wordsEng[index]} - {wordsHeb[index]}</div>
                    </div>

                  </Item>
                }):<h1>nothing in your words list</h1>                

              }
             
            </Stack>
          </Box>
        </ul>
      </li>
    </div>
      
        </>);

}