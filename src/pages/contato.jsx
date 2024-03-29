import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";
import { useForm } from "react-hook-form";

export default function Contato() {
  const { register, handleSubmit } = useForm();

  const enviarContato = (dados) => {
    console.log("Enviando dados...", dados);
    // Adicione aqui o código para enviar os dados, por exemplo, uma chamada à API.
  };

  return (
    <>
      <Head>
        <title>Contato</title>
        <meta name="description" content="Contato" />
      </Head>
      <StyledContato>
        <h2>Fale conosco</h2>

        <Container>
          <form
            action=""
            method="post"
            onSubmit={handleSubmit((dados) => {
              enviarContato(dados);
            })}
          >
            <div>
              <label htmlFor="nome">Nome</label>
              <input {...register("nome")} type="text" name="nome" id="nome" />
            </div>
            <div>
              <label htmlFor="email">E-mail</label>
              <input
                {...register("email")}
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div>
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                {...register("mensagem")}
                maxLength={500}
                name="mensagem"
                id="mensagem"
                cols="30"
                rows="8"
              ></textarea>
            </div>
            <div>
              <button type="submit">Enviar mensagem</button>
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
      border: 1px solid #522828;
      border-radius: 4px;
      box-sizing: border-box;
    }

    textarea {
      resize: vertical;
    }
  }

  button {
    background-color: #676572;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
`;
