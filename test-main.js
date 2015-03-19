var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function (path) {
	return path.replace(/^\/base\//, "").replace(/\.js$/, "");
};

Object.keys(window.__karma__.files).forEach(function (file) {
	if (TEST_REGEXP.test(file)) {
		// Normalize paths to RequireJS module names.
		allTestFiles.push(pathToModule(file));
	}
});

require.config({
	// Karma serves files under /base, which is the basePath from your config file
	baseUrl: "/base",

	paths: {
		"app": "src/app",
		"jquery": "node_modules/jquery/dist/jquery",
		"lodash": "node_modules/lodash/index"
	},

	// dynamically load all test files
	deps: allTestFiles,

	// we have to kickoff jasmine, as it is asynchronous
	callback: window.__karma__.start
});
