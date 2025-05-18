import { FC } from "react";
import { CardDashboard } from "../../../../infrastructure/interface/DashboardInterface";
import { HandlerIco } from "../../../common/HandlerIco";

interface Props {
    card: CardDashboard
}

const CardDashboardAdmin: FC<Props> = ({ card }) => {

    return (
        <div className="stat bg-white shadow-lg rounded-lg">
            <div className="stat-figure text-success">
                <HandlerIco ico={card.ico} customClass="w-8 h-8" />
            </div>
            <div className="stat-title">{card.label}</div>
            <div className="stat-value text-success">{card.count}</div>
            { card.content && <div className="stat-desc">{card.content}</div>}
        </div>
    )
}

export default CardDashboardAdmin;
