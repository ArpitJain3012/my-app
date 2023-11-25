import React from 'react';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddUsers from './components/AddUsers';
import EditUser from './components/EditUser';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/add' element={<AddUsers />} />
          <Route exact path='/edit/:id' element={<EditUser />} />
          <Route exact path='/user/:id' element={<User />} />
        </Routes>

      </Router >
    </div>


  );
}

export default App;
