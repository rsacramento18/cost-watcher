import type { Component } from 'solid-js';

// import styles from './App.module.css';
import Header from './components/header/Header';
import Card from './components/card/Card';
import PieChart from './components/pieChart/PieChart';
import 'normalize.css';

const App: Component = () => {

  return (
    <div>
      <Header />
      <div class="mx-20 p-20 bg-sectionBg flex justify-between align-center flex-wrap">
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
