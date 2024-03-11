import React from 'react';
import type { FC } from 'react';

import { cnProfile } from './Profile.classname';
import { User } from './User/User';
import { Menu } from './Menu/Menu';

import './Profile.css';

type ProfileProps = {
    text?: string;
    title: boolean;
    button: boolean;
}

const menuItems = [
    {
        id: 1,
        icon: './image/Key.svg',
        text: 'Account',
    },
    {
        id: 2,
        icon: './image/Chat.svg',
        text: 'Chat Settings',
    },
    {
        id: 3,
        icon: './image/Bell.svg',
        text: 'Notifications',
    },
    {
        id: 4,
        icon: './image/Storage.svg',
        text: 'Storage',
    },
    {
        id: 5,
        icon: './image/Help.svg',
        text: 'Help',
    },
    {
        id: 6,
        icon: './image/Invite a friend.svg',
        text: 'Invite a friend',
    },
]

const Profile: FC<ProfileProps> = ({title, button}) => {
  return (
    <div className={cnProfile()}>
       <header className={cnProfile('Header')}>
          <button className={cnProfile('Header', {button})}>&lt;</button>
          <p className={cnProfile('Header' ,{title})}>Profile</p>
       </header>
       <div className={cnProfile('Body')}>
          <User
               userImage='./image/userPhoto.png'
               userName='Jane Doe'
               desc='This is a small bio description to let users express themselves'
               edit='./image/Edit-Button.svg'
          />
          {
            menuItems.map(item => <Menu icon={item.icon} text={item.text} key={item.id + item.text}></Menu>)
          }
          <button className={cnProfile('Logout')}>Logout</button>
       </div>
    </div>
  );
}

export { Profile };