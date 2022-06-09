import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { skills } from '../data';
import { Container, Wrapper, Block, Title, Subtitle, Paragraph, Image, Card } from '../styles';

function Home() {
  const year = new Date().getFullYear();
  return (
    <Container>
      <Header />
        <Wrapper>
          <Block>
            <Title>Olá,</Title>
            <Title>eu sou Bruno Minelli</Title>
            <Subtitle>Desenvolvedor Web</Subtitle>
            <Paragraph>Especialita em desenvolvimento frontend, backend e fullstack</Paragraph>
          </Block>
          <Block>
            Imagem de um laptop com a tela em branco.
          </Block>
        </Wrapper>
        <Wrapper>
          <Card>
            <Title>{year - 2014}</Title>
            <Paragraph>Anos de Experiência</Paragraph>
          </Card>
          <Card>
            <Title>23</Title>
            <Paragraph>Projetos Concluídos</Paragraph>
          </Card>
          <Card>
            <Title>27</Title>
            <Paragraph>Repositórios GitHub</Paragraph>
          </Card>
          <Card>
            <Title>5</Title>
            <Paragraph>Projetos em Desenvolvimento</Paragraph>
          </Card>
        </Wrapper>
        <Wrapper>
          <Block>
            <Title>Um pouco sobre mim...</Title>
            <Paragraph>
              Eu sou um apaixonado por jogos e por tecnologia com mais de oito anos de experiência no setor de tecnologia da informação aplicada à educação. Eu já corrigi um banco de dados em tempo real durante um evento de cursos de reciclagem para pessoas da área de medicina e gerenciei uma rede de mais de cem computadores no IFSP para pessoas estudantes. - <Link to='/about'>Veja mais...</Link>
            </Paragraph>
          </Block>
          <Block>
            Imagem mockup de celulares
          </Block>
        </Wrapper>
        <Wrapper>
          <Title>Competências</Title>
          {skills.map((skill, index) => <Card key={ index }>{ skill }</Card>)}
        </Wrapper>
        <Wrapper>
          <Title>Contato</Title>
          <Block>Imagem de aviões de papel</Block>
          <Block>Logos com links das redes sociais</Block>
        </Wrapper>
      <Footer />
    </Container>
  );
};

export default Home;