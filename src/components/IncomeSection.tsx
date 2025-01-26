import { For } from 'solid-js';
import type { Component } from 'solid-js';
import Income from './Income';

const IncomeSection: Component = () => {
  const incomes = [
    {
      id: 1,
      userId: 1,
      title: "Income 1",
      income: {
        beforeTax: 3000,
        afterTax: 2200,
      }
    }, {
      id: 1,
      userId: 1,
      title: "Income 2",
      income: {
        beforeTax: 1800,
        afterTax: 1400,
      }
    }
  ]
  return (
    <div class="m-5 p-5 rounded shadow-card w-full">
      <h2>Income</h2>
      <div class="flex items-align justify-start">
        <For each={incomes}>
          {(income) => (
            <Income
              title={income.title}
              beforeTax={income.income.beforeTax}
              afterTax={income.income.afterTax}
            />
          )}
        </For>
      </div>
    </div>
  );
};

export default IncomeSection;
