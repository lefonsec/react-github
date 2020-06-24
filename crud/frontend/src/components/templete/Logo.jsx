import './Logo.css'
//import logo from '../../assets/logo.png'
import React from 'react'
import { Link } from 'react-router-dom'

export default  Props => 
    <aside className="logo">
       <Link to="/" className="logo">
           <img src="{logo}" alt="logo"/>
       </Link>
    </aside>

