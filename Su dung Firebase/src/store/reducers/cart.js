import * as type from '../../constants/actionType';


let data = JSON.parse(localStorage.getItem('cart'));

let initialState = data ? data : [];

/**----------------------------------------
     * Function: Tim vi tri trong cart reducer
     * Component: cart
----------------------------------------**/
let findIndex = (cart, id) => {
    let index = -1;

    for (let i = 0; i < cart.length; i++) {

        if (cart[i].maKhoaHoc === id) {
            return index = i;
        }
    }

    return index;
}

const cart = (state = initialState, action) => {
    let newArr = [...state]
    let index = -1;
    switch (action.type) {
        case type.ADD_TO_CART:
            let course = action.payload;
            index = findIndex(state, course.maKhoaHoc);

            if (index !== -1) {
                return newArr
            }

            newArr = [...newArr, course];

            localStorage.setItem("cart", JSON.stringify(newArr));
            return newArr;
        case type.DELETE_CART:
            let maKhoaHoc = action.payload;
            index = findIndex(state, maKhoaHoc);

            if (index === -1) {
                return newArr
            }
            
            newArr = newArr.filter(course => course.maKhoaHoc !== maKhoaHoc)

            localStorage.setItem("cart", JSON.stringify(newArr));
            return newArr;

        default: return state;
    }
}

export default cart;