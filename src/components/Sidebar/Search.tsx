import { SearchIcon } from "lucide-react"

const Search = () => {
    return (
        <>
            <div className="bg-stone-200 mb-4 rounded px-2 py-1.5 text-sm">
                <label className="flex items-center">
                    <SearchIcon className="size-4 mr-2" />
                    <input type="text"
                        placeholder="Search"
                        className="w-full focus:outline-1 focus:rounded px-1.5 py-px"
                    />
                </label>
            </div>
        </>
    )
}

export default Search