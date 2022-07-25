import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

//IMPORTING COMPONENTS
import Home from './Components/Home/Home';
import CaseStudies from './Components/CaseStudies/CaseStudies';
import AboutMe from './Components/About/AboutMe';



// font-family: 'Exo', sans-serif;
// font-family: 'Maitree', serif;
// font-family: 'Rokkitt', serif;

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`

`;

export default class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <Router>

          <Routes>
            <Route path='/' element={<Home />}>Home</Route>
            <Route path='AboutMe' element={<AboutMe />}>About Me</Route>
            <Route path='CaseStudies' element={<CaseStudies />}>Case Studies</Route>
          </Routes>
        </Router>
      </Container>
    )
  }
}
