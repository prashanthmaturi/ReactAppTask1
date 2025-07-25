import React from 'react';
import { Header } from './Header';
import Comments from './components/Comments';
import Photos from './components/Photos';
import Posts from './components/Posts';
import Albums from './components/Albums';
import  Home  from './Home';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router basename='/ReactAppTask1'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
      </Router> 
    </div>
  );
}

export default App;
