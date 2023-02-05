import React from 'react';
import { UserAddress } from '../types';

interface AsideProps {
  userAddressInfo: UserAddress;
}
type AsidePropsPreview = Omit<AsideProps, 'geo'>;

export const Aside = ({
  userAddressInfo: { street, suite, city, zipcode },
}: AsidePropsPreview) => {
  return (
    <aside style={{ backgroundColor: 'violet', padding: 10 }}>
      <h1 style={{ fontFamily: 'monospace' }}>Component: ASIDE</h1>
      <p>
        {street} street, {suite}.
      </p>
      <p>
        {zipcode}, {city}
      </p>
    </aside>
  );
};
