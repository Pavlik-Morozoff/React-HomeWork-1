import React from 'react';
import type { FC } from 'react';

import { cnButton } from './Button.classname';

import './Button.css'

type ButtonProps = {
  text: string;
  white?: boolean;
  black?: boolean;
  secondary?: boolean;
  className?: string;
}

const Button: FC<ButtonProps> = ({text, white, black, className, secondary}) => {
  return (
    <div className={cnButton('Block', {secondary})}>
      <button className={cnButton({white, black})}>{text}</button>
    </div>
  );
}

export { Button };