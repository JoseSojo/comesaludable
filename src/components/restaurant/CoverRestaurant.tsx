import { Camera } from "lucide-react";
import { FC } from "react";

interface Props {
    coverImage: string;
    update?: boolean
}

const CoverRestaurant: FC<Props> = ({ coverImage, update }) => {

    return (
        <div className="relative h-64 md:h-96 w-full">
            <img
                src={coverImage}
                alt="Restaurant Cover"
                className="w-full h-full object-cover"
            />
            {
                update && <button className="btn btn-circle absolute bottom-4 right-4">
                    <Camera className="w-5 h-5" />
                    
                </button>
            }
        </div>
    )
}

export default CoverRestaurant;
