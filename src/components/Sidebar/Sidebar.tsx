import AccountToggle from "./AccountToggle"
import RouteSelect from "./RouteSelect"
import Search from "./Search"

const Sidebar = () => {
  return (
    // find an elegant way to set the height 
    <div className="h-[calc(100vh-32px)]">
      {/* main content */}
      <div className="overflow-y-scroll sticky pt-4 h-7/8">
        <AccountToggle />
        <Search />
        <RouteSelect />
      </div>
      {/* setting */}
      <div className="h-1/8"></div>
    </div>
  )
}

export default Sidebar