
import React from "react";
import SavedWordList from './WordList/index'
import MyTests from './Test/index'
import MyGrades from './Grades/index'
import MyLevel from './Level/index'
import AverageGraph from "./Graph/index"
function PersonalArea(){

return(
     <><h1 className="title" style={{
      marginTop: '10%',
     marginLeft: '32%',
     marginTop: '10%',}}>Hi, here you can watch your achievements </h1>
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
        justifyContent: 'center'
      }}> <SavedWordList ></SavedWordList>
      <MyTests></MyTests>
      <MyGrades></MyGrades>
      <MyLevel></MyLevel>  </div>
      <AverageGraph></AverageGraph>
    
   
    
    </>
);
}
export default PersonalArea;