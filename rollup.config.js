import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/use-did-mount.ts',
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  external: [ 'react' ],
  plugins: [
    typescript({module: 'CommonJS'}),
    commonjs({extensions: ['.js', '.ts']}),
  ]
}
