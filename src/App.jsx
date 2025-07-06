import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Card from './Components/Card'
import CardDetails from './Components/CardDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card name = 'xy' profession = 'ui/ux design' src = 'https://avatars.githubusercontent.com/u/192666834?v=4' Bio = 'xd' />
    {/* <CardDetails/> */}
    </>
  )
}

export default App
