import { Map } from 'immutable';

const appActions = {
  COLLPSE_CHANGE: 'COLLPSE_CHANGE',
  COLLPSE_OPEN_DRAWER: 'COLLPSE_OPEN_DRAWER',
  CHANGE_OPEN_KEYS: 'CHANGE_OPEN_KEYS',
  TOGGLE_ALL: 'TOGGLE_ALL',
  CHANGE_CURRENT: 'CHANGE_CURRENT'
};
function getView(width) {
  let newView = 'MobileView';
  if (width > 1220) {
    newView = 'DesktopView';
  } else if (width > 767) {
    newView = 'TabView';
  }
  return newView;
}

const initState = new Map({
  collapsed: window.innerWidth > 1220 ? false : true,
  view: getView(window.innerWidth),
  height: window.innerHeight,
  openDrawer: false,
  openKeys: [],
  current: '1'
});
export default function appReducer(state = initState, action) {
  switch (action.type) {
    case appActions.COLLPSE_CHANGE:
      return state.set('collapsed', !state.get('collapsed'));
    case appActions.COLLPSE_OPEN_DRAWER:
      return state.set('openDrawer', !state.get('openDrawer'));
    case appActions.TOGGLE_ALL:
      if (state.get('view') !== action.view || action.height !== state.height) {
        const height = action.height ? action.height : state.height;
        return state
          .set('collapsed', action.collapsed)
          .set('view', action.view)
          .set('height', height);
      }
      break;
    case appActions.CHANGE_OPEN_KEYS:
      return state.set('openKeys', action.openKeys);
    case appActions.CHANGE_CURRENT:
      return state.set('current', action.current);
    default:
      return state;
  }
  return state;
}

export function toggleCollapsed(windowSize) {
  return {
    type: appActions.COLLPSE_CHANGE
  };
}
export function toggleAll(width, height) {
  const view = getView(width);
  const collapsed = view !== 'DesktopView';
  return {
    type: appActions.TOGGLE_ALL,
    collapsed,
    view,
    height
  };
}
export function toggleOpenDrawer() {
  return {
    type: appActions.COLLPSE_OPEN_DRAWER
  };
}
export function changeOpenKeys(openKeys) {
  return {
    type: appActions.CHANGE_OPEN_KEYS,
    openKeys
  };
}
export function changeCurrent(current) {
  return {
    type: appActions.CHANGE_CURRENT,
    current
  };
}
