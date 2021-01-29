import React from 'react';
import styles from './assets/styles/App.module.css'
import Header from "./components/Header";
import Body from "./components/Body";
import Warning from './components/Warning';

const App = () => {
  return (
    <div className={styles.root}>
      <Header />
      <Body />
      <Warning />
    </div>
  );
}

export default App;
