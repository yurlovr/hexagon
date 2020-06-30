<template>
  <section class="field">
    <Header />
    <div class="wrapper" :style="{'min-width': 35 * (getParamN + getParamM) + 'px'}">
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
import Header from './Header'
import { mapGetters } from 'vuex'

export default {
  name: 'HexField',
  components: {
    Hex,
    Header
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters('params', [
      'getParamL',
      'getParamM',
      'getParamN'
    ])
  },
  methods: {
    clickToHex(event) {
      const id = event.currentTarget.id
      console.log(id)
    },
    test() {
      // Всего строк  m + l - 1
      // верхний блок  - смещение в лево на l
      // средний блок - смещение в право m - 
      let result = []
      const l = +this.getParamL
      const m = +this.getParamM
      const n = +this.getParamN
      let d = l
      let counter = 1
      let nullElement = 0
      let prevLength = 0
      const maxLength = l > m ? l : m;
      const minLength = l > m ? m : l;
      // верхний блок
      console.log("TOP")
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
        if (i < n + l) {
        prevLength = array.length
        console.log(prevLength)
      }
        console.log(array)
        result.push(array)
    }
    console.log("MIDDLE")
    let middleLimit = m ? maxLength - minLength : 0
    for (let i = 1; i <= middleLimit; i++) {
      let middleArray = []
      for (let j = 0; j < n + l + nullElement; j++) {
        if (j <= nullElement) {
          middleArray.push(null)
        } else {
          middleArray.push(counter++)
        }
      }
      console.log("array", middleArray)
      nullElement++
      result.push(middleArray)
      if (i === middleLimit) {
        prevLength = middleArray.length
        console.log(prevLength)
      }
    }
    console.log("BOTTOM")
    const bottomLimit = l ? maxLength - Math.abs(m - l) : 0
    console.log("bottomLimit", bottomLimit)
    for (let i = 1; i < bottomLimit; i++) {
      let array = []
      for (let j = 0; j < prevLength; j++) {
        if (j <= nullElement) {
          array.push(null)
        } else {
          array.push(counter++)
        }
      }
      nullElement++
      console.log("array", array)
      result.push(array)
    }
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
  margin-top: 50px;
  padding-top: 20px;
}
.first {
  margin-top: -14px;
}
</style>
