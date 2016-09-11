import React, { PropTypes, Children } from 'react';
import Component from 'react-addons-shallow-compare';
import className from 'classnames';
import * as Utils from './utils';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSection = this.toggleSection.bind(this);
    this.state = {
      singleOpen: this.props.singleOpen,
      openByDefault: this.props.openByDefault,
      activeSections: []
    };
  }

  toggleSection(sectionId) {
    const newActive = Utils.toggleSection(sectionId, this.state.activeSections, this.state.singleOpen);
    this.setState({activeSections: newActive});
  }

  componentWillMount() {
    const {singleOpen, openByDefault, uniqId, actions: {accordionCreate}, children} = this.props;
    const settings = {singleOpen: singleOpen, openByDefault: openByDefault, uniqId: uniqId, kids: children};
    const initialState_sections = Utils.setupAccordion(settings).activeSections;
    this.setState({activeSections: initialState_sections});
  }

  getChildrenWithProps() {
    const {
      children,
      uniqId,
      openByDefault,
      singleOpen} = this.props;


      const kids = React.Children.map(children, (child, i) => {
        const unqId = `acc-sec-${i}`;
        return React.cloneElement(child, {
          toggle: (acId) => this.toggleSection(acId),
          key: unqId,
          unq: unqId,
          active: (this.state.activeSections && this.state.activeSections.lastIndexOf(unqId) != -1)
        });
      });

      return kids;
  }

  render() {
    const {
      className: propClasses
    } = this.props;
    const childrenWithProps = this.getChildrenWithProps();
    const accordionClasses = className('react-accordion', propClasses)

    return(
      <div className={accordionClasses}>
        {childrenWithProps}
      </div>
    );
  }
}
