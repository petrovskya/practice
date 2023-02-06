import React from 'react';
import { UserMap } from './UserMap';
import { UserGeo } from '../types';

interface MainProps {
  userLocation: UserGeo;
}

export const Main = ({ userLocation }: MainProps) => {
  return (
    <div style={{ backgroundColor: 'lightcoral', padding: 10 }}>
      <h1 style={{ fontFamily: 'monospace' }}>Component: MAIN</h1>
      <UserMap userGeoInfo={userLocation} />
    </div>
  );
};
