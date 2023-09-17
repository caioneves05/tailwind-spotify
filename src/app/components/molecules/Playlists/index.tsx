import { playlistsMock, subPlaylistMock } from "@/app/components/molecules/Playlists/mocks/playlists"
import { Playlist } from "../../atoms/Playlist"

export const Playlists = () => {
    return(
        <nav className="mt-10 pt-10 border-t border-zinc-700">
            <div className="flex gap-1 flex-col mb-6 text-zinc-500">
                {subPlaylistMock.map((item) => <p className="font-semibold text-sm hover:text-zinc-300" key={item.name}>{item.name}</p>)}
            </div>
            {playlistsMock.map((playlist) =>
            <Playlist 
            name={playlist.name}
            avatar={playlist.avatar}
            type={playlist.type}
            key={playlist.name}
            />
            )}
        </nav>
    )
}