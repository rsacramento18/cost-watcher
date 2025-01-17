import { onMount } from 'solid-js'
import { Chart, Title, Tooltip, Legend, Colors } from 'chart.js'
import { Pie } from 'solid-chartjs'
import type { Component } from 'solid-js';
// import './PieChart.css';


const PieChart: Component = () => {

  onMount(() => {
    Chart.register(Title, Tooltip, Legend, Colors)
  })

  const chartData = {
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4,
    }]
  }

  const chartOptions = {
    responsive: false,
  }

  return (
    <div class="pie-chart">
      <div class="labels">
        <span>Red</span>
        <span>Blue</span>
        <span>Yellow</span>
      </div>
      <Pie data={chartData} options={chartOptions} width={250} height={250} />
    </div>
  )
}

export default PieChart;
