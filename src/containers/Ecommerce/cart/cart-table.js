import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from '../../../components/uielements/input';
import Button from '../../../components/uielements/button';
import ecommerceActions from '../../../redux/ecommerce/actions';
import SingleCart from '../../../components/cart/singleCart.js';
const { changeProductQuantity } = ecommerceActions;

let totalPrice = 0;
class CartTable extends Component {
  constructor(props) {
    super(props);
    this.changeQuantity = this.changeQuantity.bind(this);
    this.cancelQuantity = this.cancelQuantity.bind(this);
  }
  renderItems() {
    const { productQuantity, products } = this.props;
    totalPrice = 0;
    if (!productQuantity || productQuantity.length === 0) {
      return <tr className="isoNoItemMsg">No item found</tr>;
    }
    return productQuantity.map(product => {
      totalPrice += product.quantity * products[product.objectID].price;
      return (
        <SingleCart
          key={product.objectID}
          quantity={product.quantity}
          changeQuantity={this.changeQuantity}
          cancelQuantity={this.cancelQuantity}
          {...products[product.objectID]}
        />
      );
    });
  }
  changeQuantity(objectID, quantity) {
    const { productQuantity } = this.props;
    const newProductQuantity = [];
    productQuantity.forEach(product => {
      if (product.objectID !== objectID) {
        newProductQuantity.push(product);
      } else {
        newProductQuantity.push({
          objectID,
          quantity
        });
      }
    });
    this.props.changeProductQuantity(newProductQuantity);
  }
  cancelQuantity(objectID) {
    const { productQuantity } = this.props;
    const newProductQuantity = [];
    productQuantity.forEach(product => {
      if (product.objectID !== objectID) {
        newProductQuantity.push(product);
      }
    });
    this.props.changeProductQuantity(newProductQuantity);
  }
  render() {
    const { style } = this.props;
    const classname = style != null ? style : '';
    return (
      <div className={`isoCartTable ${classname}`}>
        <table>
          <thead>
            <tr>
              <th className="isoItemRemove" />
              <th className="isoItemImage" />
              <th className="isoItemName">Name</th>
              <th className="isoItemPrice">Price</th>
              <th className="isoItemQuantity">Quantity</th>
              <th className="isoItemPriceTotal">Total</th>
            </tr>
          </thead>

          <tbody>
            {this.renderItems()}
            <tr className="isoTotalBill">
              <td className="isoItemRemove" />
              <td className="isoItemImage" />
              <td className="isoItemName" />
              <td className="isoItemPrice" />
              <td className="isoItemQuantity">Total</td>
              <td className="isoItemPriceTotal">
                ${totalPrice.toFixed(2)}
              </td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td style={{ width: '100%', paddingRight: 25 }}>
                <Input size="large" placeholder="Discount Coupon" />
              </td>
              <td style={{ paddingRight: 25 }}>
                <Button>Apply</Button>
              </td>
              <td>
                <Button type="primary">
                  <Link to={'/dashboard/checkout'}>Checkout</Link>
                </Button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { productQuantity, products } = state.Ecommerce.toJS();
  return { productQuantity, products };
}
export default connect(mapStateToProps, { changeProductQuantity })(CartTable);
