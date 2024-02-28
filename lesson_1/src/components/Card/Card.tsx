import React from 'react';
import type { FC } from 'react';

import { cnCard } from './Card.classname';

import './Card.css';

type CardProps = {
   image?: string;
   title?: string;
   subtitle?: string;
   icon?: string; 
   price?: string;
   oldPrice?: string;
   rating?: string;
}

const Card: FC<CardProps> = ({image, title, subtitle, icon, price, rating, oldPrice}) => {
  return (
    <div className={cnCard()}>
       <img className={cnCard('Image')} src={image} alt="" />
       <div className={cnCard('Desc')}>
       <h4 className={cnCard('Title')}>{title}</h4>
       <p className={cnCard('Rating')}>{rating} <img className={cnCard('Icon')} src={icon} alt="" />{subtitle}</p>
       <p className={cnCard('Price')}>{price} <span className={cnCard('OldPrice')}>{oldPrice}</span></p>
       </div>
    </div>
  );
}

export { Card };