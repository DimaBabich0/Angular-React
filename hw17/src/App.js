import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import pages from './pagesPaths';

function App()
{
  return (
    <Router>
      <Main/>
    </Router>
  );
}

function Main()
{
  return (
    <div>
      <Navbar/>
      <Routes>
        {pages.map((page, index) => (
          <Route key={index} path={page.path} element={<page.component />}/>
        ))}
      </Routes>
    </div>
  );
}

export default App;