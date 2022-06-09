import React from 'react';
import { Link } from 'react-router-dom';
import { Head, NavLink, Title } from '../styles';

function Header() {
  return (
    <Head>
      <Title>{`</bruno minelli>`}</Title>
      <NavLink>
        <Link to='/'>Home</Link>
        <Link to='/projects'>Projetos</Link>
        <Link to='/about'>Sobre</Link>
        <Link to='/contact'>Contato</Link>
      </NavLink>
    </Head>
  )
}

export default Header;
