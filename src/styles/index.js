import styled from 'styled-components';
import palette from './palette';



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
    font-size: 1.25rem;
    font-weight: 600;
    transition: 0.5s;

    :hover {
      color: ${ palette.light.accent };
    };
  };

  @media screen and (min-width: 768px) {
    width: fit-content;
  };

  @media screen and (min-width: 1280px) {
    a {
      font-size: 2rem;
    };
  };
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
  };

  img {
    padding: 0.25rem;
    width: 4rem;
  };

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
  padding: 0.5rem 1rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 2rem 4rem;
  };

  @media screen and (min-width: 1920px) {
    padding: 4rem 8rem;
  };
`;

const Section = styled.section `
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    align-items: center;
    flex-flow: row nowrap;
  };
`;

const Block = styled.div `
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Title = styled.h1 `
  color: ${ props => props.color };
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 0.5rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    text-align: left;
    font-size: 1.75rem;
  }

  @media screen and (min-width: 1280px) {
    font-size: 3rem;
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
  }; 

  @media screen and (min-width: 1280px) {
    font-size: 1.75rem;
  }

  @media screen and (min-width: 1920px) {
    font-size: 2.75rem;
  }
`;

const Paragraph = styled.p `
  font-size: 1.25rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
  color: ${props => props.color};

  a {
    color: ${ props => props.color };
    font-weight: 600;
    text-decoration: none;
    transition: 0.5s;
    
    :hover {
      color: ${ palette.light.accent };
    };
  };

  strong {
    color: ${ palette.light.accent };
  };

  @media screen and (min-width: 768px) {
    text-align: left;
  };

  @media screen and (min-width: 1920px) {
    font-size: 2rem;
  };
`;

const Card = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  color: ${ palette.light.primary };
  padding: 2rem 4rem;
  height: 10rem;
  transition: 1s;
  width: 50%;

  ${Paragraph} {
    margin: 0;
  };

  :hover {
    background-color: ${ palette.light.accent };
    color: ${ palette.light.secondary };
  };

  @media screen and (min-width: 768px) {
    width: 25%;
    
    ${Title}, ${Paragraph} {
      text-align: center;
    };
  };
`;

const Image = styled.img `
  padding: 1.5rem;
  min-width: 40%;
  max-width: 100%;
`;

const Head = styled.header `
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background-color: ${ props => props.background };
  color: ${ props => props.color };
  width: 100%;

  ${Title} {
    margin: 0;
    font-size: 2rem;
    white-space: nowrap;
    overflow: hidden;
  };

  @media screen and (min-width: 768px) {
    padding: 2rem 4rem;

    ${Title} {
      margin: 0;
      text-align: center;
      font-size: 2.25rem;
    };
  };

  @media screen and (min-width: 1280px) {
    ${Title} {
      font-size: 3rem;
    };
  };

  @media screen and (min-width: 1920px) {
    padding: 4rem 8rem;

    ${Title} {
      font-size: 3.5rem;
    };
  };
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
  Title,
  Subtitle,
  Paragraph,
  Image,
  Foot,
};
