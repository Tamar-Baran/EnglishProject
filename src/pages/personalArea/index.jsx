
import React from "react";
import SavedWordList from './WordList/index'
import MyTests from './Test/index'
import MyGrades from './Grades/index'
import MyLevel from './Level/index'
import AverageGraph from "./Graph/index"
import { color } from "@mui/system";
function PersonalArea(){

return(
     <>    
     <div className="container-fluid bg-primary mb-5" >  
             <div className="d-flex flex-column align-items-center justify-content-center" style={{marginTop:'0px', minHeight: "400px" ,backgroundColor:'#79b7c0'}}>
             <h3 className="display-3 font-weight-bold text-white" style={{marginTop:'0px',fontFamily: '"Handlee", cursive'}}>Personal Area</h3>
             <div className="d-inline-flex text-white">
               
               <p className="m-0" style={{fontFamily:'"Handlee", cursive'}}></p>
             </div>
           </div>
     </div>

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