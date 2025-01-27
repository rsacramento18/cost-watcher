import type { Component } from 'solid-js';

export type DebtProps = {
  title: string;
  debt: number;
}

function handleClick() {
  console.log('clicked');
  const debt = document.getElementById('debt');
  if (debt)
    debt.classList.add('hidden');
}

const Debt: Component<DebtProps> = (props) => {
  return (
    <div class="mx-5 min-w-[200px] max-w-[200px]">
      <div id="debt" class="bg-white p-5 my-5 rounded border-2">
        <div class="flex justify-between items-center mb-5">
          <div class="p-4 rounded-full bg-redHl text-white text-3xl w-[65px] h-[65px]">
            <i class="fa-solid fa-sack-dollar"></i>
          </div>
          <h2 class="text-xl">{props.title}</h2>
        </div>
        <div class="flex justify-between items-center">
          <p class="mx-2 text-2xl">-{props.debt}€</p>
          <button class="cursor-pointer" onclick={handleClick}>
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </div >
  );

};

export default Debt;
