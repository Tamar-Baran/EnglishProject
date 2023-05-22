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
  const { logedIn } = useContext(AuthContext);
  const [counter, setCounter] = useState(false);


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
      if (logedIn == true) {
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
      else {
        setGradesList([0, 0, 0, 0, 0])
      }
    }
    if (lessonsList.length > 0) {
      fetchGrade();
    }
  }, [lessonsList]);

  return (
<>
<div className="container-fluid bg-primary mb-5" >  
        <div className="d-flex flex-column align-items-center justify-content-center" style={{marginTop:'0px', minHeight: "400px" ,backgroundColor:'#79b7c0'}}>
        <h3 className="display-3 font-weight-bold text-white" style={{marginTop:'0px',fontFamily: '"Handlee", cursive'}}>{type}</h3>
        <div className="d-inline-flex text-white">
          <p className="m-0"><a className="text-white" style={{fontFamily:'"Handlee", cursive'}}>Home</a></p>
          <p className="m-0 px-2">/</p>
          <p className="m-0" style={{fontFamily:'"Handlee", cursive'}}>{type}</p>
        </div>
      </div>
</div>
    <div style={{ display: 'flex',gap:'10', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', minHeight: '550px' }}>
      <Stack direction="row" spacing={2} style={{ display: 'flex',gap:'10'}}>
        <Grid container   >
          {lessonsList?.length && (
            lessonsList.map((lesson, index) => {
              return (
                <Elevation i={index} grade={gradesList[index] ? gradesList[index].grade : "free trial"} name={lesson.name} lessonId={lesson.lessonId} type={type} />
              )
            })
          )}
        </Grid>
      </Stack>
    </div>
</>
  )
}

export default List
