import React from 'react';
import { AppImageStyled, AppInnerStyled } from 'components/AppInner/styled';
import logo from 'logo.svg';

const AppInner = () => {
  return (
    <AppInnerStyled>
      <AppImageStyled src={logo} alt="logo" />
    </AppInnerStyled>
  );
};

export default AppInner;

/*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
 */
