import { For } from 'solid-js';
import type { Component } from 'solid-js';

import Value from './Value';

const Card: Component = (props) => {
  const src = {
    id: "test",
    titleExpense: {
      label: "Expenses",
      value: "300"
    },
    values: [
      {
        label: "expense 1",
        value: "50"
      },
      {
        label: "expense 2",
        value: "100"
      },
      {
        label: "expense 3",
        value: "150"
      }
    ]
  } 
  return (
    <div 
      class="my-5 p-5 rounded min-w-80 shadow-card text-black" 
      id={src.id}
    >
      <div class="text-xl">
        <Value 
          label={src.titleExpense.label}
          value={src.titleExpense.value}
        />
      </div>
      <div class="border-2 my-2 rounded outline-0"/> <For each={src.values}>
        {(value) => (
          <Value label={value.label} value={value.value} />
        )}
      </For>
    </div>
  )
}

export default Card;
