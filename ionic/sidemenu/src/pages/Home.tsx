import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
  } from '@ionic/react';
import { book, build, colorFill, grid } from 'ionicons/icons';
import React from 'react';
import './Home.css';
import Card from './../components/Card'

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Walleg</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Card title="Checar Produto" description="ole" picture="product-barcode.jpg" />
        <Card title="Checar Pedido" description="ole" picture="order-check.jpg" />
        <Card title="Entrada NF-e" description="ole" picture="nfe.jpg" />
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
