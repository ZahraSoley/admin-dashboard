
const RecentTransaction = () => {
    return (
        <div className="col-span-12 p-4 rounded border border-stone-300">
            <div className="mb-4 flex items-center justify-between">
                <h3 className="flex items-center gap-1.5 font-medium">$ Recent Transactions</h3>
                <button className="text-sm text-sky-700 cursor-pointer hover:text-sky-800">See all</button>
            </div>
        </div>
    )
}

export default RecentTransaction