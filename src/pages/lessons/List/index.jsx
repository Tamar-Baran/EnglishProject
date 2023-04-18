import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import Elevation from './Item'
import { Grid } from "@mui/material";

const List = ({type}) => {
  const [lessonsList, setLessonsList] = useState([]);
  const [gradesList, setGradesList] = useState([]);
  
  const params = useParams() 
  
  useEffect(() => {
    async function fetchData() {
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

    if (lessonsList.length > 0) {
      fetchGrade();
    }
  }, [lessonsList]);

  return (
    <>
      <Grid container spacing={2}>
        {lessonsList?.length && (
          lessonsList.map((lesson, index) => {
            return (
              <Grid item sx={2} md={4} key={lesson.lessonId}>
                <Elevation grade={gradesList[index]?gradesList[index].grade:0} name={lesson.name} />
              </Grid>
            )
          })
        )}
      </Grid>
    </>
  )
}

export default List
