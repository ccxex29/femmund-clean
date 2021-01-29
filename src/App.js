import React from 'react';
import styles from './assets/styles/App.module.css'
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
  return (
    <div className={styles.root}>
      <Header />
      <Body />
    </div>
  );
}

export default App;
