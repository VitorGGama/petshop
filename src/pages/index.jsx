import Head from "next/head";
import styled from "styled-components";
import ListaPosts from "@/components/ListaPosts";
import { useEffect, useState } from "react";

export default function Home() {
  const [listaDePost, setListaDePost] = useState([]);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const resposta = await fetch("http://10.20.46.24:2112/posts");

        if (!resposta.ok) {
          throw new Error(
            `Erro na requisição: ${resposta.status} - ${resposta.statusText}`
          );
        }

        const dados = await resposta.json();
        setListaDePost(dados);
      } catch (error) {
        console.error("Ocorreu um erro ao carregar os dados:", error);
        // Lide com o erro de alguma forma, por exemplo, definindo um estado de erro.
      }
    };

    carregarDados();
  }, []);

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
