import React from 'react';

import { Button } from './components/Button/Button'; 
import { Profile } from './components/Profile/Profile';
import { Card } from './components/Card/Card';

import './App.css';

const App = () => {
  return (
    <div className="App">
       <h2>Группа кнопок на рукаве</h2>
      <div className='Buttons'>
        <Button text='Hello' black />
        <Button text='Hello' white />
        <Button text='Hello' white secondary/>
        <Button text='Hello' black secondary/>
      </div>

      <h2>
        Простопрофиля
        <Profile title button/>
      </h2>
      <h2>
        Этовары
        <Card prices
        image="./image/first-aid.png"
        title="Портативная Медицинская сумка"
        rating="4.7"
        icon="./image/Rating.svg"
        subtitle='123 купили'
        price='1450 P'
        oldPrice='1645 P'
        />
      </h2>
    </div>
  );
}

export { App };
