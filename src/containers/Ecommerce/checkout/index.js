import React from 'react';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import Box from '../../../components/utility/box';
import BillingForm from './billing-form';
import OrderInfo from './order-info';

class CartPage extends React.Component {
  render() {
    return (
      <LayoutWrapper className="isoCheckoutPage">
        <Box>
          <div className="isoBillingAddressWrapper">
            <h3 className="isoSectionTitle">Billing details</h3>
            <div className="isoBillingSection">
              <BillingForm />
              <OrderInfo />
            </div>
          </div>
        </Box>
      </LayoutWrapper>
    );
  }
}
export default CartPage;
