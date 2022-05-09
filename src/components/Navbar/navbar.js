import React from 'react'
import { 
    Nav,
    NavLink, 
    Bars, 
    NavMenu,
    NavBtn, 
    NavBtnLink
 } from './navcomponents';

const Navbar = () => {
  return (
    <>
       <Nav>
           <NavLink to="/">
               <h1>Logo</h1>
           </NavLink>
           <Bars />
           <NavMenu>
               <NavLink to="/home" activeStyle>
                   Home
               </NavLink>
               <NavLink to="/properties" activeStyle>
                   Our Properties
               </NavLink>
               <NavLink to="/agents" activeStyle>
                   Agents
               </NavLink>
               <NavLink to="/blog" activeStyle>
                   Blog
               </NavLink>
               <NavLink to="/login" activeStyle>
                   Login/Sign Up
               </NavLink>
           </NavMenu>
           <NavBtn>
           <NavBtnLink to ="/contact-us">Contact Us</NavBtnLink>
        </NavBtn>       
       </Nav>
    </>
  )
}

export default Navbar