export const donutChartOptions = {
  chart: {
    height: 100,
    type: 'radialBar'
  },
  fill: {
    colors: ['#66EEBA']
  },
  plotOptions: {
    radialBar: {
      track: {
        background: '#FF67EA'
      },
      hollow: {
        size: '50%'
      },
      dataLabels: {
        name: {
          show: false
        },
        value: {
          offsetY: 0,
          fontSize: '25px',
          fontWeight: 800,
          formatter: function (val: number) {
            return Math.floor((val / 10000) * 100 * 255)
          }
        }
      }
    }
  },
  labels: []
}
