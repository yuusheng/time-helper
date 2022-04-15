// const echarts = require('./echarts')

const myChart = echarts.init(document.getElementById('main'))

// 指定图表的配置项和数据
var option = {
  title: {
    text: '各个网站时间占比',
  },
  // tooltip: {},
  // legend: {
  //   data: ['销量'],
  // },

  series: [
    {
      name: 'Area Mode',
      type: 'pie',
      radius: [20, 140],
      roseType: 'area',
      itemStyle: {
        borderRadius: 5,
      },
      data: [
        { value: 30, name: 'rose 1' },
        { value: 28, name: 'rose 2' },
        { value: 26, name: 'rose 3' },
        { value: 24, name: 'rose 4' },
        { value: 22, name: 'rose 5' },
        { value: 20, name: 'rose 6' },
        { value: 18, name: 'rose 7' },
        { value: 16, name: 'rose 8' },
      ],
    },
  ],
}

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option)
