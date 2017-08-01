'use strict';

exports.__esModule = true;
exports.CarouselPage = exports.CarouselDot = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CarouselDot = exports.CarouselDot = (0, _createReactClass2.default)({
	render: function render() {
		var _props = this.props,
		    dotCount = _props.dotCount,
		    clickHandler = _props.clickHandler,
		    currentSlide = _props.currentSlide;

		var emptyArray = new Array(dotCount).toString().split(',');

		return _react2.default.createElement(
			'ul',
			{ className: 'lm-ui-carousel-dot-list' },
			emptyArray.map(function (item, index) {

				return _react2.default.createElement('li', {
					className: currentSlide === index ? 'carousel-dot-item active' : 'carousel-dot-item',
					onClick: function onClick() {
						clickHandler(index);
					},
					key: 'carouselDot' + index });
			})
		);
	}
});

var CarouselPage = exports.CarouselPage = (0, _createReactClass2.default)({
	render: function render() {
		var _props2 = this.props,
		    pageTotel = _props2.pageTotel,
		    currentSlide = _props2.currentSlide;
		//let emptyArray = new Array(dotCount).toString().split(',');

		return _react2.default.createElement(
			'span',
			{ className: 'lm-ui-carousel-page' },
			currentSlide + 1 + '/' + pageTotel
		);
	}
});