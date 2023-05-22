
import React from "react";
import SavedWordList from './WordList/index'
import MyTests from './Test/index'
import MyGrades from './Grades/index'
import MyLevel from './Level/index'
import AverageGraph from "./Graph/index"
import { color } from "@mui/system";
function PersonalArea(){

return(
     <><h2 className="title" style={{
      marginTop: '10%',
     marginLeft: '27%',
     marginTop: '10%',
    fontFamily:'lucida grande, tahoma, verdana, arial, sans-serif',
     color:"light-gray"}}>Hi, here you can watch your achievements </h2>
   <hr style={{
        marginTop: '2%',
        marginLeft: '10%',
        marginRight: '10%',}}></hr>
    <div style={{
        marginTop: '2%',
        marginLeft: '10%',
        marginRight: '10%',
        alignContent: 'center', display: 'flex',
        gap: 70,
        flexWrap:'wrap',
        justifyContent: 'center'
      }}> <SavedWordList></SavedWordList>
      <MyTests></MyTests>
      <MyGrades></MyGrades>
      <MyLevel></MyLevel> </div>
      <div style={{
        marginTop: '2%',
        marginLeft: '10%',
        marginRight: '10%',
        alignContent: 'center',
        display: 'flex',
        justifyContent: 'center'
      }}>
      <AverageGraph></AverageGraph> </div>
    
   
    
    </>
);
}
export default PersonalArea;