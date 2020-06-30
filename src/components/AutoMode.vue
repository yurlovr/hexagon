<template>
  <section class="container">
    <h1 class="header">
      {{AUTO_MODE_HEADER}}
    </h1>
    <IInput :label="INPUT_LABEL.PROBABILITY.label"
            :placeholder="INPUT_LABEL.PROBABILITY.placeholder"
            :type="number"
    />
    <BButton :label="BUTTON_LABEL.AUTO"
              :disables="false"
              :onClick="setProbability"

    />
  </section>
</template>

<script>
import IInput from './IInput'
import BButton from './BButton'
import { BUTTON_LABEL, INPUT_LABEL, AUTO_MODE_HEADER } from '../const/const'

export default {
  name: 'AutoMode',
  components: {
    BButton,
    IInput
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
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  justify-content: center;
}

</style>