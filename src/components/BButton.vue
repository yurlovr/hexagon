<template>
  <button class="button button_main"
          :class="{[className]: className,
                    'button_small': small}"
          @click="onClick"
          :disabled="disabled"
          :id="buttonId">
    {{label}}
  </button>
</template>

<script>
import uuid from 'uuid'

export default {
  name: 'BButton',
  props: {
    label:{
      type: String
    },
    onClick: {
      type: Function
    },
    className: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    small: {
      type: Boolean,
      default: false
    },
    buttonId: {
      type: String,
      default: uuid()
    }
  }
}
</script>

<style lang="scss" scoped>
.button_main {
  min-width: 160px;
  align-self: center;
  padding: 13px 22px;
  background-color: #FFFFFF;
  border-radius: 12px;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #000000;
  box-shadow: 3px 5px 7px 3px rgba(0, 0, 0, 0.2);
  &.button_small {
    width: 80px;
    padding: 9px 15px;
    font-size: 20px;
    line-height: normal;
  }
  &:hover {
    box-shadow: 1px 1px 12px 4px rgba(0, 196, 255, 0.9);
  }
  &[disabled] {
    background-color: grey;
    color: #FFFFFF;
    &:hover {
      box-shadow: 3px 5px 7px 3px rgba(0, 0, 0, 0.2);
    }
  }
}


</style>