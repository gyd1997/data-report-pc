<template>
  <ve-wordcloud
    :data="chartData"
    height="100%"
    :settings="chartSettings"
  ></ve-wordcloud>
</template>

<script>
import {getWordCloud} from '../../api'
export default {
  data() {
    return {
      chartData: {
        columns: ["name", "value"],
        rows: [
          {
            name: "Vue",
            value: 100,
          },
          {
            name: "jQuery",
            value: 150,
          },
          {
            name: "React",
            value: 60,
          },
          {
            name: "Angular",
            value: 20,
          },
          {
            name: "JS",
            value: 300,
          },
          {
            name: "CSS",
            value: 200,
          },
        ],
      },
      chartSettings: {
        color: ["rgba(97, 216, 0, .7)", "rgba(204, 178, 26, .7)", "rgba(245, 166, 35, .7)", "rgba(156, 13, 113, .7)"],
      },
    };
  },
  mounted() {
    getWordCloud()
  }
};
</script>

<style lang="scss" scoped>
</style>