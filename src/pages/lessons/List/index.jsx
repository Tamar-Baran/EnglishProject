import  {useParams} from "react-router-dom"

// יגש לסרבר עם הפרם
// const lessons=fetch(leval:params.level, cat)
// return lessons.map(l=><Item lesson={l}/>)
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import Elevation from './Item'
import { Grid } from "@mui/material";

const List = ({type}) => {
  const [lessonsList,setLessonsList] = useState([])
  
  
  
  const params= useParams() 
  useEffect(() => {

    async function fetchData() {
       const config = {
            headers: {
              'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token"))
            }
        }
        console.log(config)
        const {data} = await axios.get(`http://localhost:3600/api/lesson/displayItem/${type}`,config)
        setLessonsList(data)
        
        console.log("miri&tamar")
      }
      
      async function fetchGrade() {
        const config = {
             headers: {
               'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token"))
             }
         }

        //  const requestArray = await Promise.all(devices?.map((id) => {
        //   return axios.get(`https://www.roads.com/road/ap/roadControl/${id}`, myHeaders);


         const x= await Promise.all(lessonsList.map((lesson)=>{
          const {grade} =  axios.get(`http://localhost:3600/api/achievements/grades/${lesson.lessonId}`,config)
          if(!grade)
          {lesson.lessonId="you didnt try yet"}
          lesson.lessonId=grade;
         console.log(grade)
         console.log(lesson.lessonId+"miri & tamar")

         return lesson.lessonId
         })
        
         )
       }
       fetchData()
       fetchGrade()
   


  }, []);

  return (
    <>
  
   <Grid container spacing={2}>
    {lessonsList?.length && (
      lessonsList.map((lesson)=>{
     
       return<Grid item sx={2} md={4} ><Elevation grade={lesson.lessonId} name={lesson.name}  /></Grid>
      }
      )
    )}</Grid>
    </>
  )
}

export default List

