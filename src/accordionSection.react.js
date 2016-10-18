import React, { PropTypes } from 'react';
import className from 'classnames';


export default class AccordionSection extends React.Component {

  // static propTypes = {
  //   active: PropTypes.bool,
  //   unq: PropTypes.string,
  //   toggle: PropTypes.function,
  //   title: PropTypes.string,
  //   className: PropTypes.string
  // }

  constructor(props) {
    super(props);
    this.toggleSection = this.toggleSection.bind(this);
    this.state = {
      sectionHeight: 0,
    }
  }

  componentDidMount() {
    const { active } = this.props;
    if (active) this.setState({sectionHeight: this.accordionContent.scrollHeight});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.active !== this.props.active) {
      this.toggleOpen(nextProps.active);
    }
  }

  getHeight() {
    const { active } = this.props;
    return (active) ? this.accordionContent.scrollHeight : 0;
  }

  toggleSection() {
    const {
      unq,
      toggle
    } = this.props;
    toggle(unq);
  }

  toggleOpen(active) {
    const height = (active) ? `${this.accordionContent.scrollHeight}px` : 0;
    this.setState({
      sectionHeight: height,
    });
  }


  render() {
    const {
      title,
      children,
      active,
      className: propClasses
    } = this.props;

    const contentStyles = {
      height: this.state.sectionHeight,
      overflow: 'hidden',
      transition: 'height .25s ease',
      fontFamily: 'sans-serif',
      padding: 0,
      background: '#bdc3c7'
    };

    const triggerStyles = {
      background: '#ecf0f1',
      padding: '5px',
      fontFamily: 'sans-serif',
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      cursor: 'pointer',
      transition: 'background .25s ease'
    }

    const innerContentStyles = {
      padding: '5px'
    }

    const triggerClasses = className('accordion-trigger accordion-title', {
      active
    });

    const contentClasses = className('accordion-content accordion-inner', {
      active
    });



    return(
      <div className="accordion-section">
        <div className={triggerClasses} style={triggerStyles} onClick={() => this.toggleSection()}>
          {title}
        </div>
        <div className={contentClasses} style={contentStyles} ref={(ref) => this.accordionContent = ref}>
          <div className="inner-content" style={innerContentStyles}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}
