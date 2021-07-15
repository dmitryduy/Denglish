import React from "react";

import styled from "styled-components";
import Profile from "../Profile/Profile";

const HeaderContainer = styled.header`
position: fixed;
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px 10px 0;
  left: 90px;
  right: 0;
  box-shadow: 0 0 12px 0 rgba(34, 60, 80, 0.2);
`;

const AddButton = styled.button`
  font-family: 'Noto Sans', sans-serif;
  padding: 10px 40px;
  background-color: #D235D2;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 7px 5px -2px rgba(210, 53, 210, 0.2);
  cursor: pointer;
  font-size: 14px;
  transition: transform .4s;
  &:hover {
    transform: scale(1.02);
  }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <AddButton>Добавить слово</AddButton>
            <Profile/>
        </HeaderContainer>
    )
}

export default Header;