/* eslint-disable @next/next/no-img-element */
import { mainPlaylistMock } from "./mock/mock"
import Image from "next/image"

export const MainPlaylist = () => {
    return(
        <div className="grid grid-cols-5 gap-4 mt-4">
                {mainPlaylistMock.map((item) => 
                <a className="flex flex-col gap-2 bg-white/5 p-2 rounded hover:bg-white/10" key={item.name}> 
                    <img className="w-full" src={item.avatar} alt="Capa"/>
                    <strong className="font-semibold">{item.name}</strong>
                    <span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>
                </a> )
                }
          </div>
           
    )
}