<template>
  <section class="container">
    <h1 class="header">{{SELECT_MODE_HEADER}}</h1>
    <div class="button_container">
      <BButon :label="BUTTON_LABEL.HAND_MODE.label"
              :id="BUTTON_LABEL.HAND_MODE.id"
              :onClick="selectMode"
      />
      <BButon :label="BUTTON_LABEL.AUTO_MODE.label"
              :id="BUTTON_LABEL.AUTO_MODE.id"
              :onClick="selectMode"
      />
    </div>
  </section>
</template>

<script>
import BButon from './BButton'
import { mapActions } from 'vuex'
import { BUTTON_LABEL, SELECT_MODE_HEADER } from '../const/const'

export default {
  name: 'SelectMode',
  components: {
    BButon
  },
  data() {
    return {
      BUTTON_LABEL,
      SELECT_MODE_HEADER
    }
  },
  methods: {
    ...mapActions('app', [
      'setMode'
    ]),
    selectMode(event) {
      const target = event.target.id
      this.setMode({
        data: target
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  justify-content: center;
}
</style>