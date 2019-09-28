import React, { Component } from 'react';
import { connect } from 'react-redux';

import Checkout from '../components/Checkout/Checkout';
import CheckoutItem from '../components/Checkout/CheckoutItem';

class CheckoutContainer extends Component {
    render() {

        let { cart } = this.props;

        return (
            <Checkout cart={cart}>

                {this.showCheckoutItem(cart)}

            </Checkout>
        )
    }

    /**----------------------------------------
     * Function: Mapping Viewing Item
     * Component: Viewing
     ----------------------------------------**/
    showCheckoutItem = (cart) => {
        let result = null;
        if (cart.length > 0) {
            result = cart.map((course, index) => {
                return <CheckoutItem key={index} course={course} />
            });
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(CheckoutContainer);

