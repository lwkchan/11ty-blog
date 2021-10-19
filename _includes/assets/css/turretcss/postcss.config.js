module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      stage: 1,
      features: {
        'color-mod-function': {
          unresolved: 'warn'
        },
        'nesting-rules': true
      }
    }),
    require('cssnano')({
      autoprefixer: false
    })
  ]
}