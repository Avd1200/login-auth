import React from "react";
import { Container } from "react-bootstrap";
import Signup from "./Signup";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./Login";
import Landing from "./Landing";
import PasswordReset from './PasswordReset';

function App() {
  return (
    <Container
      className=" flex-d align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/landing" element={<Landing/>}></Route>
          <Route path="/forgot-password" element={<PasswordReset/>}></Route>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
