import { For } from 'solid-js';
import type { Component } from 'solid-js';
// import './Card.css';

import Value from '../value/Value';

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
    <div class="card" id={src.id}>
      <div class="card-header">
        <Value 
          label={src.titleExpense.label}
          value={src.titleExpense.value}
        />
      </div>
      <div class="divider"/>
      <For each={src.values}>
        {(value) => (
          <Value label={value.label} value={value.value} />
        )}
      </For>
    </div>
  )
}

export default Card;
