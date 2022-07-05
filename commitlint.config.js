const types = ['fix', 'style', 'feature', 'prune', 'docs', 'init', 'release', 'wip', 'config', 'poo', 'merge']

module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [2, 'always', types],
	},
}
