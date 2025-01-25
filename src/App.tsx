import type { Component } from 'solid-js';

// import styles from './App.module.css';
import Header from './components/Header';
import IncomeSection from './components/IncomeSection';
import Card from './components/Card';
import PieChart from './components/PieChart';
import 'normalize.css';

const App: Component = () => {

  return (
    <div class="flex flex-row h-screen w-screen">
      <Header />
      <div class="mx-20 my-20 flex justify-between items-center flex-col w-full">
        <IncomeSection />
        <Card />
        <Card />
        <PieChart />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default App;
