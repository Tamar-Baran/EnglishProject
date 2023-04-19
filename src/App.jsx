import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom"
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Home from './pages/home/index';
import ResponsiveAppBar from './pages/appBar/index';
import Elevation from "./pages/lessons/List/Item";
import List from './pages/lessons/List/index'
import FloatingActionButtonZoom from "./pages/lessons/Single/index";
function App() {
  
  return (
    <div   >
      <Router>

        <ResponsiveAppBar/>      
        
        <Routes>      
           <Route path='/vocabulary' element={<List type="vocabulary"/>} />
           <Route path='/grammer' element={<List type="grammer"/>} />
           <Route path='/spelling' element={<List type="spelling"/>} />
           <Route path='/reading' element={<List type="reading"/>} />
           <Route path='/pronounce' element={<List type="pronounce"/>} />

          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

        </Routes>
        {<div  style={{ 
        marginTop:'75px',
        marginLeft:'300px',
        marginRight:'300px',
        // marginBottom:'100px',
        alignContent:'center',display:'flex',
        backgroundColor:"#27511132",
    justifyContent:'center'}}><FloatingActionButtonZoom /></div>} 
      </Router>
     {
   
}
      

    </div>
  );
}

export default App;

          // <Route path='/lessons' element={<Lessons />} />
          // <Route path='/lessons/:id' element={<Register />} />