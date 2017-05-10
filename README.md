![Redux Accordion Header Image](https://raw.githubusercontent.com/rorykermack/redux-accordion/master/readme-header.jpg)

# Redux Accordion
Need an accordion for your React and/or Redux project? Look no further. You can have a single or multiple instances running at one.
Redux Accordion is a fully featured accordion component, built using [react/redux](https://github.com/reactjs/redux/) with ECMAScript 6. Simple to set up, simple to use and most importantly hopefully as simple as possible to maintain and build upon.

## Installation
```
npm install redux-accordion

```

## Example
```
<Accordion
  {...this.props}
  uniqId={'testAccordion'}>

  <AccordionSection
   title="Section 1">
   {*/ Content Goes Here /*}
  </AccordionSection>

  <AccordionSection
   title="Section 2">
   {*/ Content Goes Here /*}
  </AccordionSection>

</Accordion>
```


## Usage
Redux accordion uses a redux store to manage its state. However it also has the option to use local component state.

With the local component state option you can simply run ```npm install redux-accordion```, include Accordion & AccordionSection and your good to go. The second requires you to hook up the actions and reducers to your app.


## Sections:
### Accordion
```
<Accordion
  {...this.props}
  uniqId={'testAccordion'}
  singleOpen={true}>

  {*/ Content Goes Here /*}

</Accordion>
```
* You can set the uniqId if you want to apply an id to your accordion. This also specifies how this instance is referenced in the reducer (non-component version)
* You can set `singleOpen={true}` if you want to limit the accordion to only open a single section at a time
 <br/>

### AccordionSection
```
<AccordionSection
 title="Section 1">
 {*/ Content Goes Here /*}
</AccordionSection>
```
* The title dictates what is displayed on the accordion bar
* You can set `openByDefault={true}` if you want this section to be open by default <br/>



## Installation with redux actions & stores
* Clone git repo or run ```npm install redux-accordion``` <br/>
* Connect the actions and reducer into your app (node_modules/redux-accordion/redux)<br/>
* Include Accordion & AccordionSection.
* Done. Accordions for everyone :) <br/>


## Contributing
Everyone brings something awesome to the party so please contribute.
If you have any suggestions give a shout on twitter to [@reduxAccordion](https://twitter.com/@reduxAccordion) <br/>
1. Fork it! <br/>
2. Create your feature branch: `git checkout -b my-new-feature` <br/>
3. Commit your changes: `git commit -am 'Add some feature'` <br/>
4. Push to the branch: `git push origin my-new-feature` <br/>
5. Submit a pull request :D <br/>

## Credits
Created and maintained by [@rorykermack](https://twitter.com/@rorykermack)
## License
[WTFPL](http://www.wtfpl.net/) (100% Open Source)
