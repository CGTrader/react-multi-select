(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**
 * This component represents an individual item in the multi-select drop-down
 */


var DefaultItemRenderer = function (_Component) {
    _inherits(DefaultItemRenderer, _Component);

    function DefaultItemRenderer() {
        _classCallCheck(this, DefaultItemRenderer);

        return _possibleConstructorReturn(this, (DefaultItemRenderer.__proto__ || Object.getPrototypeOf(DefaultItemRenderer)).apply(this, arguments));
    }

    _createClass(DefaultItemRenderer, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                checked = _props.checked,
                option = _props.option,
                onClick = _props.onClick,
                disabled = _props.disabled;


            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement("input", {
                    type: "checkbox",
                    onChange: onClick,
                    checked: checked,
                    tabIndex: "-1",
                    disabled: disabled,
                    className: "checkbox is-spaced",
                    id: option.label === 'Select All' ? 'select-all' : option.value
                }),
                _react2.default.createElement(
                    "label",
                    { htmlFor: option.label === 'Select All' ? 'select-all' : option.value },
                    option.label
                )
            );
        }
    }]);

    return DefaultItemRenderer;
}(_react.Component);

var SelectItem = function (_Component2) {
    _inherits(SelectItem, _Component2);

    function SelectItem() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, SelectItem);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = SelectItem.__proto__ || Object.getPrototypeOf(SelectItem)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {
            hovered: false
        }, _this2.onChecked = function (e) {
            var onSelectionChanged = _this2.props.onSelectionChanged;
            var checked = e.target.checked;


            onSelectionChanged(checked);
        }, _this2.toggleChecked = function () {
            var _this2$props = _this2.props,
                checked = _this2$props.checked,
                onSelectionChanged = _this2$props.onSelectionChanged;

            onSelectionChanged(!checked);
        }, _this2.handleClick = function (e) {
            var onClick = _this2.props.onClick;

            _this2.toggleChecked();
            onClick(e);
        }, _this2.handleKeyDown = function (e) {
            switch (e.which) {
                case 13: // Enter
                case 32:
                    // Space
                    _this2.toggleChecked();
                    break;
                default:
                    return;
            }

            e.preventDefault();
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(SelectItem, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.updateFocus();
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            this.updateFocus();
        }
    }, {
        key: "updateFocus",
        value: function updateFocus() {
            var focused = this.props.focused;


            if (focused && this.itemRef) {
                this.itemRef.focus();
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var _props2 = this.props,
                ItemRenderer = _props2.ItemRenderer,
                option = _props2.option,
                checked = _props2.checked,
                focused = _props2.focused,
                disabled = _props2.disabled;
            var hovered = this.state.hovered;


            return _react2.default.createElement(
                "li",
                {
                    role: "option",
                    "aria-selected": checked,
                    selected: checked,
                    tabIndex: "-1",
                    ref: function ref(_ref2) {
                        return _this3.itemRef = _ref2;
                    },
                    onKeyDown: this.handleKeyDown,
                    onMouseOver: function onMouseOver() {
                        return _this3.setState({ hovered: true });
                    },
                    onMouseOut: function onMouseOut() {
                        return _this3.setState({ hovered: false });
                    }
                },
                _react2.default.createElement(ItemRenderer, {
                    option: option,
                    checked: checked,
                    onClick: this.handleClick,
                    disabled: disabled
                })
            );
        }
    }]);

    return SelectItem;
}(_react.Component);

SelectItem.defaultProps = {
    ItemRenderer: DefaultItemRenderer
};
exports.default = SelectItem;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _loadingIndicator = __webpack_require__(5);

