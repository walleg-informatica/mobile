import { IonList, IonItem, IonHeader, IonToolbar, IonButtons, IonMenuButton,  IonTitle, IonButton, IonContent, IonPage } from '@ionic/react';

import React from 'react';
import './Pagamentos.css';

const ListPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Pagamentos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div className="pagamento">
        <div className="pagamento__item">
          <div className="pagamento__item__title">Início</div>
          <div className="pagamento__item__input">
            <input type="date"></input>
          </div>
        </div>
        <div className="pagamento__item">
          <div className="pagamento__item__title">Fim</div>
          <div className="pagamento__item__input">
            <input type="date"></input>
          </div>
        </div>
        <IonButton expand="block">Pesquisar</IonButton>
      </div>
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


export default ListPage;
