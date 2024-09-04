import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Downloads from './pages/downloads';
import Documents from './pages/documents';
import Profile from './pages/profile';
import Settings from './pages/settings';
import App from './App';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
      <Route index element={<Home/>}/>
      <Route path="downloads"element={<Downloads/>}/>
      <Route path="documents" element={<Documents/>}/>
      <Route path="profile" element={<Profile/>}/>
      <Route path="settings"element={<Settings/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