var _loadingIndicator2 = _interopRequireDefault(_loadingIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**
 * A generic dropdown component.  It takes the children of the component
 * and hosts it in the component.  When the component is selected, it
 * drops-down the contentComponent and applies the contentProps.
 */


var Dropdown = function (_Component) {
    _inherits(Dropdown, _Component);

    function Dropdown() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Dropdown);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            expanded: false,
            hasFocus: false
        }, _this.handleDocumentClick = function (event) {
            if (_this.wrapper && !_this.wrapper.contains(event.target)) {
                _this.setState({ expanded: false });
            }
        }, _this.handleKeyDown = function (e) {
            switch (e.which) {
                case 27:
                    // Escape
                    _this.toggleExpanded(false);
                    break;
                case 38:
                    // Up Arrow
                    _this.toggleExpanded(false);
                    break;
                case 40:
                    // Down Arrow
                    _this.toggleExpanded(true);
                    break;
                default:
                    return;
            }

            e.preventDefault();
        }, _this.handleFocus = function (e) {
            var hasFocus = _this.state.hasFocus;


            if (e.target === _this.wrapper && !hasFocus) {
                _this.setState({ hasFocus: true });
            }
        }, _this.handleBlur = function (e) {
            var hasFocus = _this.state.hasFocus;


            if (hasFocus) {
                _this.setState({ hasFocus: false });
            }
        }, _this.handleMouseEnter = function (e) {
            _this.handleHover(true);
        }, _this.handleMouseLeave = function (e) {
            _this.handleHover(false);
        }, _this.handleHover = function (toggleExpanded) {
            var shouldToggleOnHover = _this.props.shouldToggleOnHover;


            if (shouldToggleOnHover) {
                _this.toggleExpanded(toggleExpanded);
            }
        }, _this.toggleExpanded = function (value) {
            var isLoading = _this.props.isLoading;
            var expanded = _this.state.expanded;


            if (isLoading) {
                return;
            }

            var newExpanded = value === undefined ? !expanded : !!value;

            _this.setState({ expanded: newExpanded });

            if (!newExpanded && _this.wrapper) {
                _this.wrapper.focus();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Dropdown, [{
        key: 'componentWillUpdate',
        value: function componentWillUpdate() {
            document.addEventListener('touchstart', this.handleDocumentClick);
            document.addEventListener('mousedown', this.handleDocumentClick);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('touchstart', this.handleDocumentClick);
            document.removeEventListener('mousedown', this.handleDocumentClick);
        }
    }, {
        key: 'renderPanel',
        value: function renderPanel() {
            var _props = this.props,
                ContentComponent = _props.contentComponent,
                contentProps = _props.contentProps;


            return _react2.default.createElement(ContentComponent, _extends({}, contentProps, { toggleExpanded: this.toggleExpanded }));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                expanded = _state.expanded,
                hasFocus = _state.hasFocus;
            var _props2 = this.props,
                children = _props2.children,
                isLoading = _props2.isLoading,
                disabled = _props2.disabled;


            return _react2.default.createElement(
                'div',
                {
                    className: 'custom-dropdown--multi',
                    tabIndex: '0',
                    role: 'combobox',
                    'aria-expanded': expanded,
                    'aria-readonly': 'true',
                    'aria-disabled': disabled,
                    ref: function ref(_ref2) {
                        return _this2.wrapper = _ref2;
                    },
                    onKeyDown: this.handleKeyDown,
                    onFocus: this.handleFocus,
                    onBlur: this.handleBlur,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave
                },
                _react2.default.createElement(
                    'div',
                    {
                        className: 'custom-dropdown__header',
                        onClick: this.toggleExpanded
                    },
                    _react2.default.createElement(
                        'span',
                        {
                            className: 'custom-dropdown__title'
                        },
                        children
                    ),
                    _react2.default.createElement(
                        'span',
                        {
                            className: 'custom-dropdown__loader'
                        },
                        isLoading && _react2.default.createElement(_loadingIndicator2.default, null)
                    ),
                    _react2.default.createElement(
                        'span',
                        {
                            className: 'custom-dropdown__caret'
                        },
                        _react2.default.createElement('span', {
                            className: 'fas fa-caret-down is-not-spaced'
                        })
                    )
                ),
                expanded && this.renderPanel()
            );
        }
    }]);

    return Dropdown;
}(_react.Component);

exports.default = Dropdown;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fuzzyMatchUtils = __webpack_require__(7);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _selectItem = __webpack_require__(1);

var _selectItem2 = _interopRequireDefault(_selectItem);

var _selectList = __webpack_require__(6);

