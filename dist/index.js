'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Dropdown = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dropdown = require('./dropdown.js');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _selectPanel = require('./select-panel.js');

var _selectPanel2 = _interopRequireDefault(_selectPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**
 * This component is designed to be a multi-selct component which supports
 * the selection of several items in a picklist.  It was meant to mimic the
 * style of react-select but the multi-select behavior didn't work for our
 * our needs.
 *
 * Arguments:
 * - options: The {value, label}[] options to be displayed
 * - values: The currently selected values []
 * - onSelectedChanged: An event to notify the caller of new values
 * - valueRenderer: A fn to support overriding the message in the component
 * - isLoading: Show a loading indicator
 */


var MultiSelect = function (_Component) {
    _inherits(MultiSelect, _Component);

    function MultiSelect() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, MultiSelect);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MultiSelect.__proto__ || Object.getPrototypeOf(MultiSelect)).call.apply(_ref, [this].concat(args))), _this), _this.handleSelectedChanged = function (selected) {
            var _this$props = _this.props,
                onSelectedChanged = _this$props.onSelectedChanged,
                disabled = _this$props.disabled;


            if (disabled) {
                return;
            }

            if (onSelectedChanged) {
                onSelectedChanged(selected);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(MultiSelect, [{
        key: 'getSelectedText',
        value: function getSelectedText() {
            var selected = this.props.selected;


            return selected.length + ' selected';
        }
    }, {
        key: 'renderHeader',
        value: function renderHeader() {
            var _props = this.props,
                options = _props.options,
                selected = _props.selected,
                valueRenderer = _props.valueRenderer,
                placeholder = _props.placeholder;


            var noneSelected = selected.length === 0;
            var allSelected = selected.length === options.length;

            var customText = valueRenderer && valueRenderer(selected, options);

            if (noneSelected) {
                return _react2.default.createElement(
                    'span',
                    null,
                    customText || (placeholder ? placeholder : "Select")
                );
            }

            if (customText) {
                return _react2.default.createElement(
                    'span',
                    null,
                    customText
                );
            }

            return _react2.default.createElement(
                'span',
                null,
                allSelected ? "All items are selected" : this.getSelectedText()
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                ItemRenderer = _props2.ItemRenderer,
                options = _props2.options,
                selected = _props2.selected,
                selectAllLabel = _props2.selectAllLabel,
                isLoading = _props2.isLoading,
                disabled = _props2.disabled,
                disableSearch = _props2.disableSearch,
                filterOptions = _props2.filterOptions,
                shouldToggleOnHover = _props2.shouldToggleOnHover,
                hasSelectAll = _props2.hasSelectAll,
                placeholder = _props2.placeholder;


            return _react2.default.createElement(
                _dropdown2.default,
                {
                    isLoading: isLoading,
                    contentComponent: _selectPanel2.default,
                    shouldToggleOnHover: shouldToggleOnHover,
                    contentProps: {
                        ItemRenderer: ItemRenderer,
                        options: options,
                        selected: selected,
                        hasSelectAll: hasSelectAll,
                        selectAllLabel: selectAllLabel,
                        onSelectedChanged: this.handleSelectedChanged,
                        disabled: disabled,
                        disableSearch: disableSearch,
                        filterOptions: filterOptions,
                        placeholder: placeholder
                    },
                    disabled: disabled
                },
                this.renderHeader()
            );
        }
    }]);

    return MultiSelect;
}(_react.Component);

MultiSelect.defaultProps = {
    hasSelectAll: true,
    shouldToggleOnHover: false
};
exports.default = MultiSelect;
exports.Dropdown = _dropdown2.default;