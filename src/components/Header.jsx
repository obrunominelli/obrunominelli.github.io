import React from 'react';
import { Link } from 'react-router-dom';
import { Head, NavLink, Title } from '../styles';
import palette from '../styles/palette';

function Header() {
  return (
    <Head
      background={ palette.light.secondary }
      color={ palette.light.primary }
    >
      <Title>{ `</bruno minelli>` }</Title>
      <NavLink color={ palette.light.primary }>
        <Link to='/'>Home</Link>
        <Link to='/projects'>Projetos</Link>
        <Link to='/about'>Sobre</Link>
        <Link to='/contact'>Contato</Link>
      </NavLink>
    </Head>
  )
}

export default Header;