var _selectList2 = _interopRequireDefault(_selectList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**
 * This component represents the entire panel which gets dropped down when the
 * user selects the component.  It encapsulates the search filter, the
 * Select-all item, and the list of options.
 */


var SelectPanel = function (_Component) {
    _inherits(SelectPanel, _Component);

    function SelectPanel() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SelectPanel);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectPanel.__proto__ || Object.getPrototypeOf(SelectPanel)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            searchText: "",
            focusIndex: 0
        }, _this.selectAll = function () {
            var _this$props = _this.props,
                onSelectedChanged = _this$props.onSelectedChanged,
                options = _this$props.options;

            var allValues = options.map(function (o) {
                return o.value;
            });

            onSelectedChanged(allValues);
        }, _this.selectNone = function () {
            var onSelectedChanged = _this.props.onSelectedChanged;


            onSelectedChanged([]);
        }, _this.selectAllChanged = function (checked) {
            if (checked) {
                _this.selectAll();
            } else {
                _this.selectNone();
            }
        }, _this.handleSearchChange = function (e) {
            _this.setState({
                searchText: e.target.value,
                focusIndex: -1
            });
        }, _this.handleItemClicked = function (index) {
            _this.setState({ focusIndex: index });
        }, _this.clearSearch = function () {
            _this.setState({ searchText: "" });
        }, _this.handleKeyDown = function (e) {
            switch (e.which) {
                case 38:
                    // Up Arrow
                    if (e.altKey) {
                        return;
                    }

                    _this.updateFocus(-1);
                    break;
                case 40:
                    // Down Arrow
                    if (e.altKey) {
                        return;
                    }

                    _this.updateFocus(1);
                    break;
                default:
                    return;
            }

            e.stopPropagation();
            e.preventDefault();
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SelectPanel, [{
        key: 'allAreSelected',
        value: function allAreSelected() {
            var _props = this.props,
                options = _props.options,
                selected = _props.selected;

            return options.length === selected.length;
        }
    }, {
        key: 'filteredOptions',
        value: function filteredOptions() {
            var searchText = this.state.searchText;
            var _props2 = this.props,
                options = _props2.options,
                customFilterOptions = _props2.filterOptions;


            return customFilterOptions ? customFilterOptions(options, searchText) : (0, _fuzzyMatchUtils.filterOptions)(options, searchText);
        }
    }, {
        key: 'updateFocus',
        value: function updateFocus(offset) {
            var focusIndex = this.state.focusIndex;
            var options = this.props.options;


            var newFocus = focusIndex + offset;
            newFocus = Math.max(0, newFocus);
            newFocus = Math.min(newFocus, options.length);

            this.setState({ focusIndex: newFocus });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var focusIndex = this.state.focusIndex;
            var _props3 = this.props,
                ItemRenderer = _props3.ItemRenderer,
                selectAllLabel = _props3.selectAllLabel,
                disabled = _props3.disabled,
                disableSearch = _props3.disableSearch,
                hasSelectAll = _props3.hasSelectAll,
                selected = _props3.selected,
                placeholder = _props3.placeholder,
                options = _props3.options;


            var selectAllOption = {
                label: selectAllLabel || "Select All",
                value: ""
            };

            return _react2.default.createElement(
                'div',
                {
                    className: 'custom-dropdown__content'
                },
                _react2.default.createElement(
                    'div',
                    {
                        className: 'custom-dropdown__header',
                        onClick: function onClick() {
                            return _this2.props.toggleExpanded(false);
                        }
                    },
                    _react2.default.createElement(
                        'span',
                        {
                            className: 'custom-dropdown__title'
                        },
                        selected.length === 0 ? placeholder ? placeholder : "Select" : selected.length === options.length ? "All items are selected" : selected.length + ' selected'
                    ),
                    _react2.default.createElement(
                        'span',
                        {
                            className: 'custom-dropdown__caret'
                        },
                        _react2.default.createElement('span', {
                            className: 'fas fa-caret-up is-not-spaced'
                        })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'custom-dropdown__dropdown',
                        role: 'listbox',
                        onKeyDown: this.handleKeyDown
                    },
                    !disableSearch && _react2.default.createElement(
                        'div',
                        { className: 'custom-dropdown__search' },
                        _react2.default.createElement('input', {
                            placeholder: 'Search',
                            type: 'text',
                            onChange: this.handleSearchChange,
                            className: 'custom-dropdown__search-input'
                        })
                    ),
                    hasSelectAll && _react2.default.createElement(
                        'ul',
                        { className: 'custom-dropdown__list' },
                        _react2.default.createElement(_selectItem2.default, {
                            focused: focusIndex === 0,
                            checked: this.allAreSelected(),
                            option: selectAllOption,
                            onSelectionChanged: this.selectAllChanged,
                            onClick: function onClick() {
                                return _this2.handleItemClicked(0);
                            },
                            ItemRenderer: ItemRenderer,
                            disabled: disabled
                        })
                    ),
                    _react2.default.createElement(_selectList2.default, _extends({}, this.props, {
                        options: this.filteredOptions(),
                        focusIndex: focusIndex - 1,
                        onClick: function onClick(e, index) {
                            return _this2.handleItemClicked(index + 1);
                        },
                        ItemRenderer: ItemRenderer,
                        disabled: disabled
                    }))
                )
            );
        }
    }]);

    return SelectPanel;
}(_react.Component);

