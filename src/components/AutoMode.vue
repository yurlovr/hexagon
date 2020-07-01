<template>
  <div>
    <Header />
    <section class="container">
      <h1 class="header">
        {{AUTO_MODE_HEADER}}
      </h1>
      <IInput :label="INPUT_LABEL.PROBABILITY.label"
              :placeholder="INPUT_LABEL.PROBABILITY.placeholder"
              :type="number"
      />
      <BButton :label="BUTTON_LABEL.AUTO"
                :disabled="buttonDisabled()"
                :onClick="setProbability"

      />
    </section>
  </div>
</template>

<script>
import IInput from './IInput'
import BButton from './BButton'
import Header from './Header'
import { BUTTON_LABEL, INPUT_LABEL, AUTO_MODE_HEADER } from '../const/const'

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
      AUTO_MODE_HEADER
    }
  },
  methods: {
    setProbability() {
      console.log()
    },
    buttonDisabled() {
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  justify-content: center;
  margin-top: 50px;
}

</style>