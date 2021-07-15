import React from "react";

import styled from "styled-components";

const AddButtonContainer = styled.button`
  position: relative;
  font-family: 'Noto Sans', sans-serif;
  padding: 10px 40px;
  background-color: #D235D2;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 7px 5px -2px rgba(210, 53, 210, 0.2);
  cursor: pointer;
  font-size: 14px;

`;

const AddButton = ({showPopup}) => {

    const mouseDown = (e) => {
        e.target.style.transform = 'scale(0.98)';
    }

    const mouseUp = (e) => {
        e.target.style.transform = 'scale(1)';
    }

    return <AddButtonContainer onClick={showPopup} onMouseDown={mouseDown} onMouseUp={mouseUp}><span></span>Добавить слово</AddButtonContainer>

}

export default AddButton;