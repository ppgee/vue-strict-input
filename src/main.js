import VueStrictInput from './vue-strict-input.vue'

const install = function (Vue) {
  if (install.installed) return

  Vue.component ('vue-strict-input', VueStrictInput)
}

if (typeof window !== 'undefined' && window.Vue) {
  install (window.Vue)
}

export default {
  install
}
