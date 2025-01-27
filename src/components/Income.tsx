import type { Component } from 'solid-js';

export type IncomeProps = {
  title: string;
  beforeTax: number;
  afterTax: number;
}

const Income: Component<IncomeProps> = (props) => {
  return (
    <div class="mx-5 min-w-[200px] max-w-[200px]">
      <div id="income" class="p-5 my-5 rounded border-2 bg-white">
        <div class="flex justify-between items-center mb-5">
          <div class="p-4 rounded-full bg-sectionBg text-white text-3xl w-[65px] h-[65px]">
            <i class="fa-solid fa-hand-holding-dollar"></i>
          </div>
          <h2 class="text-xl">{props.title}</h2>
        </div>
        <p class="mx-2 text-2xl">+{props.afterTax}€</p>
      </div >
    </div>
  );
}

export default Income;
