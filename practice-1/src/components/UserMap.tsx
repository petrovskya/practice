import React from 'react';
import { UserGeo } from '../types';

export interface UserMapProps {
  userGeoInfo: UserGeo;
}

export const UserMap = ({ userGeoInfo: { lat, lng } }: UserMapProps) => {
  return (
    <div style={{ backgroundColor: 'aqua', padding: 10 }}>
      <h1 style={{ fontFamily: 'monospace' }}>Component: USERMAP</h1>
      <p> user latitude: {lat},</p>
      <p> user longitude: {lng}</p>
    </div>
  );
};
