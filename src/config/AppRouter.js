import React from 'react'
import {BrowserRouter, Route, Routes,} from "react-router-dom"
import Home from '../pages/Home'
import LogIn from '../pages/LogIn'
import SignUp from '../pages/SignUp'
import Todo from '../pages/Todo'


const AppRouter = () => {
  return (
    <>
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/LogIn' element={<LogIn/>}/>
            <Route path='/SignUp' element={<SignUp/>}/>
            <Route path='/Todo' element={<Todo/>}/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default AppRouter