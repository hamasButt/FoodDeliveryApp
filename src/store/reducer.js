import {
    ADD_CART,
    DECREAMENT,
    DELETE_CART,
    SET_MAIN_ITEMS,
    SET_TOTAL, USER_DIS,
} from "./constant";

export const initialState = {
    cart: [],
    total: [],
    mainDataItem: [],
    user: []
};

const reducer = (state, action) => {
    const _cart = [...state.cart];

    switch (action.type) {
        case SET_TOTAL:
            return {
                ...state,
                total: action.categories,
            };

        case SET_MAIN_ITEMS:
            return {
                ...state,
                mainDataItem: action.menu_items,
            };

        case ADD_CART:
            // console.log('addCartItem', action.addCartItem)
            const isCartExist = _cart.find((i) => i._id === action.addCartItem._id);
            if (isCartExist) {
                return {
                    ...state,
                    cart: state.cart.map((item) =>
                        item._id === action.addCartItem._id
                            ? {
                                ...item,
                                qty: item.qty + 1,
                            }
                            : item
                    ),
                };
            }
            return {
                ...state,
                cart: [..._cart, {...action.addCartItem, qty: 1}],
            };

        case DELETE_CART:
            let improvedItem = state.cart.filter(
                (item) => item._id !== action.deletedMenuItem._id
            );
            return {
                ...state,
                cart: improvedItem,
            }
        case USER_DIS:
            return {
                ...state,
                user: action.payload
            }

        case DECREAMENT:
            const isDCartExist = _cart.find((i) => i._id === action.decreasedMenuItem._id);
            if (isDCartExist) {
                return {
                    ...state,
                    cart: state.cart.map((item) =>
                        item._id === action.decreasedMenuItem._id
                            ? {
                                ...item,
                                qty: item.qty - 1,
                            }
                            : item
                    ),
                };
            }
            break;

        default:
            return state;
    }
};

export default reducer;
