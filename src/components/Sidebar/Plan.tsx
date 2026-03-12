
const Plan = () => {
    return (
        // i dont like the way it is in horizontal axis 
        <div className="flex flex-col justify-center   border-t border-stone-300 text-xs h-full">
            <div className="flex items-center justify-between">
                <div>
                    <p className="font-bold">Enterprise</p>
                    <p className="text-stone-500">Pay as you go</p>
                </div>
                <button className="px-2 py-1 font-medium bg-stone-200 hover:bg-stone-300 transition-colors rounded">
                    Support
                </button>
            </div>
        </div>
    )
}

export default Plan