import vue from 'rollup-plugin-vue'

export default {
  input: 'src/main.js',
  output: {
    file: 'valid-strict-input.js',
    format: 'esm'
  },
  plugins: [
    vue ()
  ]
}