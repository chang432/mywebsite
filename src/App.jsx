import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MenuButton from './components/MenuButton'

function App() {
  return (
    <div className="flex flex-row space-x-10 border border-black text-white">
      <div className="border space-y-36">
        <div className="text-left">
          <h1>Andre Chang</h1>
          <h2>Software Developer</h2>
        </div>
        <div className="flex flex-col space-y-6">
          <MenuButton text="About"/>
          <MenuButton text="Experience"/>
          <MenuButton text="Projects"/>
        </div>
      </div>
      <div className="border">
        <p>OTHER STUFF GOES HERE</p>
      </div>
    </div>
  )
}

export default App
