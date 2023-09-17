import { ChevronLeft, ChevronRight } from "lucide-react"
import { SuggestionPlaylist } from '../../molecules/SuggestionPlaylist'
import { MainPlaylist } from "../../molecules/MainPlaylist"

export const Main = () => {
    return(
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="p-1 rounded-full bg-black/40">
              <ChevronLeft />
            </button>
            <button className="p-1 rounded-full bg-black/40">
              <ChevronRight />
            </button >
          </div>
          <h1 className="font-bold text-3xl mt-10 ">Good Afternoon</h1>

          <SuggestionPlaylist />

          <h2 className="font-bold text-2xl mt-10">Made for Caio Neves </h2>

          <MainPlaylist />
        </main>
    )
}