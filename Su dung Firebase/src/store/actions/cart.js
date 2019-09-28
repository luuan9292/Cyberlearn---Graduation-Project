import * as type from '../../constants/actionType';

export const addToCart = course => {
    return {
        type: type.ADD_TO_CART,
        payload: course
    }
}

export const deleteCart = (maKhoaHoc) => {
    return {
        type: type.DELETE_CART,
        payload: maKhoaHoc
    }
}