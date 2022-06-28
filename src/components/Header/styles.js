import styled from "styled-components";

const Container = styled.header`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h1 {
    font-size: 1rem;
    font-weight: 700;
    color: ${props => props.theme.secondary }
  };

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    a {
      text-decoration: none;
      padding: 1rem;
    };
  }

  img {
    width: 2rem;
  };

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 1.75rem;
    };
  };

  @media screen and (min-width: 1920px) {
    width: 1280px;
  };
`;

export default Container;