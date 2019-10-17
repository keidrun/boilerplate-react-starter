module.exports = api => {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/preset-react',
    '@babel/preset-flow',
  ]
  const plugins = [
    'react-hot-loader/babel',
    '@babel/plugin-transform-flow-strip-types',
  ]

  return {
    presets,
    plugins,
  }
}
