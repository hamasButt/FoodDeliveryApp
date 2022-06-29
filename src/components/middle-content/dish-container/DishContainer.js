import {MenuCard} from "./MenuCard";
import {RowContainer} from "./RowContainer";
import React from 'react'
import {DishItemContainer} from "./DishItemContainer";
import "../../../style/dish-container.css";
import {useEffect} from "react";
import {useStateValue} from "../../../store/state-provider";
import {fetchingApi, filterMainData} from "../../../store/action";
import axios from "axios";

export const DishContainer = () => {
    const [{total, mainDataItem}, dispatch] = useStateValue();

    const setData = (itemId) => {
        const getFilteredData = total.filter((item) => item._id === itemId);
        dispatch(filterMainData(getFilteredData));
    };

    useEffect(() => {

        async function getData() {
            await axios
                .get(
                    `${process.env.REACT_APP_API_URL}/public/menu-categories?search=items_and_prices`
                )
                .then((resp) => {
                    if (resp.data && resp.data.length) {
                        let categories = resp.data;
                        const menu_items = categories
                            ? categories.filter((item) => item._id === 1)
                            : [];
                        dispatch(filterMainData(menu_items));
                        dispatch(fetchingApi(categories));
                        console.log("Loaded");
                    }
                })
                .catch((err) => {
                    if (err.message) {
                        console.log("Error", err.message);
                    }
                });
        }


        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="dish-container">
            <MenuCard/>
            <RowContainer setData={(item) => setData(item)} data={total}/>
            {mainDataItem ? <DishItemContainer/> : <h1>Loading</h1>}
        </div>
    );
};
