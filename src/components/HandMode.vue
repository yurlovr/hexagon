<template>
<div>
  <Header />
  <form class="container">
    <IInput :label="INPUT_LABEL.L.label"
            :type="'number'"
            :placeholder="INPUT_LABEL.L.placeholder"
            :value="+getParamL"
            v-model="paramL"
    />
    <IInput :label="INPUT_LABEL.M.label"
            :type="'number'"
            :placeholder="INPUT_LABEL.M.placeholder"
            :value="+getParamM"
            v-model="paramM"
    />
    <IInput :label="INPUT_LABEL.N.label"
            :type="'number'"
            :placeholder="INPUT_LABEL.N.placeholder"
            :value="+getParamN"
            v-model="paramN"
    />
    <BButton  :label="BUTTON_LABEL.START"
              :onClick="buildHexField"
    />
  </form>
</div>
</template>

<script>
import BButton from './BButton'
import IInput from './IInput'
import Header from './Header'
import { BUTTON_LABEL, INPUT_LABEL } from '../const/const'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HandMode',
  components: {
    BButton,
    IInput,
    Header
  },
  data () {
    return {
      BUTTON_LABEL,
      INPUT_LABEL
    }
  },
    created() {
    if (!this.getMode) {
      this.setMode({
        data: 'hand'
      })
      // сбросить параметры на default
    }
  },
  computed: {
    ...mapGetters('params', [
      'getParamL',
      'getParamM',
      'getParamN',
    ]),
    ...mapGetters('app', [
      'getMode'
    ]),
    paramL: {
      get () {
        return this.getParamL
      },
      set (val) {
        this.setParamL({
          data: val
        })
      }
    },
    paramM: {
      get () {
        return this.getParamM
      },
      set (val) {
        this.setParamM({
          data: val
        })
      }
    },
    paramN: {
      get () {
        return this.getParamN
      },
      set (val) {
        this.setParamN({
          data: val
        })
      }
    },
  },
  methods: {
    ...mapActions('params', [
      'setParamL',
      'setParamM',
      'setParamN'
    ]),
    ...mapActions('app', [
      'setRenderHexField',
      'setMode'
    ]),
    buildHexField(event) {
      event.preventDefault()
      this.setRenderHexField()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>