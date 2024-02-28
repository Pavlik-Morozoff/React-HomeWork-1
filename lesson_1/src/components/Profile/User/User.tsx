import React from 'react';
import type { FC } from 'react';

import { cnUser } from './User.classname';

import './User.css';

type UserProps = {
  userImage?: string;
  userName?: string;
  desc?: string;
  edit?: string;
}

const User: FC<UserProps> = ({userImage, userName, desc, edit}) => {
  return (
     <div className={cnUser()}>
         <img className={cnUser('Image')} src={userImage ? userImage : undefined} alt="user image"/>
         <h4 className={cnUser('Name')}>{userName ? userName : 'Укажите ваше имя'}</h4>
         <p className={cnUser('Desc')}>{desc}</p>
         <button className={cnUser('Edit_Button')}><img className={cnUser('Edit_Button_Image')} src={edit ? edit : undefined}/></button>
     </div>
  );
}

export { User };