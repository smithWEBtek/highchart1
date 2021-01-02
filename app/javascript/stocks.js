document.addEventListener("DOMContentLoaded", function () {
  let location = window.location.href.split("/")[
    window.location.href.split("/").length - 1
  ];

  if (location == "") {
    let data2 = [
      [2008, 2210],
      [2009, 2202],
      [2010, 3564],
      [2012, 1861],
      [2013, 508],
      [2014, 4221],
      [2015, 4535],
      [2016, 5542],
      [2017, 9599],
      [2018, 5756],
      [2019, 6412],
    ];

    let data3 = [
      [2008, 2210],
      [2009, 2202],
      [2010, 3564],
      [2012, 1861],
      [2013, 508],
      [2014, 4221],
      [2015, 4535],
      [2016, 5542],
      [2017, 9599],
      [2018, 5756],
      [2019, 6412],
    ];

    let url = "https://demo-live-data.highcharts.com/aapl-c.json";
    $.ajax({
      url: url,
      method: "get",
      dataType: "json",
    }).done(function (data) {
      Highcharts.chart("stocks-container", {
        rangeSelector: {
          selected: 1,
        },
        title: {
          text: "AAPL Stock Price",
        },
        series: [
          {
            name: "AAPL",
            data: data3,
            tooltip: {
              // valueDecimals: 4
            },
          },
        ],
      });
    });
  }
});
