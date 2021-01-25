import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import QuizBackground from '../src/components/QuizBackground'
import QuizLogo from '../src/components/QuizLogo'
import GitHubCorner from '../src/components/GitHubCorner'

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

export default function Home() {
  return  (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Content>
            <Widget.Header>
              <h1>The legend of zelda</h1>
            </Widget.Header>
            <p>lorem ipsum blablabla..</p>
          </Widget.Content>
        </Widget>
        <Widget>
        <Widget.Content>
            <Widget.Header>
              <h1>The legend of zelda</h1>
            </Widget.Header>
            <p>lorem ipsum blablabla..</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="http://github.com/rangellarissa"/>
    </QuizBackground>
  );
}