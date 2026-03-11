import { Home, type LucideIcon } from "lucide-react";

const buttons = [
    {
        Icon: <Home />,
        title: 'Dashboard',

    }
]



const RouteSelect = () => {
    return (
        <div className="space-y-1"></div>
    )
}
export default RouteSelect

const Route = ({ selected, Icon, title }: { selected: boolean; Icon: LucideIcon; title: string }) => {
    return (
        <button
            className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-colors transition-shadow
                ${selected
                    ? 'bg-white text-stone-950 shadow'
                    : ':hover:bg-stone-200 bg-transparent text-stone-500 shadow-none'
                }
                `}
        >
            <Icon className={selected ? 'text-sky-600' : ''} />
            <span>{title}</span>
        </button>
    )
}