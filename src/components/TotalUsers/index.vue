<template>
  <div>
    <common-card
      title="累计用户数"
      value="1,087,503">
      <template>
        <div id="total-users-chart" :style="{width: '100%', height: '100%'}"/>
      </template>
      <template v-slot:footer>
        <div class="total-users-footer">
          <span>日同比</span>
          <span class="emphasis">8.73%</span>
          <div class="increase"></div>
          <span style="margin-left: 20px;">月同比</span>
          <span class="emphasis">35.91%</span>
          <div class="decrease"></div>
        </div>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from '@/utils/commonCardMixin'
export default {
  mixins: [commonCardMixin],
  mounted () {
    const chartDom = document.getElementById('total-users-chart')
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      grid: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },
      xAxis: {
        type: 'value',
        show: false
      },
      yAxis: {
        type: 'category',
        show: false
      },
      series: [{
        type: 'bar',
        stack: '总量',
        data: [200],
        barWidth: 10,
        itemStyle: {
          color: '#45c946'
        }
      }, {
        type: 'bar',
        stack: '总量',
        data: [250],
        itemStyle: {
          color: '#ccc'
        }
      }, {
        type: 'custom',
        data: [200],
        stack: '总量',
        renderItem: (params, api) => {
          const value = api.value(0)
          const endPoint = api.coord([value, 0])
          return {
            type: 'group',
            position: endPoint,
            children: [{
              type: 'path',
              shape: {
                d: 'M228.266667 347.733333h569.6c14.933333 0 25.6 4.266667 27.733333 12.8 4.266667 8.533333 0 17.066667-10.666667 27.733334l-281.6 281.6c-4.266667 4.266667-12.8 8.533333-19.2 8.533333-8.533333 0-14.933333-2.133333-19.2-8.533333l-281.6-281.6c-10.666667-10.666667-14.933333-21.333333-10.666666-27.733334 0-8.533333 8.533333-12.8 25.6-12.8z',
                x: -5,
                y: -17,
                width: 10,
                height: 10,
                layout: 'cover'
              },
              style: {
                fill: '#45c946'
              }
            }, {
              type: 'path',
              shape: {
                d: 'M531.2 354.133333l281.6 281.6c10.666667 10.666667 14.933333 21.333333 10.666667 27.733334-4.266667 8.533333-12.8 12.8-27.733334 12.8h-569.6c-14.933333 0-25.6-4.266667-27.733333-12.8-4.266667-8.533333 0-17.066667 10.666667-27.733334l281.6-281.6c4.266667-4.266667 12.8-8.533333 19.2-8.533333s17.066667 4.266667 21.333333 8.533333z',
                x: -5,
                y: 7,
                width: 10,
                height: 10,
                layout: 'cover'
              },
              style: {
                fill: '#45c946'
              }
            }]
            
          }
        }
      }]
    })
  }
}
</script>

<style lang="scss" scoped>
.total-users-footer {
  display: flex;
  align-items: center;
}
</style>
<svg t="1598976999059" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1332" width="200" height="200"><path d="M228.266667 347.733333h569.6c14.933333 0 25.6 4.266667 27.733333 12.8 4.266667 8.533333 0 17.066667-10.666667 27.733334l-281.6 281.6c-4.266667 4.266667-12.8 8.533333-19.2 8.533333-8.533333 0-14.933333-2.133333-19.2-8.533333l-281.6-281.6c-10.666667-10.666667-14.933333-21.333333-10.666666-27.733334 0-8.533333 8.533333-12.8 25.6-12.8z" p-id="1333"></path></svg>