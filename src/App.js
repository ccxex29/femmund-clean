import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from "./components/Header";
import Body from "./components/Body";
import Warning from './components/Warning';
import styles from './assets/styles/App.module.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.root}>
        <Header />
        <Body />
        <Warning />
      </div>
    </BrowserRouter>
  );
}

export default App;
