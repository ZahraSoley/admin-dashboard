import { DollarSign, Home, Link, Paperclip, User, type LucideIcon } from "lucide-react";

// const buttons = []


const RouteSelect = () => {
    return (
        <div className="space-y-1">
            <Route Icon={Home} selected={true} title="Dashboard" />
            <Route Icon={User} selected={false} title="Team" />
            <Route Icon={Paperclip} selected={false} title="Invoices" />
            <Route Icon={Link} selected={false} title="Integration" />
            <Route Icon={DollarSign} selected={false} title="Finance" />
        </div>
    )
}
export default RouteSelect

const Route = ({ selected, Icon, title }: { selected: boolean; Icon: LucideIcon; title: string }) => {
    return (
        <button
            className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-colors cursor-pointer
                ${selected
                    ?'bg-white text-stone-950 shadow'
                    :'hover:bg-stone-200 bg-transparent text-stone-500 shadow-none'
                }
                `}
        >
            <Icon className={`size-4 ${selected ? 'text-sky-600' : ''}`} />
            <span>{title}</span>
        </button>
    )
}