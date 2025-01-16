import type { Component } from 'solid-js';

import styles from './App.module.css';
import Header from './components/header/Header';
import Card from './components/card/Card';
import PieChart from './components/pieChart/PieChart';
import 'normalize.css';

const App: Component = () => {

  return (
    <div class={styles.App}>
      <Header />
      <div class={styles.box}>
        <Card />
        <PieChart />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default App;
