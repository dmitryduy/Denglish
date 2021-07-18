import React from "react";

import styled from "styled-components";
import AuthWayButton from "../AuthWayButton/AuthWayButton";

const Switch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    p {
      font-size: 14px;
    }
  }
`;

const SwitchWayAuth = ({text, buttonText, to}) => {
    return (
        <Switch>
            <p>{text}</p>
            <AuthWayButton to={to}>{buttonText}</AuthWayButton>
        </Switch>
    )
}

export default SwitchWayAuth;