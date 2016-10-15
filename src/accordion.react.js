import React, { PropTypes } from 'react';
import className from 'classnames';
import * as Utils from './utils';

export default class Accordion extends React.Component {

  // static propTypes = {
  //   openByDefault: PropTypes.bool,
  //   singleOpen: PropTypes.bool,
  //   uniqId: PropTypes.string,
  //   className: PropTypes.string,
  // }

  constructor(props) {
    super(props);
    this.toggleSection = this.toggleSection.bind(this);
    this.state = {
      singleOpen: this.props.singleOpen,
      openByDefault: this.props.openByDefault,
      activeSections: [],
    };
  }

  componentWillMount() {
    const {
      singleOpen,
      openByDefault,
      uniqId,
      children } = this.props;

    const settings = {
      singleOpen,
      openByDefault,
      uniqId,
      kids: children
    };

    const initialStateSections = Utils.setupAccordion(settings).activeSections;
    this.setState({ activeSections: initialStateSections });
  }

  getChildrenWithProps() {
    const {
      children,
    } = this.props;


    const kids = React.Children.map(children, (child, i) => {
      const unqId = `acc-sec-${i}`;
      return React.cloneElement(child, {
        toggle: (acId) => this.toggleSection(acId),
        key: unqId,
        unq: unqId,
        active: (this.state.activeSections && this.state.activeSections.lastIndexOf(unqId) !== -1)
      });
    });

    return kids;
  }

  toggleSection(sectionId) {
    const newActive = Utils.toggleSection(
      sectionId,
      this.state.activeSections,
      this.state.singleOpen);

    this.setState({
      activeSections: newActive
    });
  }


  render() {
    const {
      className: propClasses,
      uniqId: propId
    } = this.props;

    const childrenWithProps = this.getChildrenWithProps();
    const accordionClasses = className('react-accordion', propClasses);
    const uniqId = propId || '';

    return(
      <div className={accordionClasses} id={uniqId}>
        {childrenWithProps}
      </div>
    );
  }
}
