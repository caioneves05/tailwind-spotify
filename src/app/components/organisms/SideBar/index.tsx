import { Navbar } from "../../atoms/Navbar/Navbar"
import { Options } from "../../atoms/Options/Options"
import { Playlists } from "../../molecules/Playlists"

export const SideBar = () => {
    return(
        <aside className="w-72 bg-zinc-950 p-6">
          <Options />
          <Navbar />
          <Playlists />
        </aside>
    )
}