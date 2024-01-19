import Head from "next/head";
import styled from "styled-components";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre</title>
        <meta name="description" content="Sobre nós" />
      </Head>
      <StyledSobre>
        <h2>Sobre nosso PetShop</h2>

        <h3>Missão</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          sequi voluptate dolore, saepe culpa vitae exercitationem non, pariatur
          iusto perferendis sunt quaerat eum dolorum vel tempora mollitia eius
          aliquid ipsam.
        </p>

        <h3>Visão</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          sequi voluptate dolore, saepe culpa vitae exercitationem non, pariatur
          iusto perferendis sunt quaerat eum dolorum vel tempora mollitia eius
          aliquid ipsam.
        </p>

        <h3>Valores</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          sequi voluptate dolore, saepe culpa vitae exercitationem non, pariatur
          iusto perferendis sunt quaerat eum dolorum vel tempora mollitia eius
          aliquid ipsam.
        </p>
      </StyledSobre>
    </>
  );
}
const StyledSobre = styled.section`
  h2::before {
    content: "💡";
  }
`;
