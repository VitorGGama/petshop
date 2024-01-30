import Head from "next/head";
import styled from "styled-components";
import ListaPosts from "@/components/ListaPosts";
import ListaCategorias from "@/components/ListaCategorias";
import { useState } from "react";
import serverApi from "./api/server";

export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverApi}/posts.json`);
    const dados = await resposta.json();
    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    /* Colocando os dados dos objetos dentro de uma array 
    
    1) Object.keys(dados): extrair as chaves/id de cada objeyto para um array.
    
    2) Map no array de chaves, em que retornamos um novo objeto.
    
    3) Cada novo objeto (representado por post) é criado com os dados
    existentes (por isso, usamos o spread)
    
    4) No caso do id, atribuimos a própria chave de cada objeto. Portanto,
    em vez de ids numéricos, os ids passam a ser na aplicação o próprio hash/código
    de cada post. */

    const arrayDePosts = Object.keys(dados).map((post) => {
      return {
        ...dados,
        id: post,
      };
    });
    console.log(arrayDePosts);

    const categorias = dados.map((post) => post.categoria);
    const categoriasUnicas = [...new Set(categorias)];

    return {
      props: {
        posts: dados,
        categorias: categoriasUnicas,
      },
    };
  } catch (error) {
    console.error("Erro ao obter os dados: " + error.message);
    return {
      notFound: true,
    };
  }
}

export default function Home({ posts, categorias }) {
  const [listaDePosts, setListaDePosts] = useState(posts);
  const [filtroAtivo, setFiltroAtivo] = useState(false);
  const [categoriaAtiva, setCategoriaAtivo] = useState("");

  const filtrar = (event) => {
    const categoriaEscolhida = event.currentTarget.textContent;
    const novaListaDePosts = posts.filter(
      (post) => post.categoria === categoriaEscolhida
    );

    // Sinalizando o state como filtro ativo (true)
    setFiltroAtivo(true);
    setListaDePosts(novaListaDePosts);
    setCategoriaAtivo(categoriaEscolhida);
  };

  const limparFiltro = () => {
    // Sinalizando o state como filtro inativo (false)
    setFiltroAtivo(false);

    // Atualizando o state da listaDePosts para os posts originais
    setListaDePosts(posts);
    setCategoriaAtivo("");
  };

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

        <ListaCategorias
          categorias={categorias}
          filtrar={filtrar}
          limparFiltro={limparFiltro}
          filtroAtivo={filtroAtivo}
          categoriaAtiva={categoriaAtiva}
        />

        <ListaPosts posts={listaDePosts} />
      </StyledHome>
    </>
  );
}

const StyledHome = styled.section`
  h2::before {
    content: "📰 ";
  }
`;
