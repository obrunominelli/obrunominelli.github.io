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
    justify-content: center;
    padding: 2rem 4rem;

    h1 {
      margin: 0;
      text-align: center;
      font-size: 2.5rem;
    }
  }

  @media screen and (min-width: 1280px) {
    justify-content: space-between;
    h1 {
      font-size: 3rem;
    }
  }

  @media screen and (min-width: 1920px) {
    padding: 4rem 8rem;

    h1 {
      font-size: 3.5rem;
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
    font-size: 1.5rem;
    font-weight: 600;
    transition: 0.5s;

    :hover {
      color: ${ palette.light.accent };
    }
  }

  @media screen and (min-width: 768px) {
    width: fit-content;
  }

  @media screen and (min-width: 1280px) {
    a {
      font-size: 2rem;
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
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  color: ${ props => props.color };
  transition: 0.5s;

  :hover {
    color: ${ palette.light.accent };
  }

  img {
    padding: 0.5rem;
    width: 5rem;
  }

  @media screen and (min-width: 768px) {
    img {
      width: 5rem;
    }
  }

  @media screen and (min-width: 1280px) {
    font-size: 1.25rem;
    img {
      width: 7.5rem;
    }
  }

  @media screen and (min-width: 1920px) {
    font-size: 2rem;
    img {
      width: 10rem;
    }
  }

`;

const Container = styled.main `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  background-color: ${ palette.light.secondary };
  width: 100%;
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
    width: 90%;
  }

  @media screen and (min-width: 1920px) {
    width: 85%;
  }
`;

const Block = styled.div `
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: center;
  min-width: 50%;
  max-width: 100%;
`;

const Title = styled.h1 `
  color: ${ props => props.color };
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
  color: ${ props => props.color };
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
  margin-bottom: 0.5rem;
  color: ${props => props.color};

  a {
    color: ${ props => props.color };
    font-weight: 600;
    text-decoration: none;
    transition: 0.5s;
    
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
  }

  @media screen and (min-width: 1280px) {
    font-size: 1.25rem;
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

  ${Paragraph} {
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    max-width: 25%;

    ${Title}, ${Paragraph} {
      text-align: center;
    }
  }
`;

const Dropdown = styled(Card) `
  border: 0.0625rem solid ${palette.light.primary};
  margin: 0.5rem;
  padding: 0.5rem;
  width: 45%;
  transition: 1s;
  
  ${Block} {
    display: none;
    padding: 1rem;
    top: 3.75rem;
    transform: 1s;
  }

  ${Paragraph} {
    text-align: left;
  }

  :hover {
    color: ${palette.light.secondary};
    background-color: ${palette.light.primary};
    cursor: pointer;

    ${Paragraph} {
      color: ${palette.light.secondary};
    }

    ${Block} {
      display: block;
    }
  }
`;

const Project = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: ${ palette.light.primary };
  border: 0.25rem solid ${ palette.light.primary };
  border-radius: 0.4rem;
  padding: 1rem;
  margin: 0.5rem;
  width: 100%;
  transition: 0.5s;

  ${ Section } {
    justify-content: center;
    width: 100%;
    
    ${ Paragraph } {
      text-align: center;
      margin: 0.5rem;
      width: 45%;
    };
  };
  
  ${Title}, ${Subtitle} {
    text-align: center;
    border-bottom: 0.25rem solid ${palette.light.accent};
    width: fit-content;
  }

  @media screen and (min-width: 768px) {
    justify-content: center;
    width: 45%;
    height: 25rem;

    ${ Section } {
      flex-flow: row wrap;

      ${ Paragraph } {
        width: 40%;
      };
    }

    ${Title}, ${Subtitle} {
      margin-bottom: 0.5rem;
    }
  }

  @media screen and (min-width: 1280px) {
    margin: 1.5rem;
    padding: 2rem;
    width: 45%;
    height: 40rem;

    :hover {
      background-color: ${ palette.light.primary };
      color: ${ palette.light.secondary };
    }

    ${Title}, ${Subtitle} {
      margin-bottom: 1rem;
    }
  }

  @media screen and (min-width: 1920px) {
    width: 45%;
    min-height: 60rem;

    ${Title}, ${Subtitle} {
      margin-bottom: 1.5rem;
    }
  }
`;

const Thumbnail = styled.figure `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

  ${Paragraph} {
    text-align: center;
    font-weight: 600;
  }

  @media screen and (min-width: 768px) {
    padding: 2rem 4rem;

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
  Dropdown,
  Project,
  Title,
  Subtitle,
  Paragraph,
  Thumbnail,
  Image,
  Foot,
};
