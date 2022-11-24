module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,ico,html,js,md,webmanifest,css,woff2}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};