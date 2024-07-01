import React from 'react'
import ComplexTodo from './ObStateComplexTodo/ComplexTodo'
import './global.css'
import { Toaster } from 'react-hot-toast';
const App = () => {
  return (
    <>
      <ComplexTodo />
      <Toaster/>
    </>
  )
}

export default App