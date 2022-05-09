import React from 'react'
import {
    SidebarContainer,
    Icon,
    SidebarWrapper,
    ClosedIcon, 
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './sidebarelements'

const Sidebar = () => {
  return (
    <SidebarContainer>
        <Icon>
            <ClosedIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="home">
                    Home
                </SidebarLink>
                <SidebarLink to="properties">
                    Our Properties
                </SidebarLink>
                <SidebarLink to="agents">
                    Agents
                </SidebarLink>
                <SidebarLink to="blogs">
                    Blogs
                </SidebarLink>
                <SidebarLink to="sign-in">
                SignUp/Log In
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/contact us">Contact Us</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar