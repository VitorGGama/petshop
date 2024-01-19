import Container from "@/components/ui/Container";
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

        <Container>
          <h3>Missão</h3>
          <p>
            Proporcionar aos nossos clientes e seus queridos animais de
            estimação uma experiência única e positiva, oferecendo produtos e
            serviços de alta qualidade que promovam o bem-estar, saúde e
            felicidade dos pets. Buscamos ser reconhecidos como um pet shop
            comprometido com a excelência, atendimento personalizado e amor
            pelos animais, contribuindo para fortalecer os laços especiais entre
            tutores e seus companheiros peludos.
          </p>

          <h3>Visão</h3>
          <p>
            Ser referência como o pet shop mais confiável e dedicado da
            comunidade, onde os clientes encontram tudo o que precisam para
            cuidar e mimar seus animais de estimação. Almejamos expandir nossa
            presença de maneira sustentável, inovando continuamente para atender
            às necessidades em constante evolução do mercado pet, e sendo
            reconhecidos como um espaço onde a paixão pelos animais é o alicerce
            de todas as nossas atividades.
          </p>

          <h3>Valores</h3>
          <p>
            - Amor pelos Animais: Tratamos cada pet como parte da nossa família.
            - Ética e Transparência: Mantemos padrões éticos elevados em todas
            as operações. - Comprometimento com a Qualidade: Oferecemos produtos
            e serviços de excelência. - Atendimento Personalizado: Valorizamos o
            relacionamento próximo com os clientes. - Responsabilidade
            Ambiental: Adotamos práticas sustentáveis e responsáveis. - Inovação
            Constante: Buscamos constantemente inovações para atender às
            expectativas do mercado. - Equipe Apaixonada: Nossa equipe é unida
            pela paixão pelos animais e dedicação aos clientes.
          </p>
        </Container>
      </StyledSobre>
    </>
  );
}
const StyledSobre = styled.section`
  h2::before {
    content: "💡";
  }
`;
