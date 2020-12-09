// import * as Highcharts from 'highcharts';
// import Highcharts from 'highcharts';

document.addEventListener('DOMContentLoaded', function () {
  let url = 'https://demo-live-data.highcharts.com/aapl-c.json'
  $.ajax({
    url: url,
    method: 'get',
    dataType: 'json'
  }).done(function (data) {
    // debugger;
    // Create the chart
    Highcharts.chart('stocks-container', {
      rangeSelector: {
        selected: 1
      },
      title: {
        text: 'AAPL Stock Price'
      },
      series: [{
        name: 'AAPL',
        data: data,
        tooltip: {
          valueDecimals: 2
        }
      }]
    });
  });
});