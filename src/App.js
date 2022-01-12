import React from 'react';
import Routes from './routes';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

export default function App() {
  return (
    <div className="app">
      <Routes/>
      <ToastContainer autoClose={3000} theme='colored'/>
    </div>
  );
}
