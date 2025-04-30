import { Camera } from "lucide-react";
import { FC } from "react";
import { useAuth } from "../../context/AuthContext";

interface Props { }

const PhotoProfile: FC<Props> = ({ }) => {
    const { user } = useAuth();

    return (
        <div className="relative">
            <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content rounded-full w-24">
                    <span className="text-3xl">{user?.name.charAt(0).toUpperCase()}</span>
                </div>
            </div>
            <button className="btn btn-circle btn-sm absolute bottom-0 right-0">
                <Camera className="w-4 h-4" />
            </button>
        </div>
    )
}

export default PhotoProfile;
