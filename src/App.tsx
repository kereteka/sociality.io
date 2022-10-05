import { useState } from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks'
import reactLogo from './assets/react.svg'
import './App.css'
import { useFetchDataQuery } from './features/data/dataSlice'
import PostCard from './components/PostCard'
import Feed from './components/Feed'
import Navbar from './components/Navbar'


function App() {


  return (
    <div className=''>
      <Navbar />
      <Feed />
    </div>
  )
}

export default App
