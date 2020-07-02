<template>
<div>
  <Header />
  <div class="container">
    <IInput :label="INPUT_LABEL.L.label"
            :type="'number'"
            :placeholder="INPUT_LABEL.L.placeholder"
            :value="+getParamL"
            :errorText="REQUIRED_FIELD"
            v-model="paramL"
    />
    <IInput :label="INPUT_LABEL.M.label"
            :type="'number'"
            :placeholder="INPUT_LABEL.M.placeholder"
            :value="+getParamM"
            :errorText="REQUIRED_FIELD"
            v-model="paramM"
    />
    <IInput :label="INPUT_LABEL.N.label"
            :type="'number'"
            :placeholder="INPUT_LABEL.N.placeholder"
            :value="+getParamN"
            :errorText="REQUIRED_FIELD"
            v-model="paramN"
    />
    <BButton  :label="BUTTON_LABEL.START"
              :onClick="goSelectMode"
              :disabled="buttonDisabled()"
    />
  </div>
</div>
</template>

<script>
import BButton from './BButton'
import IInput from './IInput'
import Header from './Header'
import { BUTTON_LABEL, INPUT_LABEL, REQUIRED_FIELD } from '../const/const'
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
      INPUT_LABEL,
      REQUIRED_FIELD
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
        const value = this.setValue(val)
        this.setParamL({
          data: value
        })
      }
    },
    paramM: {
      get () {
        return this.getParamM
      },
      set (val) {
        const value = this.setValue(val)
        this.setParamM({
          data: value
        })
      }
    },
    paramN: {
      get () {
        return this.getParamN
      },
      set (val) {
        const value = this.setValue(val)
        this.setParamN({
          data: value
        })
      }
    },
  },
  methods: {
    ...mapActions('params', [
      'setParamL',
      'setParamM',
      'setParamN',
      'setDefaultState'
    ]),
    ...mapActions('app', [
      'setRenderHexField',
      'setMode'
    ]),
    ...mapActions('ui', [
      'setShowGoBack',
      'setHeaderText'
    ]),
    goSelectMode() {
      this.$router.push('/select')
    },
    buttonDisabled() {
      return !(this.paramL && this.paramL <= 30
            && this.paramM && this.paramM <= 30
            && this.paramN && this.paramN <= 30)
    },
    setValue(val) {
      return val.replace('.', '')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 50px;
}
</style>