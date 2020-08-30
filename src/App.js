import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyName from '../src/LandingPage';
import About from '../src/About';
import Skill from '../src/Skills';
import MyProjects from '../src/Projects';
import ContactMe from '../src/Contact';

export default function App() {
  return(
    <div>
      <MyName />
      <About />
      <Skill />
      <MyProjects />
      <ContactMe />
    </div>
  );
}