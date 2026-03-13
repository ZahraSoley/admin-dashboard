import { Calendar } from "lucide-react"

const TopBar = () => {
    return (
        <div className="border-b px-4 pb-4 mb-4 mt-2 border-stone-300">
            <div className="flex items-center justify-between p-0.5">
                <div>
                    <p className="text-sm font-bold">🚀Good morning Tom!</p>
                    <p className="text-xs font-bold text-stone-500">Tuesday, Aug 8th 2023</p>
                </div>
                <button className="flex text-sm items-center gap-2 bg-stone-100 transition-colors hover:bg-sky-100 hover:text-sky-900 px-3 py-1.5 rounded">
                    <Calendar/>
                    <span>Prev 6 Months</span>
                </button>
            </div>
        </div>
    )
}

export default TopBar