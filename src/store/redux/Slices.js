import {createSlice} from "@reduxjs/toolkit";

export const Slices = createSlice({
    name: 'Slice',
    initialState: {
        cart: [],

    },
    reducers: {
        addCart: (state, {payload}) => {
            const _cart = [...state.cart]
            const isCartExist = _cart.find((i) => i._id === payload._id);
            if (isCartExist) {
                state.cart = _cart.map((item => {
                    return item._id === payload._id ? {...item, qty: item.qty + 1} : item
                }))
            } else {
                state.cart = [..._cart, {...payload, qty: 1}]
            }
        }

    }
})

export const {addCart} = Slices.actions
export default Slices.reducer
