import styled from 'styled-components';
import palette from './palette';

const Head = styled.header `
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: ${props => props.background};
  color: ${props => props.color};
  width: 100%;

  @media screen and (min-width: 756px){
    flex-flow: row nowrap;
    justify-content: space-between;

    h1 {
      margin: 0;
      text-align: center;
      font-size: 3rem;
    }
  }
`;

const NavLink = styled.nav `
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  a {
    margin: 0.5rem;
    text-decoration: none;
    color: ${props => props.color};
    font-weight: 600;
  }

  @media screen and (min-width: 756px){
    width: fit-content;

    a {
      font-size: 1.5rem;
    }
  }
`;

const NavSocial = styled.nav `
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
`;

const ExternalLink = styled.a `
  img {
    margin: 1rem;
    width: 5rem;
  }
`;

const Container = styled.main `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  background-color: ${palette.light.secondary};
`;

const Wrapper = styled.article `
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  background-color: ${ props => props.background };
  color: ${ props => props.color };
  padding: 1rem;
  width: 100%;

  @media screen and (min-width: 756px){
    flex-flow: row nowrap;
    padding: 2rem 4rem;
  }
`;

const Block = styled.section `
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  min-width: 50%;
  max-width: 100%;
`;

const Title = styled.h1 `
  font-size: 1.75rem;
  text-align: center;
  margin-bottom: 0.5rem;
  width: 100%;

  @media screen and (min-width: 756px){
    text-align: left;
    font-size: 3rem;
  }
`;

const Subtitle = styled.h2 `
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
  text-align: center;
  width: 100%;

  @media screen and (min-width: 756px){
    text-align: left;
    font-size: 2.5rem;
  }
`;

const Paragraph = styled.p `
  font-size: 0.875rem;
  text-align: center;

  a {
    color: ${props => props.color};
    font-weight: 600;
    text-decoration: none;
    
    :hover {
      color: ${palette.light.accent};
    }
  }

  strong {
    color: ${palette.light.accent};
  }

  @media screen and (min-width: 756px){
    font-size: 1.5rem;
    text-align: left;
    width: 100%;
  }
`;

const Card = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  width: 50%;

  @media screen and (min-width: 756px){
    max-width: 25%;

    ${Title}, ${Paragraph} {
      text-align: center;
    }
  }
`;

const Image = styled.img `
  width: 75%;
  max-width: 25rem;
`;

const Foot = styled.footer `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: ${props => props.background};
  color: ${props => props.color};
  width: 100%;

  @media screen and (min-width: 756px){
    ${Paragraph} {
      text-align: center;
    }
  }
`;

export {
  Head,
  NavLink,
  NavSocial,
  ExternalLink,
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