exports.default = SelectPanel;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Dropdown = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dropdown = __webpack_require__(2);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _selectPanel = __webpack_require__(3);

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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**
 * A simple loading indicator, modeled after react-select.  Since react styles
 * don't support animations, hack it so we inject the keyframe animation
 * into the document.
 */


var STYLESHEET_NAME = "__react-multi-select_style_inject__";

function findStylesheet() {
    var styleSheet = Array.from(document.styleSheets).find(function (stylesheet) {
        return stylesheet.title === STYLESHEET_NAME;
    });

    // upcast as CSSStyleSheet
    var cssStylesheet = styleSheet;

    return cssStylesheet;
}

function registerStylesheet(css) {
    try {
        if (findStylesheet()) {
            return;
        }

        var style = document.createElement("style");
        style.setAttribute("title", STYLESHEET_NAME);
        document.head && document.head.appendChild(style);

        var stylesheet = findStylesheet();
        if (!stylesheet) {
            // Someting bad happened.  Abort!
            return;
        }

        stylesheet.insertRule(css, 0);
    } catch (e) {}
}

var LoadingIndicator = function (_Component) {
    _inherits(LoadingIndicator, _Component);

    function LoadingIndicator() {
        _classCallCheck(this, LoadingIndicator);

        return _possibleConstructorReturn(this, (LoadingIndicator.__proto__ || Object.getPrototypeOf(LoadingIndicator)).apply(this, arguments));
    }

    _createClass(LoadingIndicator, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            // React styles don't support adding keyframe rules.  Create a
            // stylesheet and inject the keyframe animarion into it.
            registerStylesheet(keyFrames);
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement("span", {
                className: "loading-indicator",
                style: styles.loading
            });
        }
    }]);

    return LoadingIndicator;
}(_react.Component);

LoadingIndicator.propTypes = {};


var keyFrames = "\n@keyframes react-multi-select_loading-spin {\n    to {\n        transform: rotate(1turn);\n    }\n}\n";

var styles = {
    loading: {
        "animation": "react-multi-select_loading-spin 400ms infinite linear",
        "width": "16px",
        "height": "16px",
        boxSizing: "border-box",
        borderRadius: "50%",
        border: "2px solid #ccc",
        borderRightColor: "#333",
        display: "inline-block",
        position: "relative",
        verticalAlign: "middle"
    }
};

exports.default = LoadingIndicator;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _selectItem = __webpack_require__(1);

var _selectItem2 = _interopRequireDefault(_selectItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**
 * This component represents an unadorned list of SelectItem (s).
 */


var SelectList = function (_Component) {
    _inherits(SelectList, _Component);

    function SelectList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SelectList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectList.__proto__ || Object.getPrototypeOf(SelectList)).call.apply(_ref, [this].concat(args))), _this), _this.handleSelectionChanged = function (option, checked) {
            var _this$props = _this.props,
                selected = _this$props.selected,
                onSelectedChanged = _this$props.onSelectedChanged,
                disabled = _this$props.disabled;


            if (disabled) {
                true;
            }

            if (checked) {
                onSelectedChanged([].concat(_toConsumableArray(selected), [option.value]));
            } else {
                var _index = selected.indexOf(option.value);
                var removed = [].concat(_toConsumableArray(selected.slice(0, _index)), _toConsumableArray(selected.slice(_index + 1)));
                onSelectedChanged(removed);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SelectList, [{
        key: 'renderItems',
        value: function renderItems() {
            var _this2 = this;

            var _props = this.props,
                ItemRenderer = _props.ItemRenderer,
                options = _props.options,
                selected = _props.selected,
                focusIndex = _props.focusIndex,
                onClick = _props.onClick,
                disabled = _props.disabled;


            return options.map(function (o, i) {
                return _react2.default.createElement(_selectItem2.default, {
                    key: i,
                    focused: focusIndex === i,
                    option: o,
                    onSelectionChanged: function onSelectionChanged(c) {
                        return _this2.handleSelectionChanged(o, c);
                    },
                    checked: selected.includes(o.value),
                    onClick: function (_onClick) {
                        function onClick(_x) {
                            return _onClick.apply(this, arguments);
                        }

                        onClick.toString = function () {
                            return _onClick.toString();
                        };

                        return onClick;
                    }(function (e) {
                        return onClick(e, i);
                    }),
                    ItemRenderer: ItemRenderer,
                    disabled: disabled
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'ul',
                {
                    className: 'custom-dropdown__list'
                },
                this.renderItems()
            );
        }
    }]);

    return SelectList;
}(_react.Component);

exports.default = SelectList;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("fuzzy-match-utils");

/***/ })
/******/ ])));