import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainMenu from './components/MainMenu/MainMenu';
import SignIn from './components/SignIn/SignIn';
import { Header, Footer } from './HeaderAndFooter';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<><Header/><MainMenu/><Footer/></>}/>
      <Route path='/sign_in_page' element={<><Header/><SignIn/><Footer/></>}/>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
