import styled from 'styled-components';

const Container = styled.main `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${ props => props.theme.primary };
  padding: 0.5rem 1rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 1rem 2rem;
  };

  @media screen and (min-width: 1280px) {
    padding: 2rem 4rem;
  };
`;

const Wrapper = styled.article `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 1920px) {
    width: 1280px;
  };
`;

const Section = styled.section `
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-flow: row nowrap;
  };

  @media screen and (min-width: 1280px) {
    justify-content: space-around;
  };
`;

const Division = styled.div `
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 100%;

  p {
    color: ${ props => props.theme.secondary };
    font-size: 0.75rem;
    font-weight: 300;
    line-height: 1.5;
  };

  @media screen and (min-width: 768px) {
    p {
      font-size: 1rem;
    };
  };

  @media screen and (min-width: 1280px) {
    p {
      font-size: 1.5rem;
    };
  };
`;

const Card = styled(Division)`
  flex-direction: column;
  text-align: center;
  width: 25%;

  h1 {
    font-size: 1.5rem;
    color: ${ props => props.theme.accent };
  };

  p {
    font-weight: 700;
  };

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 2.5rem;
    };
  };

  @media screen and (min-width: 1280px) {
    width: fit-content;
    h1 {
      font-size: 3rem;
    };
  };
`;

const Stack = styled(Division)`
  border: 0.0625rem solid ${props => props.theme.accent};
  border-radius: 0.25rem;
  cursor: pointer;
  margin: 1.75rem;
  position: relative;
  transition: 1s;
  width: 100%;

  ${Section} {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
  };

  h2 {
    text-align: center;
  };
  
  p {
    font-weight: 300;
  };

  :hover {
    background-color: ${ props => props.theme.accent };
    border-radius: 0.5rem;

    h2, p {
      color: ${ props => props.theme.primary };
      border-radius: 0.25rem;
    };
  };

  @media screen and (min-width: 1280px) {
    padding: 2rem;
    transition: 2s;
    height: 15rem;
    width: 45%;
  };
`;

const Title = styled.h1`
  color: ${ props => props.theme.accent };
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-align: left;
  };

  @media screen and (min-width: 1280px) {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    text-align: left;
  };
`;

const Subtitle = styled.h2`
  color: ${ props => props.theme.secondary };
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
    text-align: left;
  };

  @media screen and (min-width: 1280px) {
    font-size: 1.75rem;
  };
`;

const Image = styled.img`
  width: 60%;

  @media screen and (min-width: 768px) {
    width: 35%;
  };
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
`;

export { Container, Wrapper, Section, Division, Card, Stack, Title, Subtitle, Image, SocialIcon }