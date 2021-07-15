import React, {useRef} from "react";

import styled from "styled-components";

import Profile from "../Profile/Profile";
import AddButton from "../AddButton/AddButton";
import AddWordPopup from "../AddWordPopup/AddWordPopup";

const HeaderContainer = styled.header`
position: fixed;
  z-index: 10;
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px 10px 0;
  left: 90px;
  right: 0;
  background-color: white;
  box-shadow: 0 0 12px 0 rgba(34, 60, 80, 0.4);
`;


const Header = () => {
    const popupRef = useRef();

    const showPopup = () => {
        popupRef.current.classList.toggle('appear');
    }

    return (
        <>
            <AddWordPopup popupRef={popupRef}/>
            <HeaderContainer>
                <AddButton showPopup={showPopup}/>
                <Profile/>
            </HeaderContainer>
        </>
    )
}

export default Header;