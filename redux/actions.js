/* === Consts === */
export const REDUX_ACCORDION_SET_SECTION = 'REDUX_ACCORDION_SET_SECTION';
export const REDUX_ACCORDION_SETTINGS = 'REDUX_ACCORDION_SETTINGS';
export const REDUX_ACCORDION_SET_SECTIONS = 'REDUX_ACCORDION_SET_SECTIONS';
export const REDUX_ACCORDION_CREATE = 'REDUX_ACCORDION_CREATE';

/* --- Actions --- */
export function accordionSetActiveSection(uniqId, sectionKey) {
  return {
    type: 'REDUX_ACCORDION_SET_SECTION',
    payload: {
      uniqId: uniqId,
      section: sectionKey
    }
  }
}
export function accordionSetActiveSections(sections) {
  return {
    type: 'REDUX_ACCORDION_SET_SECTIONS',
    payload: sections
  }
}
export function accordionSetSettings(settings) {
  return {
    type: 'REDUX_ACCORDION_SETTINGS',
    payload: settings
  }
}
export function accordionCreate(settings) {
  return {
    type: 'REDUX_ACCORDION_CREATE',
    payload: settings
  }
}
