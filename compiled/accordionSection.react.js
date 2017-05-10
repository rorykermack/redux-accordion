'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AccordionSection = function (_React$Component) {
  _inherits(AccordionSection, _React$Component);

  // static propTypes = {
  //   active: PropTypes.bool,
  //   unq: PropTypes.string,
  //   toggle: PropTypes.function,
  //   title: PropTypes.string,
  //   className: PropTypes.string
  // }

  function AccordionSection(props) {
    _classCallCheck(this, AccordionSection);

    var _this = _possibleConstructorReturn(this, (AccordionSection.__proto__ || Object.getPrototypeOf(AccordionSection)).call(this, props));

    _this.toggleSection = _this.toggleSection.bind(_this);
    _this.state = {
      sectionHeight: 0
    };
    return _this;
  }

  _createClass(AccordionSection, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var active = this.props.active;

      if (active) this.setState({ sectionHeight: this.accordionContent.scrollHeight });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.active !== this.props.active) {
        this.toggleOpen(nextProps.active);
      }
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      var active = this.props.active;

      return active ? this.accordionContent.scrollHeight : 0;
    }
  }, {
    key: 'toggleSection',
    value: function toggleSection() {
      var _props = this.props,
          unq = _props.unq,
          toggle = _props.toggle;

      toggle(unq);
    }
  }, {
    key: 'toggleOpen',
    value: function toggleOpen(active) {
      var height = active ? this.accordionContent.scrollHeight + 'px' : 0;
      this.setState({
        sectionHeight: height
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          title = _props2.title,
          children = _props2.children,
          active = _props2.active,
          propClasses = _props2.className;


      var contentStyles = {
        height: this.state.sectionHeight,
        overflow: 'hidden',
        transition: 'height .25s ease',
        fontFamily: 'sans-serif',
        padding: 0,
        background: '#bdc3c7'
      };

      var triggerStyles = {
        background: '#ecf0f1',
        padding: '5px',
        fontFamily: 'sans-serif',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        cursor: 'pointer',
        transition: 'background .25s ease'
      };

      var innerContentStyles = {
        padding: '5px'
      };

      var triggerClasses = (0, _classnames2.default)('accordion-trigger accordion-title', {
        active: active
      });

      var contentClasses = (0, _classnames2.default)('accordion-content accordion-inner', {
        active: active
      });

      return _react2.default.createElement(
        'div',
        { className: 'accordion-section' },
        _react2.default.createElement(
          'div',
          { className: triggerClasses, style: triggerStyles, onClick: function onClick() {
              return _this2.toggleSection();
            } },
          title
        ),
        _react2.default.createElement(
          'div',
          { className: contentClasses, style: contentStyles, ref: function ref(_ref) {
              return _this2.accordionContent = _ref;
            } },
          _react2.default.createElement(
            'div',
            { className: 'inner-content', style: innerContentStyles },
            children
          )
        )
      );
    }
  }]);

  return AccordionSection;
}(_react2.default.Component);

exports.default = AccordionSection;