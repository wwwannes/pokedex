export const barChartOptions = {
  chart: {
    zoom: {
      enabled: true
    },
    stacked: true,
    toolbar: {
      show: false
    }
  },
  stroke: {
    colors: ['transparent']
  },
  plotOptions: {
    bar: {
      dataLabels: {
        name: {
          show: false
        }
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  grid: {
    show: true,
    borderColor: '#4b5563',
    strokeDashArray: 7,
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: true
      }
    }
  },
  xaxis: {
    labels: { show: false },
    categories: [''],
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      show: false
    },
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    tickAmount: 4,
    max: 355,
    labels: {
      show: false
    }
  },
  fill: {
    opacity: 1,
    type: 'solid'
    // colors: ['#66EEBA']
  },
  legend: {
    show: false
  },
  tooltip: {
    enabled: true
  }
}
