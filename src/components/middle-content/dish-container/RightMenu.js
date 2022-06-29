import '../../../style/midcontent.css'
import {DebitCard} from "./DebitCard";
import {CartCheckOut} from "./CartCheckOut";
import {useStateValue} from "../../../store/state-provider";

export const RightMenu = () => {
    const [{cart}] = useStateValue()
    return (
        <div className="right-menu">
            <DebitCard/>
            {
                !cart.length ? (
                    <div className="addSomeItem">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FemptyCart.png?alt=media&token=50b733d4-cdd9-4025-bffe-8efa4066ca24"
                            alt=""
                            className="emptyCart"
                        />
                    </div>
                ) : <CartCheckOut/>
            }
        </div>
    )
}

