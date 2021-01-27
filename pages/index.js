import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner';

export const QuizContainer = styled.div`
  width:100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
    <Head>
      <title>Quiz Alura - Base</title>

      <meta property="og:title" content="Quiz Alura" key="title" />
      <meta property="og:image" content={db.bg} />
      <meta property="og:image:type" content="image/jpg" />
    </Head>
    <QuizContainer>
      <QuizLogo />
      <Widget>
        <Widget.Header>
          <h1>Quiz Alura</h1>
        </Widget.Header>
        <Widget.Content>
          <form onSubmit={function (infosDoEvento) {
            infosDoEvento.preventDefault();
            router.push(`/quiz?name=${name}`);
            console.log('Fazendo uma submissão por meio do react');
            }}
            >
            <input
              onChange={function (infosDoEvento) {
                console.log(infosDoEvento.target.value);
                setName(infosDoEvento.target.value);
              }}
              placeholder="Diz aí seu nome"
              />
            <button type="submit" disabled={name.length === 0}>
              Jogar
              {name}
            </button>
          </form>
        </Widget.Content>
      </Widget>
      <Widget>
        <Widget.Content>
          <h1>Quizes da Galera</h1>
          <p>Quiz 1</p>
        </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="http://github.com/rangellarissa" />
    </QuizBackground>
  );
}
