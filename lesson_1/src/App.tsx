import React from 'react';

import { Section } from './components/Section/Section'; 
import { Profile } from './components/Profile/Profile';
import { Card } from './components/Card/Card';

import './App.css';

const App = () => {
  return (
    <div className="App">
       <h2>Группа кнопок на рукаве</h2>
      <div className='Block-Buttons'>
        <Section text='Hello' black />
        <Section text='Hello' white />
        <Section text='Hello' className='second' white />
        <Section text='Hello' className='second' black />
      </div>

      <h2>
        Простопрофиля
        <Profile/>
      </h2>
      <h2>
        Этовары
        <Card 
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
