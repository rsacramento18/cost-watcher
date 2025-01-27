import type { Component } from 'solid-js';

type WalletProps = {
  title: string;
  balance: number;
}

const Wallet: Component<WalletProps> = (props) => {
  return (
    <div class="mx-5 min-w-[200px] max-w-[200px]">
      <div id="wallet" class="p-5 my-5 rounded border-2 bg-sectionBg text-white">
        <div class="flex justify-between items-center mb-5">
          <div class="p-4 rounded-full text-sectionBg bg-white text-3xl w-[65px] h-[65px]">
            <i class="fa-solid fa-wallet"></i>
          </div>
          <h2 class="text-xl">{props.title}</h2>
        </div>
        <p class="mx-2 text-2xl">{props.balance}€</p>
      </div >
    </div>
  );
}

export default Wallet;
