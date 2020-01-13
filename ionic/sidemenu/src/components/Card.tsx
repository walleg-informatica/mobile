import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import React from 'react';
import './Card.css'

interface CardProps {
  title: string;
  description: string;
  picture: string;
}

const Card: React.FunctionComponent<CardProps> = ({ title, description, picture }) => (
  <IonCard className="card">   
    <img src={`assets/${picture}`} className="card__image" />
    <div className="card__content">
      <div className="card__content__title">{title}</div>
    </div>
  </IonCard>
);

export default Card;
