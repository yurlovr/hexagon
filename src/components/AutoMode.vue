<template>
  <div>
    <Header />
    <section class="container">
      <div class="size_container">
        Размеры сетки:
        <p class="content">
        L: <span>{{getParamL}}</span>, M: <span> {{getParamM}}</span>, N: <span>{{getParamN}}</span>
        </p>
      </div>
      <IInput :label="INPUT_LABEL.PROBABILITY.label"
              :placeholder="INPUT_LABEL.PROBABILITY.placeholder"
              :type="'number'"
              :errorText="REQUIRED_FIELD_PROBABILITY"
              :value="+probability"
              v-model="probability"
      />
      <div  class="buttons_container">
        <BButton :label="BUTTON_LABEL.CHANGE_SIZE"
                  :onClick="changeSizeHexField"
        />
        <BButton :label="BUTTON_LABEL.PROBABILITY"
                  :onClick="setRandomProbability"
        />
        <BButton :label="BUTTON_LABEL.START"
                  :disabled="buttonDisabled()"
                  :onClick="goHexField"
        />
      </div>
    </section>
  </div>
</template>

<script>
import IInput from './IInput'
import BButton from './BButton'
import Header from './Header'
import { BUTTON_LABEL, INPUT_LABEL, AUTO_MODE_HEADER, REQUIRED_FIELD_PROBABILITY } from '../const/const'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'AutoMode',
  components: {
    BButton,
    IInput,
    Header
  },
  data() {
    return {
      BUTTON_LABEL,
      INPUT_LABEL,
      AUTO_MODE_HEADER,
      REQUIRED_FIELD_PROBABILITY
    }
  },
  computed: {
    ...mapGetters('params', [
      'getProbability',
      'getParamL',
      'getParamM',
      'getParamN'
    ]),
    probability: {
      get () {
        return this.getProbability
      },
      set (val) {
        this.setProbability({
          data: val
        })
      }
    }
  },
  methods: {
    ...mapActions('params', [
      'setProbability',
      'setChangeSize'
    ]),
    ...mapActions('app', [
      'setAutoRenderHexField'
    ]),
    changeSizeHexField() {
      this.setChangeSize()
    },
    setRandomProbability() {
      this.probability = Math.random().toFixed(5)
    },
    goHexField() {
      this.setAutoRenderHexField()
    },
    buttonDisabled() {
      return !this.probability || !(+this.probability > 0 && +this.probability < 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  justify-content: center;
  margin-top: 50px;
}
.buttons_container {
  margin-top: 50px;
}
.size_container {
    min-width: 300px;
    margin: 0 auto;
    text-align: center;
    font-size: 20px;
}
.content {
  & > span {
    font-weight: bold;
  }
}

</style>