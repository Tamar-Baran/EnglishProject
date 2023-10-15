import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import axios from 'axios';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import IconButton from '@mui/material/IconButton';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

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
  backgroundColor: '#e0f2f1',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  position: 'relative',
  color: theme.palette.text.secondary,
  borderRadius: theme.spacing(2),
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'background-color 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#b2dfdb',
  },
}));

export default function WordsList({ lessonId }) {
  const [wordsHeb, setWordsHeb] = useState([]);
  const [wordsEng, setWordsEng] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    async function fetchData() {
      const config = {
        headers: {
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token"))
        }
      };
      const { data } = await axios.get(`http://localhost:3600/api/lesson/lessonContent/${lessonId}`, config);
      const res = await axios.get("http://localhost:3600/api/user/wordsList", config);

      var values = [];
      var keys = [];
      var str = JSON.stringify(res.data);
      Object.values(data).forEach(function (d) {
        Object.values(d).forEach((val) => {
          if (str.includes(val))
            values.push([val, 'true']);
          else
            values.push([val, 'false']);
        });
        Object.keys(d).forEach((val) => {
          if (str.includes(val))
            keys.push([val, 'true']);
          else
            keys.push([val, 'false']);
        });
      });

      setWordsHeb(values);
      setWordsEng(keys);
    }
    fetchData();
  }, []);

  const handlePlayAudio = async (word) => {
    try {
      // Make a request to your audio API or service to get the audio URL for the word
      const response = await axios.get(`http://your-audio-api.com/word/${word}`);
      const audioUrl = response.data.audioUrl;
      
      // Create an audio element and play the audio
      const audio = new Audio(audioUrl);
      audio.play();
    } catch (error) {
      console.error('Failed to play audio:', error);
    }
  };
  

  const addWord = async (index, wordEnglish, wordHebrew) => {
    const config = {
      headers: {
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token"))
      }
    };
    const res = await axios.post("http://localhost:3600/api/user/wordsList", { wordEnglish, wordHebrew }, config);
    if (res.status === 200) {
      setAlertMessage("Word added to your list!");
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      var updatedWordsEng = [...wordsEng];
      updatedWordsEng[index][1] = 'true';
      setWordsEng(updatedWordsEng);
    } else {
      setAlertMessage("Failed to add word. Please try again.");
      setShowAlert(true);
    }
  };

  const deleteWord = async (index, wordEnglish, wordHebrew) => {
    const config = {
      headers: {
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token"))
      }
    };
    const res = await axios.delete("http://localhost:3600/api/user/wordsList", {
      data: { wordEnglish, wordHebrew },
      ...config
    });
    if (res.status === 200) {
      setAlertMessage("Word removed from your list!");
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      var updatedWordsEng = [...wordsEng];
      updatedWordsEng[index][1] = 'false';
      setWordsEng(updatedWordsEng);
    } else {
      setAlertMessage("Failed to remove word. Please try again.");
      setShowAlert(true);
    }
  };

  return (
    <>
      {showAlert && (
        <Alert severity={alertMessage.includes("Failed") ? "error" : "success"} sx={{ marginBottom: '1rem' }}>
          <AlertTitle>{alertMessage}</AlertTitle>
        </Alert>
      )}
      <List
        sx={{
          width: '100%',
          maxWidth: 1000,
          position: 'relative',
          overflow: 'auto',
          height: '100%',
          maxHeight: 400,
          '& ul': { padding: 0 },
        }}
        subheader={<li />}
      >
        <li>
          <ul>
            <Box sx={{ width: '85%', color: '#fcedee', margin: '5%' }}>
              <Stack spacing={2}>
                {wordsEng.map((word, index) => (
                  <Item key={index}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <IconButton
                        onClick={() => handlePlayAudio(wordsEng[index][0])}
                        aria-label="Play audio"
                      >
                        <PlayCircleOutlineIcon />
                      </IconButton>
                      {wordsEng[index][1] === 'true' ? (
                        <IconButton onClick={() => { deleteWord(index, wordsEng[index][0], wordsHeb[index][0]) }}>
                          <PlaylistAddCheckIcon />
                        </IconButton>
                      ) : (
                        <IconButton onClick={() => { addWord(index, wordsEng[index][0], wordsHeb[index][0]) }}>
                          <PlaylistAddIcon />
                        </IconButton>
                      )}
                      <div>{wordsEng[index][0]} - {wordsHeb[index][0]}</div>
                    </div>
                  </Item>
                ))}
              </Stack>
            </Box>
          </ul>
        </li>
      </List>
    </>
  );
}
