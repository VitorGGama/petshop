import Head from "next/head";
import styled from "styled-components";
import ListaPosts from "@/components/ListaPosts";
import { useState, useEffect } from "react";
import serverApi from "./api/server";

export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverApi}/posts`);
    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    /* Extraindo as categorias dos posts para um novo array */
    const categorias = dados.map((post) => post.categoria);

    /* Gerando um array de categorias ÚNICAS */
    const categoriasUnicas = [...new Set(categorias)];

    return {
      props: {
        posts: dados,
        categorias: categoriasUnicas,
      },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
    return {
      notFound: true,
    };
  }
}

export default function Home({ posts, categorias }) {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  const [listaDePosts, setListaDePosts] = useState(posts);

  useEffect(() => {
    if (categoriaSelecionada) {
      const postsFiltrados = posts.filter(
        (post) => post.categoria === categoriaSelecionada
      );
      setListaDePosts(postsFiltrados);
    } else {
      setListaDePosts(posts);
    }
  }, [categoriaSelecionada, posts]);

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

        <div>
          {categorias.map((categoria, indice) => (
            <CategoriaButton
              key={indice}
              selected={categoria === categoriaSelecionada}
              onClick={() => setCategoriaSelecionada(categoria)}
            >
              {categoria}
            </CategoriaButton>
          ))}
        </div>
        <ListaPosts posts={listaDePosts} />
      </StyledHome>
    </>
  );
}

const StyledHome = styled.section`
  h2::before {
    content: "📰 ";
  }

  div {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
`;

const CategoriaButton = styled.button`
  background-color: ${(props) => (props.selected ? "#001f3f" : "#3498db")};
  color: #fff;
  padding: 10px 20px;
  margin: 4px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.selected ? "#001a35" : "#2980b9")};
  }
`;
