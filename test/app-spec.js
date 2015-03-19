define(['app', 'jquery', 'lodash'], function (app, $, _) {
	describe('just checking', function () {

		it('works for app', function () {
			expect(app(42)).to.equal(43);
			//var el = $('<div></div>');
			//
			//var app = new app(el);
			//app.render();
			//
			//expect(el.text()).to.equal('require.js up and running');
		});

		it('works for lodash', function () {
			expect(_.size([1, 2, 3])).to.equal(3);
		});

	});
});

