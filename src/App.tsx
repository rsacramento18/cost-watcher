import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Header from './components/header/Header';
import Card from './components/card/Card';
import PieChart from './components/pieChart/PieChart';

const App: Component = () => {

  return (
    <div class={styles.App}>
      <Header />
      <Card />
      <PieChart />
    </div>
  );
};

export default App;
