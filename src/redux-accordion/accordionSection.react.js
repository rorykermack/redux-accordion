import React, { PropTypes } from 'react';
import Component from 'react-addons-shallow-compare';
import className from 'classnames';

// only use this if you have it configured in webpack to load css modules
import './accordion.scss';

export default class AccordionSection extends React.Component {

  constructor(props) {
    super(props);
    this.toggleSection = this.toggleSection.bind(this);
  }

  componentWillMount() {
    this.setState({
      sectionHeight: 0
    });
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.active !== this.props.active) {
      this.toggleOpen(nextProps.active);
    }
  }

  componentDidMount() {
    const {active} = this.props;
    const {accordionContent} = this.refs;
    if (active) this.setState({sectionHeight: accordionContent.scrollHeight});
  }

  toggleOpen(active) {
    const {accordionContent} = this.refs;
    const height = ( active ) ? `${accordionContent.scrollHeight}px` : 0;
    this.setState({sectionHeight: height});
  }

  toggleSection() {
    const {unq, toggle} = this.props;
    toggle(unq);
  }

  getHeight() {
    const {active} = this.props;
    const {accordionContent} = this.refs;
    return (active) ? accordionContent.scrollHeight : 0;
  }


  render() {
    const {
      title,
      children,
      active,
      className: propClasses
    } = this.props;

    const contentStyles = {
      height: this.state.sectionHeight
    };

    const triggerClasses = className('accordion-trigger accordion-title', {
      active
    });

    const contentClasses = className('accordion-content accordion-inner', {
      active
    });

    return(
      <div className="accordion-section">
        <div className={triggerClasses} onClick={this.toggleSection}>
          {title}
        </div>
        <div className={contentClasses} style={contentStyles} ref='accordionContent'>
          <div className="inner-content">
            {children}
          </div>
        </div>
      </div>
    );
  }
}
