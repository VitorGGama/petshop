import Link from "next/link";
import Image from "next/image";
import styled from "styled-components"; // Adiciona esta linha para importar o styled-components
import Menu from "./Menu";

export default function Cabecalho() {
  return (
    <StyledHeader>
      <h1>
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={48}
            height={48}
            alt="Patinha dentro de um coração"
          />
          Petshop
        </Link>
      </h1>
      <Menu />
    </StyledHeader>
  );
}
const StyledHeader = styled.header`
  background-color: white;
  box-shadow: var(--sombra-box);

  h1 a {
    text-decoration: none;
    color: var(--cor-primaria);
    background-color: var(--cor-primaria-fundo);
    padding: 0.5rem 1.2rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
