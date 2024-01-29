// ListaCategorias.jsx
import styled from "styled-components";

const ListaCategorias = ({
  categorias,
  filtrar,
  limparFiltro,
  filtroAtivo,
  categoriaAtiva,
}) => {
  return (
    <StyledCategorias>
      {categorias.map((categoria, indice) => (
        <button
          className={categoria === categoriaAtiva ? "ativo" : ""}
          onClick={filtrar}
          key={indice}
        >
          {categoria}
        </button>
      ))}

      {filtroAtivo && (
        <button className="limpar" onClick={limparFiltro}>
          Limpar filtro
        </button>
      )}
    </StyledCategorias>
  );
};

const StyledCategorias = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1rem 0;
  flex-wrap: wrap;

  button {
    text-transform: capitalize;
    border: none;
    background-color: var(--cor-secundaria-fundo);
    color: #f7f7f7;
    padding: 0.5rem;
    border-radius: var(--borda-arredondada);

    &:hover,
    &:focus {
      background-color: var(--cor-secundaria-fundo-hover);
      cursor: pointer;
    }
  }

  .limpar {
    background-color: gray;

    &:hover {
      background-color: slategray;
    }

    &::before {
      content: "🧹 ";
    }
  }
`;

export default ListaCategorias;
