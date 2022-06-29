import "../../../style/midcontent.css";
import {SubMenuContainer} from "./SubMenuContainer";
import {CartItem} from "./CartItem";
import {useStateValue} from "../../../store/state-provider";
import {Modal, Typography, Button} from "@mui/material";
import React, {useEffect, useMemo, useReducer, useState} from "react";
import {makeStyles} from "@mui/styles";
import imageNA from "../../../Not-avail.jpg";

const initialState = {
    open: false,
    totalPrice: 0
}

const reducerFn = (state, action) => {
    switch (action.type) {
        case 'SET_OPEN':
            return {
                ...state,
                open: action.payload
            }

        case 'SET_TOTAL_PRICE':
            return {
                ...state,
                totalPrice: action.payload
            }
        default:
            throw new Error()

    }
}


export const CartCheckOut = () => {
    const [state, dispatching] = useReducer(reducerFn, initialState)
    const {modal, modalHeader} = useStyles();
    const [{cart}] = useStateValue()


    const memoSum = useMemo(() => {
        return cart.reduce((prev, current) => prev + +current.default_price * current.qty, 0)
    }, [cart])
    console.log(memoSum,'dsadsa')

    useEffect(() => {
        dispatching({
            type: 'SET_TOTAL_PRICE',
            payload: memoSum
        })
    }, [cart,memoSum]);

    const modalClose = (reason) => {
        if (reason === "Clickaway") return;
        else dispatching({type: 'SET_OPEN', payload: false});
    };

    const checkImage = (e) => {
        if (e.target.onerror === null) {
            e.target.src = imageNA
        }
    }

    return (
        <div className="cart-checkout-contain">
            <div className="cart-container">
                <SubMenuContainer name={"cart Items"}/>
            </div>
            <div className="cart-items">
                {cart.map((item) => {
                    return <div key={item._id} onError={e => checkImage(e)}>
                        <CartItem
                            item={item}
                            key={item._id}
                            imgSrc={process.env.REACT_APP_API_URL + item.img_file}
                            price={item.default_price}
                        />

                    </div>
                })}
            </div>
            <div className="total-section">
                <h3>Total</h3>
                <p>
                    <span> Rs </span>
                    {state.totalPrice}
                </p>
            </div>
            <button className="check-out" onClick={() => dispatching({type: 'SET_OPEN', payload: true})}>
                Check Out
            </button>
            <Modal open={state.open}>
                <div className={modal}>
                    <Typography variant="h6" className={modalHeader}>
                        Your Order
                    </Typography>
                    {cart.map((item, i) => {
                        return (
                            <ol key={i}>
                                <li>{item.name}</li>
                            </ol>
                        );
                    })}
                    <Typography variant="h4"> Thankyou for Your Order</Typography>
                    <Button color="secondary" variant="outlined" onClick={modalClose}>
                        Close
                    </Button>
                </div>
            </Modal>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    modal: {
        position: "absolute",
        top: 0,
        backgroundColor: "#fff",
        bottom: 0,
        borderRadius: "20px 20px 20px 20px",
        left: 0,
        right: 0,
        width: 500,
        height: 600,
        margin: "auto",

        [theme.breakpoints.down("sm")]: {
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
        },
    },
    modalHeader: {
        padding: "10px 20px",
        color: "#fff",
        fontWeight: 500,
        backgroundColor: "#f8901c",
        width: "100%",
    },
}));

// const setUpdatedPrice = (action, UDPrice) => {
//     console.log(action, UDPrice, 'sdasda')
//     if (action === "add") {

//     } else {

//     }
// };
