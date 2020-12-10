// import moment from 'moment'

document.addEventListener('DOMContentLoaded', () => {
  // addListeners()
  showFruitsChart()
});

let fruitsChartButton = $('button.fruits')

const addListeners = (event) => {
  fruitsChartButton.on('click', (event) => {
    debugger;
    event.preventDefault()

    console.log('event: ', event)

    showFruitsChart()
  })
}

function showFruitsChart() {
  let d1 = new Date("2020-12-03")
  let d2 = new Date("2020-12-07")
  let d3 = new Date("2020-12-11")

  Highcharts.chart('fruits-container', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges']
      // dates: [d1.getDate(), d2.getDate(), d3.getDate()]
    },
    yAxis: {
      title: {
        text: 'Fruit eaten'
      }
    },
    series: [{
      name: 'Jane',
      data: [1, 3, 4]
    }, {
      name: 'John',
      data: [5, 7, 3]
    }]
  });
} 