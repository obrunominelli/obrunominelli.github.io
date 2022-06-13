import React from 'react';
import { Foot, Paragraph } from '../styles';
import palette from '../styles/palette';

function Footer() {
  return (
    <Foot
      background={ palette.light.secondary }
      color={ palette.light.primary }
    >
      <Paragraph>Bruno Minelli&copy; | Desenvolvedor Web</Paragraph>
      <Paragraph>Todos os direitos reservados.</Paragraph>
    </Foot>
  );
};

export default Footer;
