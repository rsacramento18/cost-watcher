import type { Component } from 'solid-js';

export type IncomeProps = {
  title: string;
  beforeTax: number;
  afterTax: number;
}

const Income: Component<IncomeProps> = (props) => {
  return (
    <div class="p-5 mr-10 my-5 rounded border-2 min-w-[200px]">
      <div class="flex justify-between items-center mb-5">
        <div class="p-4 rounded-full bg-sectionBg text-white text-3xl w-[65px] h-[65px]">
          <i class="fa-solid fa-hand-holding-dollar"></i>
        </div>
        <h2>{props.title}</h2>
      </div>
      <p class="mx-2 text-2xl">+{props.afterTax}€</p>
    </div >
  );
}

export default Income;
