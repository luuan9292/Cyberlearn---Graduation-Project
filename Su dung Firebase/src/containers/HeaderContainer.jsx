import React, { Component } from 'react'
import { connect } from 'react-redux';
import Header from '../components/Header/Header';
import HeaderCartItem from '../components/Header/HeaderCartItem';
import { signoutRequest } from '../store/actions/users';

class HeaderContainer extends Component {
    render() {

        let { header, cart, signoutRequest, currentUser } = this.props;
        return (
            <Header header={header} cart={cart} signoutRequest={signoutRequest} currentUser={currentUser}>

                {this.showCartItem(cart)}

            </Header>
        )
    }

    /**----------------------------------------
     * Function: Mapping Cart Item
     * Component: Header
     ----------------------------------------**/
    showCartItem = (cart) => {
        let result = null;
        if (cart && cart.length > 0) {
            result = cart.map((course, index) => {
                return <HeaderCartItem key={index} course={course}
                />
            });
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        signoutRequest: () => {
            dispatch(signoutRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
