import React from 'react';
import type { FC } from 'react';

import { cnSection } from './Section.classname';

import './Section.css'

type SectionProps = {
  text?: string;
  white?: boolean;
  black?: boolean;
  className?: string;
}

const Section: FC<SectionProps> = ({text, white, black, className}) => {
  return (
    <div className={cnSection({className})}>
      <button className={cnSection({white, black})}>{text}</button>
    </div>
  );
}

export { Section };