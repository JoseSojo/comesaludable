import { FC, useEffect, useState } from "react";
import { ApiDashboardAdapter } from "../../../../infrastructure/adapters/ApiDashboardAdapter";
import { CardDashboard } from "../../../../infrastructure/interface/DashboardInterface";
import CardDashboardAdmin from "../cards/CardDashboardAdmin";

interface Props { }

const CardSection: FC<Props> = () => {

    const adapter = new ApiDashboardAdapter();
    const [cards, setCards] = useState<CardDashboard[]>([]);

    useEffect(() => {
        (async () => {
            const response = await adapter.card();
            setCards(response);
        })()
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                cards.map((card) => <CardDashboardAdmin card={card} />)
            }
        </div>
    )
}

export default CardSection;
