<template>
  <div class="header_block">
    <BButton :label="BUTTON_LABEL.BACK.label"
              :id="BUTTON_LABEL.BACK.id"
              :onClick="goBack"
              :className="'header_button'"
    />
    <h1 class="header_text"
        :class="{'header_text_right': !getGoMainPage}"
        v-if="getHeaderText">
      {{headerText()}}
    </h1>
    <BButton  v-if="getGoMainPage"
              :label="BUTTON_LABEL.GO_MAIN.label"
              :id="BUTTON_LABEL.GO_MAIN.id"
              :onClick="goMain"
              :className="'header_button-main'"
    />
  </div>
</template>

<script>
import BButton from './BButton'
import { BUTTON_LABEL } from '../const/const'
import { mapGetters, mapActions } from 'vuex'

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
  computed: {
    ...mapGetters('ui', [
      'getHeaderText',
      'getGoMainPage'
    ]),
    ...mapGetters('params', [
      'getParamL',
      'getParamN',
      'getParamM'
    ])
  },
  methods: {
    ...mapActions('ui', [
      'setHeaderText',
      'setGoBack'
    ]),
    headerText() {
      if (this.getHeaderText && this.getHeaderText.includes('getParam')) {
        return this.getHeaderText.replace('getParamL', this.getParamL).replace('getParamM', this.getParamM).replace('getParamN', this.getParamN)
      }
      return this.getHeaderText
    },
    goBack() {
      this.setGoBack()
    },
    goMain() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.header_block {
  display: flex;
  justify-content: space-between;
  height: 100px;
  background-color:aliceblue;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 5px 1px 16px 0 hsla(0, 0%, 0%, 0.35);
}
.header_button {
  margin-left: 20px;
  &-main {
    margin-left: 0;
    margin-right: 20px;
  }
}
.header_text {
  padding-top: 15px;
  flex-grow: 1;
  text-align: center;
  &_right {
    margin-right: 180px;
  }
}
</style>