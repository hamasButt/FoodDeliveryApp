import {ChevronRightRounded} from "@mui/icons-material";
import '../../../style/menu-card.css'

export const SubMenuContainer = ({name}) => {
    return (
        <div className="sub-menu-contain">
            {name}
            <div className="view-all">
                <p>View All</p>
                <i><ChevronRightRounded/></i>
            </div>
        </div>
    )
}
