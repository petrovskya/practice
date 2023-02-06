import React from 'react';
import { User } from '../types';

interface HeaderProps {
  userInfo: Pick<User, 'username' | 'name' | 'email'>;
}

export const Header = ({
  userInfo: { username, email, name },
}: HeaderProps) => {
  return (
    <header style={{ backgroundColor: 'orange', padding: 10 }}>
      <h1 style={{ fontFamily: 'monospace' }}>Component: HEADAER</h1>
      <h2>User Name: {username}</h2>
      <h2>Name: {name}</h2>
      <address>email: {email}</address>
    </header>
  );
};
