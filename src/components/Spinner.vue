<template>
  <div  v-if="isLoading" class="overlay">
      <div class="spinner">
        <p class="spinner_text">
          {{SPINNER_TEXT}}
        </p>
        <pulse-loader class="spinner_dot"
                      :loading="isLoading"
                      :color="'#a46bfe'"
                      :size="'15px'">
        </pulse-loader>
      </div>
  </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import { SPINNER_TEXT } from '../const/const'
export default {
  name: 'Spinner',
  props: {
    isLoading: Boolean
  },
  components: {
    PulseLoader
  },
  data() {
    return {
      SPINNER_TEXT
    }
  }
}
</script>

<style lang="scss" scoped>
.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &_text {
    text-shadow: 2px 1px 2px #000000a1;
    font-size: 35px;
    color: #120357;
  }
  &_dot {
    margin-left: 25%;
  }
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.3) ;
}
</style>