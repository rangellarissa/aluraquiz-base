import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import QuizBackground from '../src/components/QuizBackground'
import GitHubCorner from '../src/components/GitHubCorner'
import Head from 'next/head'
import Link from 'next/link'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: left;
`
const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;

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

const linkStyle = {
  textDecoration: 'none',
  color: 'gray',
};

export default function Quiz() {
  return  (
   <div>
     <Head>
       <title>Quiz Alura</title>

       <meta property="og:title" content="Quiz Alura" key="title" />
       <meta property="og:image" content={db.bg}/>
       <meta property="og:image:type" content="image/jpg"/>
     </Head>

      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <Widget>
            <Widget.Content>
              <Widget.Header>
                <h1>Quiz Alura</h1>
              </Widget.Header>
              <p>Essa é a página do quiz</p>
            </Widget.Content>
          </Widget>
          <Widget>
          <Widget.Content>
              <Widget.Header>
                <h1>The legend of zelda</h1>
              </Widget.Header>
              <p>lorem ipsum blablabla..</p>
              <Link href="/quiz">
                <a style={linkStyle}>Quiz page</a>
              </Link>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="http://github.com/rangellarissa"/>
      </QuizBackground>
    </div>
  );
}