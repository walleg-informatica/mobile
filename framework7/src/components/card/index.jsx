import React from 'react';
import {
  Link,
  Card,
  CardHeader,
  CardContent,
  CardFooter
} from 'framework7-react';
import './card.scss'

const card = ({ title, description, picture }) => (
  <a href="/pedidos/">
    <Card className="card">
        <img src={`static/${picture}`} className="card__image" />
      <div className="card__content">
        <div className="card__content__title">{title}</div>
      </div>
    </Card>
  </a>
);

export default card;
