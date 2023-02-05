import React from 'react';

interface HeaderProps {
    userName: string;
    email: string;
    name: string;
}

export const Header = ({ userName, email, name }: HeaderProps) => {
    return (
        <header style={{ backgroundColor: 'orange', padding: 10 }}>
            <h1 style={{ fontFamily: 'monospace' }}>Component: HEADAER</h1>
            <h2>User Name: {userName}</h2>
            <h2>Name: {name}</h2>
            <address>email: {email}</address>
        </header>
    );
};
