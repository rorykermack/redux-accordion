'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require('./utils');

var Utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Accordion = function (_React$Component) {
  _inherits(Accordion, _React$Component);

  function Accordion(props) {
    _classCallCheck(this, Accordion);

    var _this = _possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).call(this, props));

    _this.toggleSection = _this.toggleSection.bind(_this);
    _this.state = {
      singleOpen: _this.props.singleOpen,
      openByDefault: _this.props.openByDefault,
      activeSections: []
    };
    return _this;
  }

  _createClass(Accordion, [{
    key: 'toggleSection',
    value: function toggleSection(sectionId) {
      var newActive = Utils.toggleSection(sectionId, this.state.activeSections, this.state.singleOpen);
      this.setState({ activeSections: newActive });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          singleOpen = _props.singleOpen,
          openByDefault = _props.openByDefault,
          uniqId = _props.uniqId,
          children = _props.children;


      var settings = { singleOpen: singleOpen, openByDefault: openByDefault, uniqId: uniqId, kids: children };
      var initialState_sections = Utils.setupAccordion(settings).activeSections;
      this.setState({ activeSections: initialState_sections });
    }
  }, {
    key: 'getChildrenWithProps',
    value: function getChildrenWithProps() {
      var _this2 = this;

      var _props2 = this.props,
          children = _props2.children,
          uniqId = _props2.uniqId,
          openByDefault = _props2.openByDefault,
          singleOpen = _props2.singleOpen;


      var kids = _react2.default.Children.map(children, function (child, i) {
        var unqId = 'acc-sec-' + i;
        return _react2.default.cloneElement(child, {
          toggle: function toggle(acId) {
            return _this2.toggleSection(acId);
          },
          key: unqId,
          unq: unqId,
          active: _this2.state.activeSections && _this2.state.activeSections.lastIndexOf(unqId) != -1
        });
      });

      return kids;
    }
  }, {
    key: 'render',
    value: function render() {
      var propClasses = this.props.className;

      var childrenWithProps = this.getChildrenWithProps();
      var accordionClasses = (0, _classnames2.default)('react-accordion', propClasses);

      return _react2.default.createElement(
        'div',
        { className: accordionClasses },
        childrenWithProps
      );
    }
  }]);

  return Accordion;
}(_react2.default.Component);

exports.default = Accordion;