import Head from "next/head";
import styled from "styled-components";
import ListaPosts from "@/components/ListaPosts";
import { useState } from "react";

/* EXECUTADA NO SERVIDOR/BACK-END */
export async function getStaticProps() {
  try {
    const resposta = await fetch(`http://10.20.46.24:2112/posts`);
    const dados = await resposta.json();

    if (!resposta.ok)
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);

    return {
      props: {
        posts: dados,
      },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
  }
}

export default function Home({ posts }) {
  const [listaDePost, setListaDePost] = useState(posts);

  return (
    <>
      <Head>
        <title>PetShop</title>
      </Head>
      <StyledHome>
        <h2>Pet Notícias</h2>
        <ListaPosts posts={listaDePost} />
      </StyledHome>
    </>
  );
}

const StyledHome = styled.section`
  h2::before {
    content: "📰 ";
  }
`;
