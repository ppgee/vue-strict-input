<template>
  <input :type="type" 
    class="reset-input"
    :name="name"
    :alt="alt"
    :autofocus="autofocus"
    :checked="checked"
    :disabled="disabled"
    :placeholder="placeholder"
    :maxlength="maxlength"
    @focus="onFocus"
    @blur="onBlur"
    @change="onChange"
    @input="onInput"
  />
</template>

<script>
const INPUT_TYPE = ['number', 'email']

// 匹配数字
const MATCH_NOT_NUMBER = (inputValue) => {
  return /\D/.test(inputValue)
}

// 汉字字符
const NOT_ASCII = /[\u4e00-\u9fa5]/ig

// 匹配规则
const REGEXP_MATCH = {
  number: MATCH_NOT_NUMBER,
  email: (inputValue) => NOT_ASCII.test(inputValue)
}

export default {
  name: 'valid-change-input',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: 'valid-change-input'
    },
    alt: {
      type: String,
      default: ''
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    maxlength: {
      type: Number,
      default: 255
    },
    readonly: {
      type: Boolean,
      default: false
    },
    inputType: {
      default: '',
      validator (inputType) {
        return INPUT_TYPE.indexOf(inputType) !== -1
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    // 验证输入类型
    inputTypeValidator (inputType = this.inputType) {
      return INPUT_TYPE.indexOf(inputType) !== -1
    },
    // 获得焦点
    onFocus (e) {
      this.$emit('focus', e)
    },
    // 失去焦点
    onBlur (e) {
      this.$emit('blur', e)
    },
    // change 失去焦点后触发
    onChange (e) {
      this.$emit('change', e)
    },
    // 获得焦点change时触发
    onInput (e) {
      // 处理检测正确结果
      const matchedCallback = (e) => {
        e.target.value = this.value
      }
      // 处理检测错误结果
      const dismatchCallback = (e) => {
        this.$emit('input', e.target.value)
      }

      // 检测是否存在输入限制
      if (this.inputType && this.inputTypeValidator()) {
        // 进行匹配校验
        const matchResult = REGEXP_MATCH[this.inputType] && REGEXP_MATCH[this.inputType](e.target.value)
        matchResult ? matchedCallback(e) : dismatchCallback(e)
        return
      }

      // 如果不存在检验或者检验不匹配
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style scoped>
.reset-input {
  outline: none;
}
</style>


