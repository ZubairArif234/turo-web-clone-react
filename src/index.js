import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App,Head2,Poster} from './App';
import reportWebVitals from './reportWebVitals';
import Container from 'react-bootstrap/Container';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Container> */}

    <Head2 />
    <Poster />
    {/* </Container> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
