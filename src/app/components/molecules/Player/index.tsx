/* eslint-disable @next/next/no-img-element */
import { Laptop2, LayoutList, Maximize2, Mic2, Repeat, Shuffle, SkipBack, SkipForward, Volume } from 'lucide-react'
import { ButtonPlay } from '../../atoms/ButtonPlay'
import { ProgressBar } from '../../atoms/ProgressBar'

export const Player = () => {
    return(
        <div className="flex justify-around items-center">

            <div className="flex flex-row items-center gap-3">
                <img src="https://t2.genius.com/unsafe/817x0/https%3A%2F%2Fimages.genius.com%2F1b63ec9c8cc264ea47ab6363b9d4be87.1000x1000x1.png " alt="" className="w-14 rounded-md"/>
                <div className="flex flex-col">
                    <h1 className="text-zinc-200">Joga</h1>
                    <p className="text-sm text-zinc-500">Rudies Flacko</p>
                </div>
            </div>

            <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-3">
                    <Shuffle size={17} className='text-green-500' />
                    <SkipBack size={17} className='text-zinc-200' />
                    
                    <ButtonPlay color='bg-white' />
                    <SkipForward size={17} className='text-zinc-200' />
                    <Repeat size={17} className='text-zinc-200' />
                </div>
                <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-zinc-500">0:31</span>
                    <ProgressBar color='bg-zinc-200' width='96' height='1'/>
                    <span className="text-xs text-zinc-500">2:44</span>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <Mic2 size={17}/>
                <ProgressBar color='bg-green-500' width='40' height='1'/>
                <LayoutList size={17}/>
                <Laptop2 size={17} />
                <div className="flex items-center gap-2">
                    <Volume size={17}/>
                </div>
                <Maximize2 size={17}/>
            </div>
        </div>
    )
}