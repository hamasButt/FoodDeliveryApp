import {AddRounded, Favorite} from "@mui/icons-material";
import "../../../style/dish-item-cont.css";
import React, {useState, memo, useEffect} from "react";
import {useStateValue} from "../../../store/state-provider";
import {addToCart} from "../../../store/action";
import ReactStars from "react-rating-stars-component";
import {Alert, Snackbar} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {addCart} from "../../../store/redux/Slices";
import {useDispatch, useSelector} from "react-redux";
import {ADD_CART} from "../../../store/constant";


export const ItemsCard = ({item, imgSrc, price, rating, name, itemId}) => {
    const [isFavourite, setIsFavourite] = useState(false);
    const [Snack, setSnackBar] = useState(false);
    const [{cart}, dispatch] = useStateValue();
    const {alert} = useStyles();

    const handleSnack = (reason) => {
        if (reason === "clickaway") {
            return;
        }
        setSnackBar(false);
    };

    return (
        <div className="item-cards" id={itemId}>
            <div
                className={`is-favourite ${isFavourite ? "active" : ""}`}
                onClick={() => setIsFavourite(!isFavourite)}
            >
                <Favorite/>
            </div>
            <div className="img-box">
                <img src={imgSrc} alt={name} className="item-img"/>
            </div>
            <div className="item-content">
                <h3 className="item-name">{name}</h3>
                <div className="bottom">
                    <div className="ratings">
                        <ReactStars
                            count={5}
                            className="rating"
                            value={rating}
                            onChange={ratingChanged}
                            size={15}
                            activeColor="#f8901c"
                        />
                        <h3 className="price">
                            <span>Rs </span>
                            {price}
                        </h3>
                    </div>
                    <i
                        className="add-to-cart"
                        onClick={() => {
                            setSnackBar(true);
                            dispatch(
                                addToCart(item.menu_items.find((n) => n._id === itemId)),
                            );
                        }}
                    >
                        <AddRounded/>
                    </i>
                </div>
            </div>
            <Snackbar
                open={Snack}
                autoHideDuration={3000}
                transitionDuration={1000}
                onClose={handleSnack}
                anchorOrigin={{vertical: "top", horizontal: "right"}}
            >
                <Alert className={`${alert} alert-icon`}>
                    {name} Added to your Cart
                </Alert>
            </Snackbar>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    alert: {
        fontWeight: 600,
        background: "#f8901c",
        color: "#fff",
        padding: "1.1rem 1rem",
        [theme.breakpoints.down("sm")]: {
            width: 250,
        },
    },
}));


const ratingChanged = (newRating) => {
    console.log(newRating);

};
