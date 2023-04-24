import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import Elevation from './Item'
import { Grid } from "@mui/material";
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";
import Stack from '@mui/material/Stack';

const List = ({ type }) => {
  const [lessonsList, setLessonsList] = useState([]);
  const [gradesList, setGradesList] = useState([]);
  const {logedIn}=useContext(AuthContext);


  useEffect(() => {
    async function fetchData() {
      
      console.log(logedIn);
     
      const config = {
        headers: {
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token"))
        }
      }
      const { data } = await axios.get(`http://localhost:3600/api/lesson/displayItem/${type}`, config)
    
   
      setLessonsList(data)
    }

    fetchData();
  }, [type]);
  useEffect(() => {
    async function fetchGrade() {
      if(logedIn==true){
        const config = {
          headers: {
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token"))
          }
        }

        const updatedGrades = await Promise.all(lessonsList.map(async (lesson) => {
          const { data: grade } = await axios.get(`http://localhost:3600/api/achievements/grades/${lesson.lessonId}`, config);
          console.log(grade);
          return grade || "you didn't try yet";
        }));

        setGradesList(updatedGrades);
    }
    else{
    setGradesList([0,0,0,0,0])}
}
    if (lessonsList.length > 0) {
      fetchGrade();
    }
  }, [lessonsList]);

  return (
  
    <div style={{display:'flex',flexDirection:'row',justifyContent:'center',flexWrap:'wrap',columnGap:9,rowGap:9,minHeight:'550px'}}>
        <Stack direction="row" spacing={2}>
      <Grid  >
        {lessonsList?.length && (
          lessonsList.map((lesson, index) => {
            return (
                <Elevation grade={gradesList[index] ? gradesList[index].grade : 0} name={lesson.name} lessonId={lesson.lessonId} type={type} />
            
            )
          })
        )}
      </Grid></Stack>
      </div>
    
  )
}

export default List
