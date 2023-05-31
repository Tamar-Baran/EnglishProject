import { BrowserRouter as Router, Routes, Route, NavLink, useParams } from "react-router-dom"
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Home from './pages/home/index';
import ResponsiveAppBar from './pages/appBar/index';
import Elevation from "./pages/lessons/List/Item";
import List from './pages/lessons/List/index';
import CoverVocabulary from './pages/lessons/CoverLesson/coverVocabulary';
import CoverGrammer from './pages/lessons/CoverLesson/coverGrammer';
import CoverSpelling from './pages/lessons/CoverLesson/coverSpelling';
import CoverReading from './pages/lessons/CoverLesson/coverReading';
import CoverPronounce from './pages/lessons/CoverLesson/coverPronounce';
import {AuthContextProvider} from './context/AuthContext';
import SavedWordList from './pages/personalArea/WordList';
import MyTests from './pages/personalArea/Test'
import PersonalArea from './pages/personalArea/index'
import AboutUs from './pages/aboutUs/index'
import Footer from './pages/appBar/footer'
import PersonalProfile from './pages/profile/index'
import MyTest from './pages/personalArea/Test/MyTest'
import PersonalWordsList from "./pages/personalArea/WordList/PersonalWordsList";
function App() {
  // https://themewagon.com/themes/free-responsive-educational-website-template-kidkinder/
  // file:///C:/Users/214387938/AppData/Local/Temp/Temp1_kidkinder-1.0.0.zip/kidkinder-1.0.0/about.html
  return (
    <div   >
      <Router>
        <AuthContextProvider>
        <ResponsiveAppBar />
        
        <Routes>
          <Route path='/vocabulary' element={<><List type="vocabulary" /><Footer/></>} />
          <Route path='/grammer' element={<><List type="grammer" /><Footer/></>} />
          <Route path='/spelling' element={<><List type="spelling" /><Footer/></>} />
          <Route path='/reading' element={<><List type="reading" /><Footer/></>} />
          <Route path='/pronounce' element={<><List type="pronounce" /><Footer/></>} />
         
          <Route path='/AboutUs' element={<><AboutUs></AboutUs><Footer></Footer></>} />

          <Route path='/' element={<><Home /> <Footer></Footer></>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/vocabulary/lesson/:lessonId' element={<CoverVocabulary />} />
          <Route path='/grammer/lesson/:lessonId' element={<CoverGrammer></CoverGrammer>} />
          <Route path='/spelling/lesson/:lessonId' element={<CoverSpelling></CoverSpelling>} />
          <Route path='/reading/lesson/:lessonId' element={<CoverReading></CoverReading>} />
          <Route path='/pronounce/lesson/:lessonId' element={<CoverPronounce></CoverPronounce>} />
          <Route path='/personal-area' element={<><PersonalArea/> <Footer/></> } />
          <Route path='/personal-area/savedWordsList' element={<PersonalWordsList></PersonalWordsList> } />
          <Route path='/personal-area/my-test' element={<MyTest></MyTest> } />

        </Routes>        
        </AuthContextProvider>
      </Router>

    </div>
  );
}

export default App;

        