'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.renderViewDefault = renderViewDefault;
exports.renderTrackHorizontalDefault = renderTrackHorizontalDefault;
exports.renderTrackVerticalDefault = renderTrackVerticalDefault;
exports.renderThumbHorizontalDefault = renderThumbHorizontalDefault;
exports.renderThumbVerticalDefault = renderThumbVerticalDefault;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable react/prop-types */

function renderViewDefault(props) {
    return _react2["default"].createElement('div', props);
}

function renderTrackHorizontalDefault(props) {
    var finalStyle = {
        right: 2,
        bottom: 2,
        left: 2,
        borderRadius: 3
    };
    return _react2["default"].createElement('div', _extends({}, props, { style: _extends({}, props.style, finalStyle) }));
}

function renderTrackVerticalDefault(props) {
    var finalStyle = {
        right: 2,
        bottom: 2,
        top: 2,
        borderRadius: 3
    };
    return _react2["default"].createElement('div', _extends({}, props, { style: _extends({}, props.style, finalStyle) }));
}

function renderThumbHorizontalDefault(props) {
    var finalStyle = {
        cursor: 'pointer',
        borderRadius: 'inherit',
        backgroundColor: 'rgba(0,0,0,.2)'
    };
    return _react2["default"].createElement('div', _extends({}, props, { style: _extends({}, props.style, finalStyle) }));
}

function renderThumbVerticalDefault(props) {
    var finalStyle = {
        cursor: 'pointer',
        borderRadius: 'inherit',
        backgroundColor: 'rgba(0,0,0,.2)'
    };
    return _react2["default"].createElement('div', _extends({}, props, { style: _extends({}, props.style, finalStyle) }));
}