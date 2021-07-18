import React from "react";

import styled from "styled-components";

const Label = styled.label`
text-align: left;
  cursor: pointer;
  margin-right: auto;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const CheckBox = styled.input.attrs({
    type: 'checkbox'
})`
  pointer-events: none;
  opacity: 0;
  height: 0;
  width: 0;
  & + span {
    display: inline-block;
    position: relative;
    border-radius: 5px;
    border: 2px solid #00adb5;
    margin-right: 20px;
    width: 20px;
    height: 20px;
  }
  &+ span::before {
    position: absolute;
    content: '';
    width: 10px;
    height: 10px;
    top: 50%;
    left: 50%;
    border-radius: 2px;
    transform: translate(-50%, -50%);
  }
  &:checked + span::before {
    background-color: #00adb5;
  }
  &:focus + span {
    border: 2px solid #000;
  }
`;

const AuthCheckBox = ({checked, onInput}) => {
    return (
            <Label>
                <CheckBox onInput={onInput} checked={checked}/>
                <span/>
                <span>Запомнить меня</span>
            </Label>
    )
}

export default AuthCheckBox;