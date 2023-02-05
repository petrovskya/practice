import React from 'react';
import { Aside } from './components/Aside';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { User } from './types';

export const App = () => {
  const user: User = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 300px',
        gridTemplateRows: '1fr 200px',
      }}
    >
      <Header name={user.name} userName={user.username} email={user.email} />
      <Main userGeoInfo={user.address} />
      <Aside userAddressInfo={user.address} />
      <Footer userCompanyInfo={user.company} />
    </div>
  );
};
