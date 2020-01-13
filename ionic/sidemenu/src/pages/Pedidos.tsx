import { IonList, IonItem, IonHeader, IonToolbar, IonButtons, IonMenuButton,  IonTitle, IonButton, IonContent, IonPage } from '@ionic/react';

import React from 'react';
import './Pedidos.css';

const load = () => {
  const url = 'https://8biizghzr4.execute-api.us-west-2.amazonaws.com/production/pedido'
  fetch(url)
    .then((result) => result.json())
    .then((result) => console.log(result))
}

const Pedidos: React.FC = () => {
  load()
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Pedidos</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent>
        <IonList>
          <IonItem>
            Pokémon Yellow
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};


export default Pedidos;
