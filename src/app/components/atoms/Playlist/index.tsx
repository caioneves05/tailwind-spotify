/* eslint-disable @next/next/no-img-element */
interface IPlaylist {
    name: string,
    avatar: string,
    type: string
}

export const Playlist = ({ name, avatar, type }: IPlaylist) => {
    return(
        <div className="flex flex-1 gap-5 p-1 items-center rounded-md hover:bg-zinc-900">
            <div>
                <img src={avatar} alt="" className="object-contain h-12 rounded-md"/>
            </div>
            <div className="flex flex-col">
                    <h1>{name}</h1>
                <div className="flex gap-2 text-sm font-semibold text-stone-400">
                    <p>{type}</p>
                    <p>• Caio Neves</p>
                </div>
            </div>
        </div>
    )
}