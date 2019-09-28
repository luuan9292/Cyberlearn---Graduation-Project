import React, { Component } from 'react'

import { connect } from 'react-redux';
import Cart from '../components/Cart/Cart';
import { deleteCart } from '../store/actions';
import CartItem from '../components/Cart/CartItem';

class CartContainer extends Component {
    render() {

        let { cart } = this.props;

        return (

            <Cart cart={cart}>

                {this.showCartItem(cart)}

            </Cart>

        )
    }

    /**----------------------------------------
     * Function: Mapping Viewing Item
     * Component: Viewing
     ----------------------------------------**/
    showCartItem = (cart) => {
        let result = null;
        if (cart.length > 0) {
            result = cart.map((course, index) => {
                return <CartItem key={index} course={course}
                    handleDeleteCart={this.props.handleDeleteCart}
                />
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

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleDeleteCart: course => {
            dispatch(deleteCart(course));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);