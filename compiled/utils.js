'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkUndef = checkUndef;
exports.toggleSection = toggleSection;
exports.setupAccordion = setupAccordion;
function checkUndef(item) {
  return typeof item !== 'undefined';
}

function toggleSection(sectionId, activeSections, singleOpen) {
  var present = null;
  var newActiveSections = activeSections;

  newActiveSections.map(function (section) {
    if (section === sectionId) present = true;
    return true;
  });

  if (!singleOpen) {
    if (present) {
      var pos = newActiveSections.indexOf(sectionId);
      newActiveSections.splice(pos, 1);
    } else {
      newActiveSections.push(sectionId);
    }
  } else {
    newActiveSections = [sectionId];
  }

  return newActiveSections;
}

function setupAccordion(info) {
  var singleOpen = checkUndef(info.singleOpen) ? info.singleOpen : false;
  var activeSections = [];
  var singleChild = typeof info.kids.length === 'undefined';

  if (!singleChild) {
    info.kids.forEach(function (child, i) {
      var openByDefault = child.props.openByDefault;

      if (singleOpen && activeSections.length === 0 && openByDefault) {
        activeSections.push('acc-sec-' + i);
      }
      if (!singleOpen && openByDefault) {
        activeSections.push('acc-sec-' + i);
      }
    });
  }

  return {
    activeSections: activeSections
  };
}