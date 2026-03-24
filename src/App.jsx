import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Navbar from './navigation/Navbar'
const App = () => {
  return (
    <div className='py-10 px-[10%] w-screen h-screen font-thin text-5xl text-white bg-gray-800'>
      <Navbar/>
      <Mainroutes/>
    </div>
  )
}

export default App
