import Container from "@/components/ui/Container";
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

        <Container>
          <article>
            <h3>Tosa</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus debitis beatae, quo eius harum provident optio
              accusamus nulla, possimus commodi expedita asperiores! Modi
              repellendus soluta, dignissimos quo maxime omnis nihil?
            </p>
          </article>
          <article>
            <h3>Banho</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus debitis beatae, quo eius harum provident optio
              accusamus nulla, possimus commodi expedita asperiores! Modi
              repellendus soluta, dignissimos quo maxime omnis nihil?
            </p>
          </article>
          <article>
            <h3>Castração</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus debitis beatae, quo eius harum provident optio
              accusamus nulla, possimus commodi expedita asperiores! Modi
              repellendus soluta, dignissimos quo maxime omnis nihil?
            </p>
          </article>
        </Container>
      </StyledProdutos>
    </>
  );
}
const StyledProdutos = styled.section`
  h2::before {
    content: "🎁";
  }

  article {
    padding: 1rem;
  }

  @media screen and (min-width: 800px) {
    /*Esta div é StyledContainer, mas com uma formatação que só vale
    para esta página Produtos */
    div {
      display: flex;
      justify-content: space-between;
    }
  }
`;
