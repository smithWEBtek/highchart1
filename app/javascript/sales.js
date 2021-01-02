document.addEventListener("DOMContentLoaded", function () {
  let location = window.location.href.split("/")[
    window.location.href.split("/").length - 1
  ];

  if (location == "") {
    Highcharts.chart("sales-container", {
      chart: {
        type: "bar",
        options3d: {
          enabled: true,
          alpha: 10,
          beta: 25,
          depth: 70,
        },
      },
      title: {
        text: "3D chart with null values",
      },
      subtitle: {
        text: "Notice the difference between a 0 value and a null point",
      },
      plotOptions: {
        column: {
          depth: 25,
        },
      },
      xAxis: {
        categories: Highcharts.getOptions().lang.shortMonths,
        labels: {
          skew3d: true,
          style: {
            fontSize: "16px",
          },
        },
      },
      yAxis: {
        title: {
          text: null,
        },
      },
      series: [
        {
          name: "Sales",
          data: [2, 3, null, 4, 0, 5, 1, 4, 6, 3],
        },
      ],
    });
  }
});
