import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';
import Cover from './pages/Cover';
import Title from './pages/Title';
import Description from './pages/Description';
import PortfolioOne from './pages/PortfolioOne';
import PortfolioTwo from './pages/PortfolioTwo';
import Featured from './pages/Featured';
import Footer from './pages/Footer';
import useLocalStorage from 'use-local-storage';
import useModeController from './UseModeController';

function App() {
    const { theme, setTheme, switchTheme } = useModeController();

    return (
    <div className="App" data-theme={theme}>
        <Header switchFunction={switchTheme} currentTheme={theme}/>
        <Cover/>
        <Description/>
        <Title title = "swe"/>
        <PortfolioOne/>
        <Title title = "pm"/>
        <PortfolioTwo/>
        <Title title = "featured"/>
        <Featured/>
        <Footer/>

      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Hana's website on progress...*/}
      {/*  </p>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
