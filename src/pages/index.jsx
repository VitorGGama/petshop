import Head from "next/head";
import styled from "styled-components";
import ListaPosts from "@/components/ListaPosts";
import { useState } from "react"; // Removi 'useEffect' pois não estava sendo usado
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
  const [listaDePosts, setListaDePosts] = useState(posts);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

  const filtrar = (event) => {
    const categoriaEscolhida = event.currentTarget.textContent;

    const novaListaDePosts = posts.filter(
      (post) => post.categoria === categoriaEscolhida
    );
    setListaDePosts(novaListaDePosts);
    setCategoriaSelecionada(categoriaEscolhida);
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

        <div>
          {categorias.map((categoria, indice) => (
            <button
              key={indice}
              onClick={filtrar}
              style={{
                backgroundColor:
                  categoria === categoriaSelecionada
                    ? "var(--cor-secundaria-fundo-hover)"
                    : "blue",
                color: "#fff",
                padding: "0.5rem",
                margin: "4px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              {categoria}
            </button>
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
    justify-content: space-around;
    margin-top: 20px;
    flex-wrap: wrap;
  }

  button {
    text-transform: capitalize;
    background-color: blue;
    color: #fff;
    padding: 0.5rem;
    margin: 4px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: var(--cor-secundaria-fundo-hover);
      cursor: pointer;
    }
  }
`;
