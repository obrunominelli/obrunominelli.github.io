import styled from 'styled-components';
import palette from './palette';

const Head = styled.header `
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background-color: ${ props => props.background };
  color: ${ props => props.color };
  width: 100%;

  h1 {
    margin: 0;
    font-size: 2rem;
    width: fit-content;
  }
  
  @media screen and (min-width: 768px) {
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 2rem 4rem;

    h1 {
      margin: 0;
      text-align: center;
      font-size: 3rem;
    }
  }

  @media screen and (min-width: 1280px) {
    h1 {
      font-size: 3.5rem;
    }
  }

  @media screen and (min-width: 1920px) {
    padding: 4rem 8rem;
    h1 {
      font-size: 4rem;
    }
  }
`;

const NavLink = styled.nav `
  display: flex;
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

  @media screen and (min-width: 768px) {
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
  width: 100%;
`;

const ExternalLink = styled.a `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;

  img {
    padding: 0.5rem;
    min-width: 2.5rem;
  }
`;

const Container = styled.main `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  background-color: ${ palette.light.secondary };
`;

const Wrapper = styled.article `
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  background-color: ${ props => props.background };
  color: ${ props => props.color };
  padding: 1rem 2rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-flow: row nowrap;
    padding: 2rem 4rem;
  }

  @media screen and (min-width: 1920px) {
    padding: 4rem 8rem;
  }
`;

const Section = styled.section `
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-flow: row nowrap;
  }

  @media screen and (min-width: 1280px) {
    width: 85%;
  }

  @media screen and (min-width: 1920px) {
    width: 75%;
  }
`;

const Block = styled.div `
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

  @media screen and (min-width: 768px) {
    text-align: left;
    font-size: 1.75rem;
  }

  @media screen and (min-width: 1280px) {
    font-size: 2.75rem;
  }

  @media screen and (min-width: 1920px) {
    font-size: 3.5rem;
  }
`;

const Subtitle = styled.h2 `
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
  text-align: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    text-align: left;
    font-size: 1.25rem;
  }

  @media screen and (min-width: 1280px) {
    font-size: 2.5rem;
  }

  @media screen and (min-width: 1920px) {
    font-size: 3rem;
  }
`;

const Paragraph = styled.p `
  font-size: 0.875rem;
  text-align: center;
  margin-bottom: 0.5rem;
  color: ${props => props.color};

  a {
    color: ${ props => props.color };
    font-weight: 600;
    text-decoration: none;
    
    :hover {
      color: ${ palette.light.accent };
    }
  }

  strong {
    color: ${ palette.light.accent };
  }

  @media screen and (min-width: 768px) {
    font-size: 0.875rem;
    text-align: left;
    width: 100%;
  }

  @media screen and (min-width: 1280px) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 1920px) {
    font-size: 2rem;
  }
`;

const Card = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  padding: 1rem;
  width: 50%;

  @media screen and (min-width: 768px) {
    max-width: 25%;

    ${Title}, ${Paragraph} {
      text-align: center;
    }
  }
`;

const Image = styled.img `
  padding: 1.5rem;
  min-width: 50%;
  max-width: 100%;
`;

const Foot = styled.footer `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background-color: ${ props => props.background };
  color: ${props => props.color};
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 2rem 4rem;

    ${Paragraph} {
      text-align: center;
      font-weight: 600;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 2rem 4rem;
  }

  @media screen and (min-width: 1920px) {
    padding: 4rem 8rem;
  }
`;

export {
  Head,
  NavLink,
  NavSocial,
  ExternalLink,
  Container,
  Wrapper,
  Section,
  Block,
  Card,
  Title,
  Subtitle,
  Paragraph,
  Image,
  Foot,
};
