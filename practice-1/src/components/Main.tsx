import React from 'react';
import { UserMap } from './UserMap';
import { UserAddress } from '../types';

type UserAddressPreview = Pick<UserAddress, 'geo'>;
interface UserGeoProps {
  userGeoInfo: UserAddressPreview;
}

export const Main = ({ userGeoInfo: { geo } }: UserGeoProps) => {
  return (
    <div style={{ backgroundColor: 'lightcoral', padding: 10 }}>
      <h1 style={{ fontFamily: 'monospace' }}>Component: MAIN</h1>
      <UserMap userGeoInfo={geo} />
    </div>
  );
};
