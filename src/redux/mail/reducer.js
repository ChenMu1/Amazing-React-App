import { Map } from 'immutable';
import allMails from '../../containers/Mail/fakeData';
import actions from './actions';

const initState = new Map({
  allMails,
  tag: undefined,
  selectedMail: -1,
  filterAttr: { bucket: 'Inbox' },
  composeMail: false,
  replyMail: false,
  searchString: ''
});

export default function mailReducer(state = initState, action) {
  switch (action.type) {
    case actions.FILTER_ATTRIBUTE:
      return state
        .set('filterAttr', { ...action.filterAttr })
        .set('selectedMail', -1)
        .set('composeMail', false)
        .set('replyMail', false);
    case actions.SELECTED_MAIL:
      return state
        .set('selectedMail', action.selectedMail)
        .set('allMails', action.allMails)
        .set('replyMail', false);
    case actions.COMPOSE_MAIL:
      return state
        .set('composeMail', action.composeMail)
        .set('replyMail', false);
    case actions.REPLY_MAIL:
      return state.set('replyMail', action.replyMail);
    case actions.SEARCH_STRING:
      return state.set('searchString', action.searchString);
    default:
      return state;
  }
}
