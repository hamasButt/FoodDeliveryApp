import "../../../style/midcontent.css";
import {AddRounded, DeleteOutline, RemoveRounded} from "@mui/icons-material";
import React, {useEffect, useState} from "react";
import {useStateValue} from "../../../store/state-provider";
import {addToCart, decreament, deleteItemCart} from "../../../store/action";

export const CartItem = ({item, imgSrc, price}) => {
    const {name, qty} = item;
    // eslint-disable-next-line no-empty-pattern
    const [{}, dispatch] = useStateValue();
    const [itemPrice, setPrice] = useState(0);

    useEffect(() => {
        setPrice(parseFloat(price));
    }, [price, imgSrc]);


    const decreamentQty = (decreasedMenuItem) => {
        if (qty <= 1) {
            alert(`${name} Can Not be Less then Atleast 1`);
            return;
        } else {
            dispatch(decreament(decreasedMenuItem));
        }
    };

    const increamentQty = (increasedMenuItem) => {
        dispatch(addToCart(increasedMenuItem));
    };

    const deleteCart = (deletedMenuItem) => {
        let confirmed = window.confirm(
            "Are Your Sure You Want To delete Your Cart"
        );
        if (confirmed) {
            dispatch(deleteItemCart(deletedMenuItem));
        }
        return;
    };

    return (
        <div className="card-item" style={{position: "relative"}}>
            <div className="delete-cart" onClick={() => deleteCart(item)}>
                <DeleteOutline/>
            </div>
            <div className="img-box">
                <img src={imgSrc}
                     alt={name}
                />
            </div>
            <div className="item-section">
                <h2 className="item-name">{name}</h2>
                <div className="item-qty">
                    <span>x{qty}</span>
                    <div className="qty">
                        <div>
                            <RemoveRounded
                                className="item-remove"
                                onClick={() => {
                                    decreamentQty(item);
                                }}
                            />
                        </div>
                        <div>
                            <AddRounded
                                className="item-add"
                                onClick={() => {
                                    increamentQty(item);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {
                <p className="item-price">
                    <span className="dollar-sign">Rs</span>
                    <span className="item-price-val">
            {qty ? qty * itemPrice : itemPrice}
          </span>
                </p>
            }
        </div>
    );
};

// Extra Funchions which was used

// const updateQty = (action, updatedPrice) => {
    // console.log('price', updatedPrice);
//     if (action === 'add') {
//         return qty + 1
        // setQty(qty + 1)
        // UpdateItemPrice(action, updatedPrice)
//     } else {
//         if (qty <= 1) {
//             alert('Cannot be Less then 1')
//             return
//         }
//         return qty - 1
        // setQty(qty - 1)
        // UpdateItemPrice(action, updatedPrice)
//     }
// }
// else {
//     if (qty <= 1) {
//         cartItems.pop(id)
//         dispatch({
//             type: actionType.SET_CART,
//             cart: cartItems
//         })
//     }
//     setQty(qty - 1)
// }
// }

    // const UpdateItemPrice = (action, updatedPrice) => {
    //     setTotal(action, updatedPrice);
    // };
