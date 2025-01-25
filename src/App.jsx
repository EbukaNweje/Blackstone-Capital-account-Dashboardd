import React from 'react'
import Router from './Router'
import {RouterProvider} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'

const App = () => {
  return (
    <>
      <RouterProvider router = {Router}/>
       <Toaster/>
    </>
  )
}

export default App