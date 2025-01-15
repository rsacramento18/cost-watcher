import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Header from './components/header/Header';
import Card from './components/card/Card';

const App: Component = () => {

  return (
    <div class={styles.App}>
      <Header />
      <Card />
    </div>
  );
};

export default App;
