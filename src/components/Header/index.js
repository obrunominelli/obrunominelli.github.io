import React, { useContext } from 'react'
import { theme } from '../../assets/icons';
import AppContext from '../../store/context';
import Container from './styles';

function Header() {
  const { appTheme, setAppTheme } = useContext(AppContext);
  const { dark, light } = theme;
  return (
    <Container>
      <h1>{ '</bruno minelli>' }</h1>
      <img
        src={ appTheme ? dark.src : light.src }
        alt={ appTheme ? dark.alt : light.alt }
        onClick={() => setAppTheme(!appTheme)}
      />
    </Container>
  );
};

export default Header;