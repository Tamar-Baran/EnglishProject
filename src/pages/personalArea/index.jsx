import React from "react";
import SavedWordList from './WordList/index'
import MyTests from './Test/index'
import MyGrades from './Grades/index'
function PersonalArea(){

return(
    <>
    <SavedWordList></SavedWordList>
    <MyGrades></MyGrades>
    <MyTests></MyTests>
    </>
);
}
export default PersonalArea;