import type { Component, } from 'solid-js';
import { createSignal, onCleanup } from 'solid-js';
// import './Value.css';

const Value: Component = (props) => {

  const [value, setValue] = createSignal(props.value);
  return (
    <div class="flex justify-between align-center" id={props.id}>
      <span class="label">{props.label}</span>
      <span class="value">{value()}</span>
    </div>
  )

}

export default Value;
