<template>
  <section class="container">
    <div class="not">
      <p class="not_title">
        404
      </p>
      <p class="not_description">
        Page Not Found
      </p>
    </div>
    <BButton :label="BUTTON_LABEL.GO_MAIN.label"
              :id="BUTTON_LABEL.GO_MAIN.id"
              :onClick="goMainPage"/>
  </section>
</template>

<script>
import BButton from './BButton'
import { BUTTON_LABEL } from '../const/const'

export default {
  name: 'NotFound',
  components: {
    BButton
  },
  data() {
    return {
      BUTTON_LABEL
    }
  },
  methods: {
    goMainPage() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.not {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
  font-size: 100px;
  &_title {
    font-weight: bold;
    margin-bottom: 0;
    margin-top: 0;
  }
  &_description {
    font-size: 60px;
  }
}
</style>