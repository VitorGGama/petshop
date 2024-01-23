import Head from "next/head";
import styled from "styled-components";
import ListaPosts from "@/components/ListaPosts";
import { useState, version } from "react";
import serverApi from "./api/server";

/* EXECUTADA NO SERVIDOR/BACK-END 
Utilizada para execução de código server-side (neste caso, fetch na API)
com o objeto de gerar props com os dados processados.*/
export async function getStaticProps() {
  console.log("Código de servidor (não aparece no cliente)...");
  try {
    const resposta = await fetch(`${serverApi}/posts`);
    const dados = await resposta.json();

    if (!resposta.ok)
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);

    /* Após o processamento (desde que não haja erros), a getStaticProps
    retorna um objeto com uma propriedade chamada "props", e nesta propriedade
    colocamos um objeto com as props que queremos usar. No caso, usamos uma
    prop "posts" (pode ter qualquer nome) e é nela que colocamos os dados. */
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
