import styled from "styled-components";

const Container = styled.footer`
  display: flex ;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  p {
    color: ${ props => props.theme.secondary };
    font-weight: 700;
    text-align: center;
    font-size: 0.75rem;
  };

  @media screen and (min-width: 768px) {
    p {
      font-size: 1.5rem;
    };
  };

  @media screen and (min-width: 1920px) {
    width: 1280px;
  };
`;

export default Container;