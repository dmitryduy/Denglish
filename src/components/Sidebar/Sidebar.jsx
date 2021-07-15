import React from "react";

import styled from "styled-components";

import logo from "../../images/logo.png";

const SidebarContainer = styled.aside`
  position: fixed;
  padding: 10px 0;
  width: 90px;
  text-align: center;
  top: 0;
  bottom: 0;
  background-color: #00adb5;
`;

const Logo = styled.img.attrs({
    src: logo,
    alt: "logo"
})`
  width: 90px;
  height:90px;
  margin-bottom: 50px;
`;

const NavigationMenu = styled.ul`
display: flex;
  flex-direction: column;
`;

const MenuItem = styled.li`
margin-top: 30px;
  cursor: pointer;
  position: relative;
  &::before {
    position: absolute;
    content: ${props => props.name};
    right: 0;
    font-size: 14px;
    transform: translateX(80%);
    background-color: #333;
    padding: 5px 15px;
    color: #fff;
    border-radius: 50% 2px 2px 50%;
    opacity: 0;
    visibility: hidden;
    transition:  .3s;
  }
  &:hover::before {
    opacity: 1;
    visibility: visible;
    transform: translateX(110%);
  }
  svg {
    width: 50px;  
  }
`;

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Logo/>
            <nav className="sidebar__navigation">
                <NavigationMenu className="sidebar__list">
                    <MenuItem name="'Слова'" className="sidebar__item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="65" height="42" viewBox="0 0 65 42">
                            <g fill="#333" fillRule="nonzero">
                                <path
                                    d="M17.105 23.947h30.79v-6.842h-30.79v6.842zm34.21-10.263v13.684h-37.63V13.684h37.63z"/>
                                <path
                                    d="M10.263 5.132v30.79a1.71 1.71 0 1 0 3.421 0V5.131a1.71 1.71 0 1 0-3.42 0zM11.973 0a5.132 5.132 0 0 1 5.132 5.132v30.79a5.132 5.132 0 0 1-10.263 0V5.131A5.132 5.132 0 0 1 11.974 0zM53.026 3.421a1.71 1.71 0 0 0-1.71 1.71v30.79a1.71 1.71 0 1 0 3.42 0V5.131a1.71 1.71 0 0 0-1.71-1.71zm0-3.421a5.132 5.132 0 0 1 5.132 5.132v30.79a5.132 5.132 0 1 1-10.263 0V5.131A5.132 5.132 0 0 1 53.026 0z"/>
                                <path
                                    d="M3.421 11.974v17.105a1.71 1.71 0 0 0 3.421 0V11.974a1.71 1.71 0 1 0-3.42 0zm1.71-5.132a5.132 5.132 0 0 1 5.132 5.132v17.105a5.132 5.132 0 0 1-10.263 0V11.974a5.132 5.132 0 0 1 5.132-5.132zM59.868 10.263a1.71 1.71 0 0 0-1.71 1.71V29.08a1.71 1.71 0 0 0 3.42 0V11.974a1.71 1.71 0 0 0-1.71-1.71zm0-3.42A5.132 5.132 0 0 1 65 11.972V29.08a5.132 5.132 0 0 1-10.263 0V11.974a5.132 5.132 0 0 1 5.131-5.132z"/>
                            </g>
                        </svg>
                    </MenuItem>
                    <MenuItem name="'Словарь'" className="sidebar__item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <path fill="#333"
                                  d="M3.759 12.765a.75.75 0 0 1-.75-1.3l15.445-8.917a.75.75 0 0 1 .75 1.299L3.76 12.765zM14.39 2.625a.75.75 0 0 1 .342-1.46l4.645 1.085a.75.75 0 0 1 .547.947l-1.383 4.566a.75.75 0 1 1-1.435-.435l1.15-3.8-3.866-.903zM4.74 19.8H7.7a2 2 0 0 1 2 2v7.02a2 2 0 0 1-2 2H4.74a2 2 0 0 1-2-2V21.8a2 2 0 0 1 2-2zm9.86-6.96h2.96a2 2 0 0 1 2 2v13.98a2 2 0 0 1-2 2H14.6a2 2 0 0 1-2-2V14.84a2 2 0 0 1 2-2zm9.86-7.54h2.96a2 2 0 0 1 2 2v21.52a2 2 0 0 1-2 2h-2.96a2 2 0 0 1-2-2V7.3a2 2 0 0 1 2-2z"/>
                        </svg>
                    </MenuItem>
                    <MenuItem name="'Да-нет'" className="sidebar__item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="73" height="41" viewBox="0 0 73 41">
                            <g fill="#333" fillRule="nonzero">
                                <path
                                    d="M35.106 28.778L36.5 26.33l1.394 2.448a16.84 16.84 0 0 0 14.653 8.524c9.305 0 16.848-7.543 16.848-16.849 0-9.305-7.543-16.848-16.848-16.848a16.84 16.84 0 0 0-14.653 8.523L36.5 14.577l-1.394-2.449a16.84 16.84 0 0 0-14.653-8.523c-9.305 0-16.848 7.543-16.848 16.848 0 9.306 7.543 16.85 16.848 16.85a16.84 16.84 0 0 0 14.653-8.525zM20.453 40.512C9.376 40.512.395 31.532.395 20.453.395 9.376 9.375.395 20.453.395A20.037 20.037 0 0 1 36.5 8.415 20.037 20.037 0 0 1 52.547.395c11.077 0 20.058 8.98 20.058 20.058s-8.98 20.059-20.058 20.059a20.037 20.037 0 0 1-16.047-8.02 20.037 20.037 0 0 1-16.047 8.02zm17.441-10.145l-2.788-1.589a16.763 16.763 0 0 0 2.196-8.325c0-2.962-.764-5.809-2.196-8.325l2.788-1.588a19.972 19.972 0 0 1 2.618 9.913c0 3.523-.911 6.917-2.618 9.914z"/>
                                <path d="M58.163 12.568l2.27 2.27L46.93 28.338l-2.27-2.27z"/>
                                <path d="M44.66 14.837l2.27-2.27L60.432 26.07l-2.27 2.27z"/>
                                <g>
                                    <path d="M29.28 14.173l2.268 2.269-11.897 11.897-2.27-2.27z"/>
                                    <path d="M10.16 20.453l2.27-2.269 7.886 7.886-2.27 2.27z"/>
                                </g>
                            </g>
                        </svg>
                    </MenuItem>
                </NavigationMenu>
            </nav>
        </SidebarContainer>
    )
}

export default Sidebar;