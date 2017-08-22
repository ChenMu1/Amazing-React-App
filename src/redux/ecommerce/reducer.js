import { Map } from 'immutable';
import clone from 'clone';
import actions from './actions';
import fake from './fake';
import fakeinitdata from '../../containers/Ecommerce/cart/config';

var fakeData = fakeinitdata;

//console.log(fakeData);

if (fakeinitdata.productQuantity.length === 0) {
  fakeData = fake;
}
const initState = new Map({
  view: 'gridView',
  viewTopbarCart: false,
  ...fakeData,
});
export default function ecommerceReducer(state = initState, action) {
  switch (action.type) {
    case actions.CHANGE_VIEW:
      return state.set('view', action.view);
    case actions.VIEW_TOPBAR_CART:
      return state.set('viewTopbarCart', action.viewTopbarCart);
    case actions.CHANGE_QUANTITY:
      localStorage.setItem(
        'cartProductQuantity',
        JSON.stringify(action.productQuantity),
      );
      return state.set('productQuantity', action.productQuantity);
    case actions.ADD_TO_CART:
      localStorage.setItem(
        'cartProductQuantity',
        JSON.stringify(action.productQuantity),
      );
      localStorage.setItem('cartProducts', JSON.stringify(action.products));
      return state
        .set('products', clone(action.products))
        .set('productQuantity', clone(action.productQuantity));
    default:
      return state;
  }
}
