import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ThemeProvider } from 'styled-components'
import { theme } from './components/shared/theme'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Nav from './components/shared/nav';
import { Container } from './components/shared/containers';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" >
        <Router>
          <Container>
            <Nav />
          </Container>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
