export default {
  input: 'ThreeApp.js',
  external: ['three'],
  output: [{
    file: './dist/three-app.js',
    format: 'umd',
    name: 'ThreeApp',
    globals: {
      'three': 'THREE',
    },
  }, {
    file: './dist/three-app.module.js',
    format: 'es',
    globals: {
      'three': 'THREE',
    },
  }],
  watch: {
    include: 'src/**',
  },
};
