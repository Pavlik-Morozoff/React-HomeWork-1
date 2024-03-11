import React from 'react';
import type { FC } from 'react';

import { cnCard } from './Card.classname';

import './Card.css';

type CardProps = {
   image: string;
   title: string;
   subtitle?: string;
   icon?: string; 
   price: string;
   oldPrice?: string;
   rating: string;
   prices: boolean;
}

const Card: FC<CardProps> = ({image, title, subtitle, icon, price, rating, oldPrice, prices}) => {
  return (
    <div className={cnCard()}>
       <img className={cnCard('Image')} src={image} alt="" />
       <div className={cnCard('Desc')}>
       <h4 className={cnCard('Title')}>{title}</h4>
       <p className={cnCard('Rating')}>{rating} <img className={cnCard('Icon')} src={icon} alt="" />
          {subtitle ? subtitle : 'Товара нет в наличии'}
       </p>
          <div className={cnCard('Wrapper')}>
            <p className={cnCard('Price')}>{price}</p>
            {oldPrice ? <p className={cnCard('OldPrice')}>{oldPrice}</p> : undefined}
          </div>
       </div>
    </div>
  );
}

export { Card };