import vue from 'rollup-plugin-vue'

export default {
  input: 'src/main.js',
  output: {
    file: 'vue-strict-input.js',
    format: 'esm'
  },
  plugins: [
    vue ()
  ]
}