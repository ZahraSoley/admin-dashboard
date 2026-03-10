import { SearchIcon } from "lucide-react"
import { useState } from "react"
import CommandMenu from "./CoomandMenu"

const Search = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className="bg-stone-200 mb-4 rounded px-2 py-1.5 text-sm">
                <label className="flex items-center">
                    <SearchIcon className="size-4 mr-2" />
                    <input type="text"
                        placeholder="Search"
                        onClick={()=>setOpen(true)}
                        className="w-full focus:outline-1 focus:rounded px-1.5 py-px"
                    />
                </label>
            </div>
            <CommandMenu open={open} setOpen={setOpen} />
        </>
    )
}

export default Search