// index.js는 상단 public/index.html에 적용되는 컴포넌트다.
// 리액트 돔에 클리이언트를 실행해주는 코드
import ReactDOM  from "react-dom/client";
// 상단 
import {BrowserRouter, Routes, Route } from "react-router-dom";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
