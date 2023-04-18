import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom"
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Home from './pages/home/index';
import ResponsiveAppBar from './pages/appBar/index';
import Elevation from "./pages/lessons/List/Item";
import List from './pages/lessons/List/index'
function App() {
  
  return (
    <div>
      <Router>

        <ResponsiveAppBar/>      <List type="grammer"/>

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
      </Router>

    </div>
  );
}

export default App;

          // <Route path='/lessons' element={<Lessons />} />
          // <Route path='/lessons/:id' element={<Register />} />