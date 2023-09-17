import { Home, Search, Library } from 'lucide-react'


export function Navbar() {
    return(
        <div className="flex flex-col gap-4 space-y-2 mt-6">
            <a href="" className="flex gap-5 text-sm font-semibold text-zinc-400 hover:text-stone-100">
                <Home />
                <h1>Home</h1> 
            </a>
            <a href="" className="flex gap-5 text-sm font-semibold text-zinc-400 hover:text-stone-100">
                <Search />
                <h1>Search</h1>
            </a>
            <a href="" className="flex gap-5 text-sm font-semibold text-zinc-400 hover:text-stone-100">
                <Library />
                <h1>Library</h1>
            </a>
        </div>
    )
}