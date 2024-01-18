import Head from "next/head";
import styled from "styled-components";

export default function Produtos() {
  return (
    <>
      <Head>
        <title>Produtos</title>
        <meta name="description" content="Produtos" />
      </Head>
      <StyledProdutos>
        <h2>Conheça nossos produtos</h2>
      </StyledProdutos>
    </>
  );
}
const StyledProdutos = styled.section`
  h2::before {
    content: "🎁";
  }
`;
