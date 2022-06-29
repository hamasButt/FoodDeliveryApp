import {RowCards} from "./RowCards";
import '../../../style/row-cont.css'
import {useEffect} from "react";

export const RowContainer = ({setData, data}) => {

    useEffect(() => {
        const menuCards = document
            .querySelector('.row-container')
            .querySelectorAll('.row-menu-card')

        const setCardActive = (active) => {
            menuCards.forEach(n => n.classList.remove('active'))
            active.classList.add('active')
        }

        menuCards.forEach((num) => num.addEventListener('click', () => setCardActive(num)))

    })

    return (
        <div className="row-container">
            {
                data ? (
                    data.map((item) => (
                        <div key={item._id}
                             onClick={() => setData(item._id)}>
                            <RowCards
                                isActive={item._id === 1}
                                imgSrc={process.env.REACT_APP_API_URL + item.menu_items[1].img_file}
                                name={item.name}/>
                        </div>
                    ))
                ) : 'Loading'
            }


        </div>
    )
}
