import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route,createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/contact.jsx'
import User from './components/User/User.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={< Layout />} >
      <Route path="" element={<Home />} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user' element={<User/>} >
         <Route path=':userid' element={<User/>} />
      </Route>
      <Route path='github' loader={githubInfoLoader} element={<Github/>} />
      <Route path='*' element={<div> NOT FOUND </div>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}c/>
  </React.StrictMode>,
)
