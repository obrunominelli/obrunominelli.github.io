import React from 'react';
import { Head, Title } from '../styles';
import palette from '../styles/palette';

function Header() {
  return (
    <Head
      background={ palette.light.secondary }
      color={ palette.light.primary }
    >
      <Title>{ `</bruno minelli>` }</Title>
    </Head>
  );
};

export default Header;
