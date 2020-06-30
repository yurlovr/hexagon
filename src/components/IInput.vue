<template>
  <label class="label"> {{label || ''}}
    <input class="input"
          :class="{'input-error': error}"
          :type="type"
          :placeholder="placeholder"
          v-model="model"
          autocomplete="off"/>
    <span v-if="errorText" class="error">
        {{errorText || ''}}
    </span>
  </label>
</template>

<script>
export default {
  name: 'IInput',
  props: {
    label: {
      type: String
    },
    type: {
      type: String
    },
    placeholder: {
      type: String
    },
    value: {
      type: String
    },
    errorText: {
      type: String
    },
    error: {
      type: Boolean
    }
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .label {
    display: block;
    position: relative;
    width: 600px;
    margin: 0 auto;
    font-size: 24px;
    line-height: 43px;
    text-align: center;
    }
  .input {
      display: block;
      width: 420px;
      margin-bottom: 25px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 30px;
      padding-top: 20px;
      padding-bottom: 20px;
      font-size: 24px;
      line-height: 29px;
      box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);
      background: #FFFFFF;
      border: 2px solid #f1f1f1;
      border-radius: 15px;
      &-error {
        border-color:#D9457C;
      }
    }
  .error {
    position: absolute;
    bottom: -6%;
    left: 14%;
    padding-left: 20px;
    color:#D9457C;
    font-size: 14px;
    line-height: 0;
  }
  input[disabled] {
    background-color: #c5bebe;
    border: 2px solid #D9457C;
    &::placeholder {
      color: #D9457C;
    }
  }
</style>