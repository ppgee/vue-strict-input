import ValidChangeInput from './valid-change-input.vue'

const install = function (Vue) {
  if (install.installed) return

  Vue.component ('valid-change-input', ValidChangeInput)
}

if (typeof window !== 'undefined' && window.Vue) {
  install (window.Vue)
}

export default {
  install
}
