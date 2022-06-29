import {
    ADD_CART,
    DECREAMENT,
    DELETE_CART,
    SET_MAIN_ITEMS,
    USER_DIS,
    SET_TOTAL,
} from "./constant";

export const fetchingApi = (payload) => {
    // console.log('fetchingApi', payload)

    return {
        type: SET_TOTAL,
        categories: payload,
    };
}
export const dispatchUser = (payload) => {
    console.log('dispatchUser', payload)

    return {
        type: USER_DIS,
        payload:payload,
    };
};

export const filterMainData = (payload) => {
    // console.log('filterMainData', payload)

    return {
        type: SET_MAIN_ITEMS,
        menu_items: payload,
    };
};

export const decreament = (payload) => {
    // console.log('decreament', payload)

    return {
        type: DECREAMENT,
        decreasedMenuItem: payload,
    };
};

export const deleteItemCart = (payload) => {
    // console.log('deleteItemCart', payload)

    return {
        type: DELETE_CART,
        deletedMenuItem: payload,
    };
};

export const addToCart = (payload) => {
    // console.log('addToCart', payload)

    return {
        type: ADD_CART,
        addCartItem: payload,
    };
    // const _cart = [...cart]
    // const existing = _cart.find(i => i._id === item._id)
    // if (existing) {
    //     dispatch({
    //         type: actionType.SET_QTY,
    //         qty: qty + 1
    //     })
    // } else {
    //     _cart.push(item)
    // }
    // dispatch({
    //     type: actionType.SET_CART,
    //     cart: _cart
    // })
};


