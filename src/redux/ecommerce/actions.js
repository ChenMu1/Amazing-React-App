const ecommerceActions = {
  CHANGE_VIEW: 'CHANGE_VIEW',
  CHANGE_QUANTITY: 'CHANGE_QUANTITY',
  ADD_TO_CART: 'ADD_TO_CART',
  VIEW_TOPBAR_CART: 'VIEW_TOPBAR_CART',
  changeView: view => {
    return {
      type: ecommerceActions.CHANGE_VIEW,
      view
    };
  },
  changeViewTopbarCart: viewTopbarCart => {
    return {
      type: ecommerceActions.VIEW_TOPBAR_CART,
      viewTopbarCart
    };
  },
  changeProductQuantity: productQuantity => {
    return {
      type: ecommerceActions.CHANGE_QUANTITY,
      productQuantity
    };
  },
  addToCart: product => {
    return (dispatch, getState) => {
      const { products, productQuantity } = getState().Ecommerce.toJS();
      const objectID = product.objectID;
      productQuantity.push({ objectID, quantity: 1 });
      products[objectID] = product;
      dispatch({
        type: ecommerceActions.ADD_TO_CART,
        products,
        productQuantity
      });
    };
  }
};
export default ecommerceActions;
