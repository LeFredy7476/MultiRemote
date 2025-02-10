import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PowerBar from './Powerbar'
import MediaControl from './MediaControl'
import FrameSwitch from './FrameSwitch'
import Drawer from './Drawer'

function App() {
  return (
    <>
      <PowerBar/>
      <MediaControl/>
      <FrameSwitch/>
      <Drawer/>
    </>
  )
}

export default App
