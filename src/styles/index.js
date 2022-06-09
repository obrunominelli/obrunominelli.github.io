import styled from 'styled-components';
import palette from './palette';

const Head = styled.header `
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  background-color: ${palette.light.secondary};
  padding: 1rem;
`;

const NavLink = styled.nav `
  & a {
    margin: 0.5rem;
  }
`;

const NavSocial = styled.nav ``;

const Container = styled.main `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin: auto;
  background-color: ${palette.light.secondary};
  width: 100vw;

  @media screen and (min-width: 1200px) {
    width: 80vw;
  }
`;

const Wrapper = styled.article `
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 2rem auto;
`;

const Block = styled.section `
  min-width: 50%;
  max-width: 100%;
`;

const Card = styled.div `
  width: 10rem;
  max-width: 50%;
`;

const Title = styled.h1 `
  font-size: 1.5rem;
  text-align: center;
  margin: 0.25rem;
  width: 100%;
`;

const Subtitle = styled.h2 `
  font-size: 1.25rem;
  text-align: center;
  margin: 0.25rem;
  width: 100%;
`;

const Paragraph = styled.p `
  font-size: 1rem;
  text-align: center;
`;

const Image = styled.img ``;


const Foot = styled.header `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export {
  Head,
  NavLink,
  NavSocial,
  Container,
  Wrapper,
  Block,
  Card,
  Title,
  Subtitle,
  Paragraph,
  Image,
  Foot,
};
