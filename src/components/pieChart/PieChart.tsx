import { DefaultChart } from 'solid-chartjs'
import type { Component } from 'solid-js';


const PieChart: Component = () => {

  const chartData = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 10,
      borderColor: 'rgb(255, 99, 132)',
      borderDash: [20, 5]
    }]
  }

  return (
    <div>
      <DefaultChart type="pie" data={chartData} width={500} height={500} />
    </div>)
}

export default PieChart;
