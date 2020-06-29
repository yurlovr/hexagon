<template>
  <span v-if="!item" class="empty"/>
  <svg v-else
        @click="onClick"
        :id="item"
        class="hexagon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="35" height="40" viewbox="0 0 35 40">
    <path fill="#fff" d="M17.32050807568877 0L34.64101615137754 10L34.64101615137754 30L17.32050807568877 40L0 30L0 10Z"/>
    <text :x="item > 9 ? '10' : '13'" y="25">{{item}}</text>
  </svg>
</template>

<script>
export default {
  name: 'Hex',
  props: {
    item: {
      type: Number
    },
    onClick: {
      type: Function
    }
  },
}
</script>

<style lang="scss" scoped>
.hexagon {
  stroke: #000000;
  stroke-width: 1;
  cursor: pointer;
}
.empty {
  display: inline-block;
  width: 17.5px;
  height: 40px;
}

</style>