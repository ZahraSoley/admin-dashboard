import AccountToggle from "./AccountToggle"
import Plan from "./Plan"
import RouteSelect from "./RouteSelect"
import Search from "./Search"

const Sidebar = () => {
  return (
    // find an elegant way to set the height right now we subtract the padding of apps main 
    <div className="h-[calc(100vh-32px)]"> 
      {/* main content */}
      <div className="overflow-y-scroll sticky top-4 h-9/10">
        <AccountToggle />
        <Search />
        <RouteSelect />
      </div>
      {/* setting */}
      <div className="h-1/10 sticky top-[calc(100vh-32px)]">
        <Plan />
      </div>
    </div>
  )
}

export default Sidebar