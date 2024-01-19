import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";

export default function Contato() {
  return (
    <>
      <Head>
        <title>Contato</title>
        <meta name="description" content="Contato" />
      </Head>
      <StyledContato>
        <h2>Fale conosco</h2>

        <Container>
          <form action="" method="">
            <div>
              <label htmlFor="nome">Nome</label>
              <input type="text" name="nome" id="nome" />
            </div>
            <div>
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" id="email" />
            </div>
            <div>
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                maxLength={500}
                name="mensagem"
                id="mensagem"
                cols="30"
                rows="8"
              ></textarea>
            </div>
            <div>
              <button type="Submit">Enviar mensagem</button>
            </div>
          </form>
        </Container>
      </StyledContato>
    </>
  );
}
const StyledContato = styled.section`
  h2::before {
    content: "💌";
  }

  form {
    max-width: 400px;
    margin: 0 auto;
  }

  div {
    margin-bottom: 20px;

    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }

    input,
    textarea {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }

    textarea {
      resize: vertical;
    }
  }

  button {
    background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
`;
