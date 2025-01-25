import type { Component } from 'solid-js';

export type IncomeProps = {
  title: string;
  beforeTax: number;
  afterTax: number;
}

const Income: Component<IncomeProps> = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>Before Tax: {props.beforeTax}</p>
      <p>After Tax: {props.afterTax}</p>
    </div>
  );
}

export default Income;
