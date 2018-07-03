import vue from 'rollup-plugin-vue'

export default {
  input: 'src/main.js',
  output: {
    file: 'valid-change-input.js',
    format: 'esm'
  },
  plugins: [
    vue ()
  ]
}