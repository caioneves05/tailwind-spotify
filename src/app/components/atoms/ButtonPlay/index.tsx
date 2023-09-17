import { FaPlay } from 'react-icons/fa';

type IButtonPlay = {
    color: string,
    visible?: string
}

export const ButtonPlay = ({ color, visible }: IButtonPlay) => {
    return(
        <div className={`items-center p-2 rounded-full ${color} text-black ml-auto ${visible}`}>
            <FaPlay className="ml-0.5" />
        </div>
    )
}