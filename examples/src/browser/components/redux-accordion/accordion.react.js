import React, { PropTypes, Children } from 'react';
import Component from 'react-addons-shallow-compare';
import className from 'classnames';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSection = this.toggleSection.bind(this);
  }

  componentWillMount() {
    const {singleOpen, openByDefault, uniqId, actions: {accordionCreate}, children} = this.props;
    const settings = {singleOpen: singleOpen, openByDefault: openByDefault, uniqId: uniqId, kids: children};
    accordionCreate(settings);
  }

  toggleSection(sectionId) {
    const {actions: {accordionSetActiveSection}, uniqId} = this.props;
    accordionSetActiveSection(uniqId, sectionId);
  }

  getChildrenWithProps() {
    const {
      children,
      uniqId,
      reduxAccordion: {
        accordions
      }} = this.props;
      const accordionsObject = accordions.toJS()[uniqId];

      const kids = React.Children.map(children, (child, i) => {
        const unqId = `acc-sec-${i}`;
        return React.cloneElement(child, {
          toggle: (acId) => this.toggleSection(acId),
          key: unqId,
          unq: unqId,
          active: (accordionsObject && accordionsObject.activeSections.lastIndexOf(unqId) != -1)
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
