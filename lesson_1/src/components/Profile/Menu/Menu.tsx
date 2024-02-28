import React from 'react';
import type { FC } from 'react';

import { cnMenu } from './Menu.classname';

import './Menu.css';

type MenuProprs = {
   icon?: string;
   text?: string;
}

const Menu: FC<MenuProprs> = ({icon, text}) => {
  return (
    <div className={cnMenu()}>
       <img className={cnMenu('Image')} src={icon ? icon : undefined} alt="" /> <p className={cnMenu('Text')}>{text}</p>
    </div>
  );
}

export { Menu };