<template>
  <section class="field">
    <div class="wrapper" :style="{'width': 35 * (n + m) + 'px'}">
      <div v-for="(row, index) in test()"
          :key="index"
          class="hex_row"
          :class="{'first': index}">
        <Hex v-for="item in row"
            :key="item"
            :item="item"
            :onClick="clickToHex"/>
      </div>
    </div>
  </section>
</template>

<script>
import Hex from './Hex'

export default {
  name: 'HexField',
  components: {
    Hex
  },
  data() {
    return {
      l: 3,
      n: 7,
      m: 5,
      rows: [
        [null, null, 1, 2, 3, 4, 5, 6 , 7],
        [null, 1, 2, 3, 4, 5, 6 , 7, 8],
        [1, 2, 3, 4, 5, 6 , 7, 8, 9],
        [null, 1, 2, 3, 4, 5, 6 , 7, 8, 9],
        [null, null, 1, 2, 3, 4, 5, 6 , 7, 8, 9],
        [null, null, null, 1, 2, 3, 4, 5, 6 , 7, 8],
        [null, null, null, null, 1, 2, 3, 4, 5, 6 , 7],
      ],
    }
  },
  methods: {
    clickToHex(event) {
      const id = event.currentTarget.id
      console.log(id)
    },
    test() {
      let result = []
      const l = 3
      const n = 7
      const m = 5
      // const rows = m + l
      let d = l
      let counter = 1
      let nullElement = 1
      // верхний блок
      for (let i = 1; i <= l; i ++) {
        let array = []
        for (let j = 1; j < n + l; j++) {
          if (i !== l && j < d) {
            array.push(null)
          } else {
            array.push(counter++)
          }
        }
        d--
        console.log(array)
        result.push(array)
    }
    // верхний блок
    let middleArray = []
    for (let j = 1; j <= n + l; j++) {
      if (j === 1) {
        middleArray.push(null)
      } else {
        middleArray.push(counter++)
      }
    }
    console.log("middle", middleArray)
    result.push(middleArray)
    // нижний блок
    let limit = l + n - 1
      for (let i = 1; i < m - 2; i++) {
        let array = []
        for (let j = 0; j <= limit; j++) {
          if (j <= nullElement) {
            array.push(null)
          } else {
            array.push(counter++)
          }
        }
        // if (l % 2 === 0 && i < (m - 2) - i) {
        //   limit++
        // }

        nullElement++
        console.log("array", array)
        result.push(array)
      }
      let lastArray = []
      nullElement++
      limit = l % 2 === 0 ? n + l : n + l + 1
      for (let j = 1; j <= limit; j++) {
        if (j <= nullElement) {
          lastArray.push(null)
        } else {
          lastArray.push(counter++)
        }
      }
      console.log("last", lastArray)
      result.push(lastArray)
    // нижний блок
      console.log(result)
      return result
    }
  }
}
</script>

<style lang="scss" scoped>
.field {
  min-height: 500px;
  margin: 0 auto;
  background-color: antiquewhite;
}
.wrapper {
  margin: 0 auto;
  padding-top: 20px;
}
.first {
  margin-top: -14px;
}
</style>
