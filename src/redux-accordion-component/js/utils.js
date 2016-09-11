export function checkUndef(item) {
  return (typeof item != 'undefined');
}

export function toggleSection(sectionId, activeSections, singleOpen) {
  let present = null,
      newActiveSections = activeSections;

  newActiveSections.map((section) => {
    if (section === sectionId) present = true;
  });

  if(!singleOpen) {
    if(present) {
      const pos = newActiveSections.indexOf(sectionId);
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
