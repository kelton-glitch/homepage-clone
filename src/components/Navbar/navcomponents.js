import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'


export const Nav = styled.nav`
    background: fff;
    height:80px;
    display: flex;
    justify-content: space-between;
    padding: 0.4rem;
    align-items:center;
    z-index: 999;
    

    @media screen and (max-width:770px) {
        transition: 0.8s all ease;
    }
`

export const NavLink = styled(Link)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration:none;
    padding: 0 1rem;
    height:100%;
    cursor: pointer;
    wrap: no-wrap;

    &.active{
        color: grey;
    }

     &:hover{
         transition: all 0.2s ease-in-out;
         color: #256ce0;
     }
`

export const Bars=styled(FaBars)`
    display: none;
    color:#fff;

    @media screen and(max-width:770px){
        display: block;
        position:absolute;
        top:0;
        right:0;
        transform: translated (-100%, 75%);
        font-size: 1rem;
        cursor:pointer;
    }
`

export const NavMenu = styled.div`
    display:flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width:770px){
        display:none;
    }
`

export const NavBtn = styled.nav`
    display:flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width:770px){
        display:none;
    }
`

export const NavBtnLink = styled(Link) `
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    border:none;
    wrap: no-wrap;
    outline: none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    margin-left:24px;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }

`
