/* eslint-disable @next/next/no-img-element */
import { ButtonPlay } from '../../atoms/ButtonPlay'
import { playlistsMock } from "./mocks/mock"

export const SuggestionPlaylist = () => {

    return(
        <div className="grid grid-cols-3 gap-6 mt-3">
              {playlistsMock.map((item) => 
                <a className="flex items-center font-semibold gap-2 group bg-white/10 hover:bg-white/20 transition-colors rounded overflow-hidden" key={item.name}>
                    <img src={item.avatar} alt="Capa do Álbum" className="w-20 h-20"/>
                    {item.name}
                    <ButtonPlay />
                </a>) }
          </div>
    )
}