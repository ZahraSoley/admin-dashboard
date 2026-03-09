import { ChevronsUpDown, User } from "lucide-react"

const AccountToggle = () => {
    return (
        <div className="pb-4 mb-4 border-b mt-2 border-stone-300">
            <button className="flex p-0.5 hover:bg-stone-200 rounded transition-colors w-full justify-between items-center">
                <div className="flex items-center gap-2">
                    <User className="size-8 rounded shrink-0 bg-sky-600 text-white shadow"
                        role="img"
                        aria-label="user avatar"
                    />
                    <div className="text-start grid">
                        <p className="text-sm font-medium">Tom is Loading</p>
                        <p className="text-xs text-stone-500">tom@hover.dev</p>
                    </div>
                </div>
                <ChevronsUpDown className="size-4 mr-1 text-stone-700"
                />
            </button>
        </div>
    )
}

export default AccountToggle