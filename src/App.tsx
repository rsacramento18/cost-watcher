import type { Component } from 'solid-js';

import Header from './components/Header';
import MoneySection from './components/MoneySection';
import Card from './components/Card';
import PieChart from './components/PieChart';
import 'normalize.css';

const App: Component = () => {

  return (
    <div class="flex flex-row items-stretch">
      <Header />
      <div class="mx-20 my-20 flex justify-between items-center flex-col w-full">
        <MoneySection />
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
