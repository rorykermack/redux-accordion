![Redux Accordion Logo](/logo.png?raw=true)

# Redux Accordion
Need an accordion for your Redux project? Look no further. You can have a single or multiple instances running at one.
Redux Accordion is a fully featured accordion component, built using [react/redux](https://github.com/reactjs/redux/) with ECMAScript 6. Simple to set up, simple to use and most importantly hopefully as simple as possible to maintain and build upon.

## Installation
Note: NPM package is in the works but for now you have to follow the following:<br/>
* Clone / Download this repo. <br/>
* Move /src/redux-accordion into your project. <br/>
* Connect the actions and reducer into your app. <br/>
* Add the main.css to your styles <br/>
* Done. Accordions for everyone :) <br/>

## Usage
Redux accordion uses a redux store to manage its state, because it's a much more maintainable way to handle your state objects. (and its great)

!important: make sure you connect your actions and reducer!

## Setup: <br/>
### 1) Import or require /index.js (or just the folder) <br/>
### 2) Add an accordion section and pass the props.<br/>
```
<Accordion
  {...this.props}
  uniqId={'testAccordion'}>

  {*/ Content Goes Here /*}

</Accordion>
```
* The uniqId specifies how this instance is referenced in the
* You can set `singleOpen={true}` if you want to limit the accordion to only open a single section at a time
* You can set `openByDefault={true}` if you want to accordion to be open by default <br/>

### 3) Add your sections... <br/>

```
<AccordionSection
 title="Section 1">
 {*/ Content Goes Here /*}
</AccordionSection>
```
* The title dictates what is displayed on the accordion bar
* You can set `openByDefault={true}` if you want this section to be open by default <br/>

### 4) Add your content. <br/>
### 5) Serve compiled and enjoy ;) <br/>

## Contributing
It doesn't matter if you're a veteran or not. Everyone brings something awesome to the party so please contribute.
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
