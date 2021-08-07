import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'boxicons';
// 
import './scss-css/index.scss';
import AppRouter from './AppRouter';
import LayoutAdmin from './adminpage/layout/LayoutAdmin';
import LayoutHome from './homepage/layout/LayoutHome';
// 





ReactDOM.render(
  <React.StrictMode>
    
    <LayoutAdmin />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
