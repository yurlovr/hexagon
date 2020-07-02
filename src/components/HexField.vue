<template>
  <section class="field">
    <Header />
    <div class="wrapper">
      <div class="stat">
        <p class="total">
          Количество ячеек в решетке: <span>{{getTotalCountCells}}</span>
        </p>
        <p class="total">
          Количество доменов (ячейки с 1): <span>{{getTotalAmountHex && getTotalAmountHex}}</span>
        </p>
        <p class="total">
          Количество односвязных доменов(одинакового цвета): <span>{{getDiffrentDomen()}}</span>
        </p>
      </div>
      <div class="hex_field">
        <div v-for="(row, index) in getHexArray"
            :key="index"
            class="hex_row"
            :class="{'first': index}">
          <Hex v-for="item in row"
              :key="item ? item.id : getKey()"
              :id="item && item.id"
              :item="item ? item : null"
              @hex="clickToHex"
          />
        </div>
      </div>
    </div>
    <div class="stats" v-if="getMode === 'auto'">
      <Table :tableData="getStats" />
    </div>
  </section>
</template>

<script>
import Hex from './Hex'
import Header from './Header'
import Table from './Table'
import { mapGetters, mapActions } from 'vuex'
const cryptoRandomString = require('crypto-random-string')

export default {
  name: 'HexField',
  components: {
    Hex,
    Header,
    Table
  },
  data() {
    return {
    }
  },
  mounted() {
    if (this.getMode === 'auto') {
      this.setStats()
    }
    if (this.getIsLoading) {
      this.setIsLoading({
        data: false
      })
    }
  },
  computed: {
    ...mapGetters('ui', [
      'getIsLoading'
    ]),
    ...mapGetters('params', [
      'getParamL',
      'getParamM',
      'getParamN',
      'getHexArray',
      'getTotalAmountHex',
      'getTotalHexColor'
    ]),
    ...mapGetters('app', [
      'getMode',
      'getStats'
    ]),
    getTotalCountCells: {
      get () {
        return this.getHexArray.reduce((summ, current) => {
          return summ + current.filter(Boolean).length
        }, 0)
      }
    }
  },
  methods: {
    ...mapActions('ui', [
      'setIsLoading'
    ]),
    ...mapActions('params', [
      'setCheckHex'
    ]),
    ...mapActions('app', [
      'setStats'
    ]),
    getKey() {
      return cryptoRandomString({length: 5})
    },
    getDiffrentDomen() {
      return Object.keys(this.getTotalHexColor).length
    },
    clickToHex(item) {
      if (!item) return
      if (this.getMode === 'auto') return
      this.setCheckHex({
        data: {
          ...item,
          check: item.check ? 0 : 1
        }
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.field {
  min-height: 500px;
  margin: 0 auto;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  padding-top: 20px;
}
.stat {
  margin-bottom: 50px;
}
.total {
  text-align: left;
  font-size: 20px;
  & > span {
    font-weight: bold;
  }
}
.first {
  margin-top: -14px;
}
.stats {
  width: 1000px;
  margin: 0 auto;
}
</style>
