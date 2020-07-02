<template>
  <span v-if="!item" class="empty"/>
  <svg v-else
        @click="clickItem"
        :id="id"
        class="hexagon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="35" height="40" viewbox="0 0 35 40">
    <path :fill="getFill()" d="M17.32050807568877 0L34.64101615137754 10L34.64101615137754 30L17.32050807568877 40L0 30L0 10Z"/>
    <text :x="'13'" y="25">{{!!item.check ? item.check : ''}}</text>
  </svg>
</template>

<script>
export default {
  name: 'Hex',
  props: {
    id: {
      type: Number
    },
    item: {
      type: Object,
      default: () => null
    },
  },
  methods: {
    clickItem() {
      this.$emit('hex', this.item)
    },
    getFill() {
      return this.item.color || '#FFFFFF'
    }
  }
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