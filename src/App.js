import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import MainPage from './Components/MainPage/MainPage';
import theme from "./theme";
import './Fonts.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme.main}>
          <div>
            <MainPage />
          </div>
        </ThemeProvider>
      </div>
      
    );
  }
};

export default App;
