import React from 'react';
import './App.css';
import NavigatorBar from './Components/NavigatorBar/NavigatorBar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import BlogId from './Pages/BlogId';

const App = () => {
  return (
    <div>
      <Router>
        <NavigatorBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/blog/:id" element={<BlogId/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/blog" element={<Navigate to="/" replace />}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
