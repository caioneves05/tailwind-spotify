import { Main } from "./components/organisms/Main";
import { MusicBar } from "./components/organisms/MusicBar";
import { SideBar } from "./components/organisms/SideBar";


export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <SideBar />
        <Main />
      </div>
        <MusicBar />
      </div>
  )
}
