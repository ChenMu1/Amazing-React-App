import { Map } from 'immutable';
import events from '../../containers/Calendar/demoEvents';

const initState = new Map({
  events,
  view: 'month'
});

export default function calendsrReducer(state = initState, action) {
  switch (action.type) {
    case 'VIEW':
      return state.set('view', action.view);
    case 'EVENTS':
      return state.set('evetns', action.evetns);
    default:
      return state;
  }
}
