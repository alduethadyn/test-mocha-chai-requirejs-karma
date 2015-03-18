requirejs.config({
	paths: {
		'jquery': '../lib/jquery/dist/jquery',
		'lodash': '../lib/lodash/lodash'
	}
});

define(['app', 'jquery', 'lodash'], function (App, $, _) {
	var app = new App($('body'));
	app.render();
	console.log(_.size([1, 2, 3]));
});
