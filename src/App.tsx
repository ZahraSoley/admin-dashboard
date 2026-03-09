import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './components/Dashboard/Dashboard'
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {

  return (
    <main className='bg-stone-100 text-stone-950 grid gap-4 p-4 grid-cols-[1fr_4fr]'>
      <Sidebar />
      <Dashboard />
    </main>
  )
}

export default App
