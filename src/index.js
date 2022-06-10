import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import './index.css';
import MainMenu from './components/MainMenu/MainMenu';
import LogIn from './components/LogIn/LogIn';
import { Header, Footer } from './components/HeaderAndFooter/HeaderAndFooter';
import UserPage from './components/UserPage/UserPage';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<><Header/><MainMenu/><Footer/></>}/>
      <Route path='/log_in_page' element={<><Header isSigningIn={true}/><LogIn/><Footer/></>}/>
      <Route path='/register_page' element={<><Header isSigningIn={true}/><LogIn type='register'/><Footer/></>}/>
      <Route path='/user' element={<><Header/><UserPage/><Footer/></>}/>
      
      <Route path='*'element={<div>404</div>}/>
      
    </Routes>
  </BrowserRouter>
  </Provider>
  
);

reportWebVitals();
