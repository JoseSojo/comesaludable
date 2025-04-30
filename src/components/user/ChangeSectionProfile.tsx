import { FC, ReactNode } from "react";

interface Props {
    change: () => void;
    tab: string;
    label: string;
    ico: ReactNode
}

const ButtonChangeSection: FC<Props> = ({ change, tab, label,ico }) => {

    return (
        <button
            className={`btn btn-block mb-2 ${tab === 'profile' ? 'btn-primary' : 'btn-ghost'}`}
            onClick={change}
        >
            {ico}
            {label}
        </button>
    )
}

export default ButtonChangeSection;
