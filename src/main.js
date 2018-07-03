import ValidStrictInput from './valid-strict-input.vue'

const install = function (Vue) {
  if (install.installed) return

  Vue.component ('valid-strict-input', ValidStrictInput)
}

if (typeof window !== 'undefined' && window.Vue) {
  install (window.Vue)
}

export default {
  install
}
