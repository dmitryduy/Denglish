import React from "react";

import styled from "styled-components";

const Popup = styled.div`
  position: absolute;

  background-color: #A600A6;
  color: #fff;
  transform: translateY(-100%);
  border-radius: 0 0 20px 20px;
opacity: .8;
  top: 70px;
  right: 30%;
  z-index: 5;
  left: calc(30% + 90px);
  padding: 20px;
  text-align: center;
  transition: transform .2s;

  &.appear {
    transform: translateY(0);
  }
`;

const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 40px;

`;

const Label = styled.label`
  position: absolute;
  pointer-events: none;
  left: 10px;
  top: 10px;
  transition: .4s;
  opacity: .7;
`;

const Input = styled.input.attrs({
    type: 'text',
    required: true,
})`
  padding: 5px 10px;
  background-color: transparent;
  font-size: 20px;
  color: #fff;
  position: relative;
  border-bottom: 2px solid #eee;
  & ~ span::before, & ~ span::after {
    transition: .4s;
      position: absolute;
      content: '';
      bottom: 0;
      width: 0;
      height: 2px;
      background-color: #6C006C;
  }
  & ~ span::before {
    left: 0;
  }
  & ~ span::after {
    right: 0;
  }

  :focus ~ label, :valid ~ label {  
    font-size: 11px;
    top: -15px;
    left: 0;
  }
  &:focus ~ span::before,
  :focus ~ span::after {
    width: 50%;
  }
`;

const AddWordPopup = ({popupRef}) => {
    return (
        <Popup ref={popupRef}>
            <InputWrapper>
                <Input/>
                <span/>
                <Label>Русский</Label>
            </InputWrapper>
            <InputWrapper>
                <Input/>
                <span/>
                <Label>Английский</Label>
            </InputWrapper>
        </Popup>
    )
}

export default AddWordPopup;