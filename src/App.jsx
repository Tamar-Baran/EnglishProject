import { BrowserRouter as Router, Routes, Route, NavLink, useParams } from "react-router-dom"
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Home from './pages/home/index';
import ResponsiveAppBar from './pages/appBar/index';
import Elevation from "./pages/lessons/List/Item";
import List from './pages/lessons/List/index';
import StandardImageList from './pages/lessons/Single/contentLesson/wordsList';
import CoverVocabulary from './pages/lessons/CoverLesson/coverVocabulary';
import CoverGrammer from './pages/lessons/CoverLesson/coverGrammer';
import CoverSpelling from './pages/lessons/CoverLesson/coverSpelling';
import CoverReading from './pages/lessons/CoverLesson/coverReading';
import CoverPronounce from './pages/lessons/CoverLesson/coverPronounce';
import {AuthContextProvider} from './context/AuthContext';
import SavedWordList from './pages/personalArea/WordList';
import MyTests from './pages/personalArea/Test'
import PersonalArea from "./pages/personalArea/index";

function App() {

  return (
    <div   >
      <Router>
    <AuthContextProvider>
        <ResponsiveAppBar />

        <Routes>
          <Route path='/vocabulary' element={<List type="vocabulary" />} />
          <Route path='/grammer' element={<List type="grammer" />} />
          <Route path='/spelling' element={<List type="spelling" />} />
          <Route path='/reading' element={<List type="reading" />} />
          <Route path='/pronounce' element={<List type="pronounce" />} />
         

          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/vocabulary/lesson/:lessonId' element={<CoverVocabulary />} />
          <Route path='/grammer/lesson/:lessonId' element={<CoverGrammer></CoverGrammer>} />
          <Route path='/spelling/lesson/:lessonId' element={<CoverSpelling></CoverSpelling>} />
          <Route path='/reading/lesson/:lessonId' element={<CoverReading></CoverReading>} />
          <Route path='/pronounce/lesson/:lessonId' element={<CoverPronounce></CoverPronounce>} />
          <Route path='/personal-area' element={<PersonalArea></PersonalArea>} />

        </Routes>        
       
        </AuthContextProvider>
      </Router>


    </div>
  );
}

export default App;

          // <Route path='/lessons' element={<Lessons />} />
          // <Route path='/lessons/:id' element={<Register />} />