import React from 'react';
import { UserCompany } from '../types';

interface FooterProps {
  userCompanyInfo: UserCompany;
}

export const Footer = ({
  userCompanyInfo: { bs, catchPhrase, name },
}: FooterProps) => {
  return (
    <footer style={{ backgroundColor: 'coral', padding: 10 }}>
      <h1 style={{ fontFamily: 'monospace' }}>Component: FOOTER</h1>

      <blockquote>
        {bs}====={catchPhrase}======{name}
      </blockquote>
    </footer>
  );
};
