import "../../../style/dish-item-cont.css";
import {ItemsCard} from "./ItemsCard";
import {useStateValue} from "../../../store/state-provider";
import imageNA from "../../../Not-avail.jpg";

export const DishItemContainer = () => {
    // eslint-disable-next-line no-unused-vars
    const [{mainDataItem}, dispatch] = useStateValue();

    const checkImage = (e) => {
        if (e.target.onerror === null) {
            e.target.src = imageNA
        }
    }
    return (
        <div className="dish-item-container">
            {mainDataItem.map((item) => {
                return item.menu_items.map((obj) => {
                    let imageFile = process.env.REACT_APP_API_URL + obj.img_file;
                    return (
                        <div
                            onError={(e) => checkImage(e)}
                            key={obj._id}
                        >
                            <ItemsCard
                                item={item}
                                itemId={obj._id}
                                name={obj.name}
                                imgSrc={imageFile}
                                rating={Math.floor(Math.random() * 5) + 1}
                                price={obj.default_price}
                            />
                        </div>
                    );
                });
            })}
        </div>
    );
};
