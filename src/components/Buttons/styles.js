import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.secondary};
  border: none;
  color: ${props => props.theme.primary};
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem 2rem;
  transition: 1s;
  width: 10%;

  :hover {
    background-color: ${props => props.theme.accent};
  };
`;

export { Button };