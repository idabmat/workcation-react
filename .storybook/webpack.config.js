module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.css$/,
    use: ['postcss-loader']
  })

  return config
}
