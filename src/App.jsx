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
    <Card name = 'Don Bhau' profession = 'UI/UX Designer' src = 'https://avatars.githubusercontent.com/u/192666834?v=4' Bio = 'Hardworking and reliable UI/UXdesigner focused on going above and beyond to support teams and serve customers. Currently undergoing a self-taught process to enable me offer top-notch abilities. Motivated to continue to learn and grow as a product design professional.' />
    {/* <CardDetails/> */}
    </>
  )
}

export default App
