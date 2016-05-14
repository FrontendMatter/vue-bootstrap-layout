var path = require('path')
var WebpackConfig = require('webpack-config-api')
var config = new WebpackConfig()
	.addFileExtension('js')
	.register('babel', require('webpack-config-api/extensions/babel')).use('babel')
	.register('eslint', require('webpack-config-api/extensions/eslint')).use('eslint')
	.register('vue', require('webpack-config-api/extensions/vue')).use('vue')
	.withStandaloneEntry('vue-bootstrap-layout')
	.withLibrary('VueBootstrapLayout')
	.withAlias({
		'vue-bootstrap-layout': path.resolve(__dirname, '..')
	})

module.exports = config