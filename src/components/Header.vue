<template>
  <div class="header_block">
    <BButton :label="BUTTON_LABEL.BACK.label"
              :id="BUTTON_LABEL.BACK.id"
              :onClick="goBack"
              :className="'header_button'"
    />
  </div>
</template>

<script>
import BButton from './BButton'
import { BUTTON_LABEL } from '../const/const'

export default {
  name: 'Header',
  components: {
    BButton
  },
  data() {
    return {
      BUTTON_LABEL
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.header_block {
  height: 100px;
  background-color:aqua;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.header_button {
  margin-top: 20px;
  margin-left: 20px;
}
</style>