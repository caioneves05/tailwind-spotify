import { playlistsMock } from "@/app/mocks/playlists"
import { Playlist } from "../../atoms/Playlist"

export const Playlists = () => {
    return(
        <nav className="mt-10 pt-10 border-t border-zinc-700">
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