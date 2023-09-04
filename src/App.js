import './App.css';
import { BrowserRouter, Routes, Route, Link, createBrowserRouter, createRoutesFromElements, RouterProvider, redirect, useNavigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import PortfolioDetail from './pages/PortfolioDetail/PortfolioDetail';
import NotFound from './pages/NoteFound/NotFound';
import Contact from './pages/Contact/Contact';
function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/about' element={<About/>}  ></Route>
        <Route path='/portfolio' element= {<Portfolio/>}></Route>
        <Route path='/portfolio/:id' element= {<PortfolioDetail/>}></Route>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element= {<NotFound/>}></Route>
        
    </Route>
  ))
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

// Виправити функцію skatch щоб використовувати динамічну ширину
