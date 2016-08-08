import React, { PropTypes } from 'react';
import Component from 'react-pure-render/component';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import {Accordion, AccordionSection} from '../';

import './testPage.scss';

export default class Page extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section className="redux-accordion-test-page">
        <h1>React Accordion Examples:</h1>
        <p className="sub-title">Single Open, open by default: </p>
          <Accordion
            {...this.props}
            singleOpen={true}
            openByDefault={true}
            uniqId={'testAccordion1'}>
            <AccordionSection
             title="Section 1"
             openByDefault={true}>
             <ul>
               <li>item 1 (li)</li>
               <li>item 2 (li)</li>
               <li>item 3 (li)</li>
               <li>item 4 (li)</li>
             </ul>
            </AccordionSection>
            <AccordionSection
             title="Section 2"
             openByDefault={true}>
             <ul>
               <li>item 1 (li)</li>
               <li>item 2 (li)</li>
               <li>item 3 (li)</li>
               <li>item 4 (li)</li>
             </ul>
            </AccordionSection>
            <AccordionSection
             title="Section 3"
             openByDefault={true}>
             <ul>
               <li>item 1 (li)</li>
               <li>item 2 (li)</li>
               <li>item 3 (li)</li>
               <li>item 4 (li)</li>
             </ul>
            </AccordionSection>
        </Accordion>
        <br/><br/><br/>
        <p className="sub-title">Multiple Open, second section open by default</p>
        <Accordion
          {...this.props}
          singleOpen={false}
          openByDefault={false}
          uniqId={'testAccordion2'}>
          <AccordionSection
           title="Section 1">
             <p>item 1 (paragraph)</p>
             <p>item 2 (paragraph)</p>
             <p>item 3 (paragraph)</p>
             <p>item 4 (paragraph)</p>
          </AccordionSection>
          <AccordionSection
           title="Section 2" openByDefault={true}>
             <p>item 1 (paragraph)</p>
             <p>item 2 (paragraph)</p>
             <p>item 3 (paragraph)</p>
             <p>item 4 (paragraph)</p>
          </AccordionSection>
          <AccordionSection
           title="Section 3">
            <p>hello</p>
              <p>item 1 (paragraph)</p>
              <p>item 2 (paragraph)</p>
              <p>item 3 (paragraph)</p>
              <p>item 4 (paragraph)</p>
          </AccordionSection>
          <AccordionSection
           title="Section 4">
             <p>item 1 (paragraph)</p>
             <p>item 2 (paragraph)</p>
             <p>item 3 (paragraph)</p>
             <p>item 4 (paragraph)</p>
          </AccordionSection>
        </Accordion>
        <br/><br/><br/>
        <p className="sub-title">Multiple Open, closed by default</p>
        <Accordion
          {...this.props}
          uniqId={'testAccordion3'}>
          <AccordionSection
           title="Section 1">
             <p>item 1 (paragraph)</p>
             <p>item 2 (paragraph)</p>
             <p>item 3 (paragraph)</p>
             <p>item 4 (paragraph)</p>
          </AccordionSection>
          <AccordionSection
           title="Section 2">
             <p>item 1 (paragraph)</p>
             <p>item 2 (paragraph)</p>
             <p>item 3 (paragraph)</p>
             <p>item 4 (paragraph)</p>
          </AccordionSection>
          <AccordionSection
           title="Section 3">
            <p>hello</p>
              <p>item 1 (paragraph)</p>
              <p>item 2 (paragraph)</p>
              <p>item 3 (paragraph)</p>
              <p>item 4 (paragraph)</p>
          </AccordionSection>
          <AccordionSection
           title="Section 4">
             <p>item 1 (paragraph)</p>
             <p>item 2 (paragraph)</p>
             <p>item 3 (paragraph)</p>
             <p>item 4 (paragraph)</p>
          </AccordionSection>
        </Accordion>
      </section>
    );
  }
}
