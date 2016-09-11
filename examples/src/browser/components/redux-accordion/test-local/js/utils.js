export function checkUndef(item) {
  return (typeof item != 'undefined');
}

export function isset(item) {
  console.log(item);

  let set = false;
  if(typeof item !== 'undefined') {
    set = true;
  }
  if (item === null) {
    set = false;
  }
  if(!item) {
    set = false;
  }
  if(item != void 0) {
    set = false;
  }
  if(item) {
    set = true;
  }
  // return set;

  if (typeof item !== 'undefined' && item) {
    set = true;
  } else if (item === null || !item && item != void 0) {
    set = false;
  }
  return set;

  // return (typeof item != 'undefined' && item && item == null && window[item] != void 0 && item != void 0);
}


export function toggleSection(sectionId, activeSections, singleOpen) {
  let present = null;
  console.log('isset:', isset(present));

  let newActiveSections = activeSections;
  newActiveSections.map((section) => {
    if (section === sectionId) present = true;
  });

  if(!singleOpen) {
    if(present) {
      // console.log('a', newActiveSections.find(function(item) {
      //   return item === sectionId;
      // }))
      console.log()
      var pos = newActiveSections.indexOf(sectionId);
      console.log('pos', pos, activeSections);

      newActiveSections.splice(pos, 1);

    } else {
      newActiveSections.push(sectionId);
    }
  } else {
    newActiveSections = [sectionId];
  }

  return newActiveSections;
}

export function setupAccordion(info) {
  const singleOpen = (checkUndef(info.singleOpen)) ? info.singleOpen : false,
        allOpenByDefault = (checkUndef(info.openByDefault)) ? info.openByDefault : false,
        uniqId = (checkUndef(info.uniqId)) ? info.uniqId : false,
        activeSections = [];

  info.kids.forEach( (child, i) => {
    const {openByDefault} = child.props;
    if (allOpenByDefault && !singleOpen) {
      activeSections.push(`acc-sec-${i}`);
    } else if (openByDefault && !singleOpen) {
      activeSections.push(`acc-sec-${i}`);
    } else if (singleOpen && activeSections.length === 0) {
      activeSections.push(`acc-sec-${i}`);
    }
  });

  return {
    singleOpen: true,
    openByDefault: allOpenByDefault,
    activeSections: activeSections
  }
}
