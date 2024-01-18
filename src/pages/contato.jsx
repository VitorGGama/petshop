import Head from "next/head";
import styled from "styled-components";

export default function Contato() {
  return (
    <>
      <Head>
        <title>Contato</title>
        <meta name="description" content="Contato" />
      </Head>
      <StyledContato>
        <h2>Fale conosco</h2>
      </StyledContato>
    </>
  );
}
const StyledContato = styled.section`
  h2::before {
    content: "💌";
  }
`;
