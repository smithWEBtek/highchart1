import moment from 'moment'

document.addEventListener('DOMContentLoaded', function () {
  let d1 = new Date("2020-12-03")
  let d2 = new Date("2020-12-07")
  let d3 = new Date("2020-12-11")

  const chart = Highcharts.chart('container', {

    chart: {
      type: 'column'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      // categories: ['Apples', 'Bananas', 'Oranges']
      dates: [d1, d2, d3]
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
});