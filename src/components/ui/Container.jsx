import styled from "styled-components";

export default function Container({ children }) {
  return <StyledContainer> {children}</StyledContainer>;
}

const StyledContainer = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: var(--sombra-box);
  border-radius: var(--sombra-arredondada);
  padding: 1rem;
`;
