import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import { ThemeProvider } from './Context/ThemeContext';

function App() {
  return (
   <>
 <BrowserRouter>
 <ThemeProvider>
 <Routes>
   <Route  path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='/project' element={<Project/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Route>
   </Routes>
 </ThemeProvider>
  </BrowserRouter>
   </>
  );
}

export default App;
