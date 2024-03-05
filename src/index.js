import './index.scss';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import HomePage from './pages/HomePage';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/a-propos' element={<AboutPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <FooterComponent />
    </Router>
  </>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
