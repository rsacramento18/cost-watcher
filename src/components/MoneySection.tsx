import type { Component } from 'solid-js';
import Wallet from './Wallet';
import Income from './Income';
import Debt from './Debt';

const MoneySection: Component = () => {
  const income = {
    title: "Income 1",
    income: {
      beforeTax: 3000,
      afterTax: 2200,
    }
  };
  const wallet = {
    title: 'wallet 1',
    balance: 2500,
  }
  const debt = {
    title: 'debt 1',
    debt: 1000,
  };

  return (
    <div class="m-5 p-5 rounded shadow-card w-full">
      <div class="flex justify-between items-center">
        <div class="flex justify-between items-center">
          <Wallet
            title={wallet.title}
            balance={wallet.balance}
          />
          <Income
            title={income.title}
            beforeTax={income.income.beforeTax}
            afterTax={income.income.afterTax}
          />
          <Debt
            title={debt.title}
            debt={debt.debt}
          />
        </div>
      </div>
    </div>
  );
};

export default MoneySection;
