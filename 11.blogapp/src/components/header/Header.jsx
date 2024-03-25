import React from 'react'
import {Navigate, Link, useNavigate} from 'react-router-dom'
import Container from '../container/Container'
import Logo from '../Logo'
import LogoutBtn from './LogoutBtn'
import { useSelector } from 'react-redux'

function Header() {

    const authStatus = useSelector(state => state.auth.status)
    const navigate = useNavigate()
    const navItems = [
        {
            name:'Home',
            slug:'/',
            active:true,
        },
        {
            // dont show login when already logged in ie authstatus =true
            name:'Login',
            slug:'/login',
            active:!authStatus,
        },
        {
            name:'Signup',
            slug:'/signup',
            active:!authStatus,
        },
        {
            // show all posts when already logged in    
            name:'All Posts',
            slug:'/all-posts',
            active:authStatus,
        },
        {
            name:'Add Post',
            slug:'/add-post',
            active:authStatus,
        },
        {
            name:'Home',
            slug:'/',
            active:true,
        },
    ]
  return (
    <header className='py-3 shadow bg-gray-500'>
        <Container>
            <nav className='flex'>
                <div className='mr-4'>
                    <Link to='/'><Logo /></Link>
                    <ul className='flex ml-auto'>
                        {
                            navItems.map( item => item.active ? (
                                <li key={item.name} >
                                    <button 
                                    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                                    onClick={ ()=> navigate(item.slug)}>
                                        {item.name}
                                    </button>
                                </li>
                            ): null)
                        }

                        {/* show logout for logged in only */}
                        {authStatus && 
                            (<li>
                                <LogoutBtn />
                            </li>)}
                    </ul>
                </div>
            </nav>
        </Container>
    </header>
  )
}

export default Header