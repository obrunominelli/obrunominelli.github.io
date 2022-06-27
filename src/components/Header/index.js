import React, { useContext } from 'react'
import AppContext from '../../store/context';
import { Button } from '../Buttons/styles';
import Container from './styles';

function Header() {
  const { appTheme, setAppTheme } = useContext(AppContext);
  return (
    <Container>
      <h1>{ '</bruno minelli>' }</h1>
      <Button onClick={() => setAppTheme(!appTheme)}>Theme</Button>
    </Container>
  );
};

export default Header;