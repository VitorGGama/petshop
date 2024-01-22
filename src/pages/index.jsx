import Head from "next/head";
import styled from "styled-components";
import ListaPosts from "@/components/ListaPosts";

export default function Home() {
  // Assumindo que postMessage é uma variável externa ou do estado local
  const postMessage = []; // Substitua [] pelo valor real da variável

  if (postMessage.length === 0) {
    return <h3>Ainda não há posts!</h3>;
  }

  return (
    <>
      <Head>
        <title>PetShop</title>
        <meta
          name="description"
          content="Web App PetShop criado com Next.js como exemplo do curso Téc. Informática para Internet"
        />
        <meta name="keywords" content="PetShop, Banho, Ração, Gato, Cachorro" />
      </Head>
      <StyledHome>
        <h2>Pet Notícias</h2>
        <ListaPosts posts={[]} />
      </StyledHome>
    </>
  );
}

const StyledHome = styled.section`
  h2::before {
    content: "📰 ";
  }
`;
