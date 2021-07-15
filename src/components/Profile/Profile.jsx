import React from "react";

import styled from "styled-components";
import {useSelector} from "react-redux";

import avatar from "../../images/avatar.jpg";


const ProfileContainer = styled.div`
  display: flex;
  margin-left: 40px;
  align-items: center;
`;

const ProgressBar = styled.div`
  width: 200px;
  border-radius: 5px; 
  height: 12px;
  background-color: rgba(142,241,60, .4);
  margin-bottom: 5px;
  position: relative;
  cursor: pointer;
  font-size: 12px;
  font-family: 'IBM Plex Mono', monospace;
  &::before {
    content: '';
    position: absolute;
    width: ${props => props.progress}%;
    height: 12px;
    border-radius: 5px;
    left: 0;
    top: 0;
    background-color: #00adb5;
    opacity: .6;
  }
  &::after {
    content: '${props=> props.points}/${props => props.total}';
    position: absolute;
    top: -2px;
    transform: translateX(-50%);
    color: #fff;
    left: 50%;
    z-index: 10;
  }
 
`;

const Level = styled.p`
  font-family: 'IBM Plex Mono', monospace;
  font-weight: bold;
  font-size: 17px;
  span {
    font-weight: 300;
    cursor: pointer;
    transition: color .1s;
    &:hover {
      color: #D25FD2;
      border-bottom: 1px solid #888;
    }
  }
`;

const Avatar = styled.img.attrs({
    src: avatar,
    alt: "avatar"
})`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 20px;
  cursor: pointer;
  
`;

const Profile = () => {
    const {levelName, currentPoints, totalPoints} = useSelector(({profile}) => ({...profile}));

    return (
        <ProfileContainer>
            <div className="profile__level">
                <ProgressBar points={currentPoints} total={totalPoints} progress={(currentPoints / totalPoints) * 100}/>
                <Level>Level: <span>{levelName}</span></Level>
            </div>
            <Avatar/>
        </ProfileContainer>
    )
}

export default Profile;