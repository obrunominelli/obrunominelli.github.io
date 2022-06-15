import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { images, skills, social } from '../data';
import { Container, Wrapper, Block, Title, Subtitle, Paragraph, Card, Image, NavSocial, ExternalLink, Section } from '../styles';
import palette from '../styles/palette';

function Home() {
  const year = new Date().getFullYear();
  return (
    <Fragment>
      <Header/>
      <Container>
          <Wrapper
            background={ palette.light.secondary }
            color={ palette.light.primary }
          >
            <Section>
              <Block>
                <Title color={ palette.light.primary }>
                  Olá,<br />
                  eu sou Bruno Minelli
                </Title>
                <Subtitle color={ palette.light.primary }>Desenvolvedor Web</Subtitle>
                <Paragraph color={ palette.light.primary }>
                  Especialista em desenvolvimento <strong>fullstack</strong>
                </Paragraph>
              </Block>
              <Block>
                <Image src={ images.laptop.src } alt={ images.laptop.alt } />
              </Block>
            </Section>
          </Wrapper>
          <Wrapper
            background={ palette.light.secondary }
            color={ palette.light.primary }
          >
            <Section>
              <Card>
                <Title>{ year - 2014 }</Title>
                <Paragraph color={ palette.light.primary }>Anos de Experiência</Paragraph>
              </Card>
              <Card>
                <Title>23</Title>
                <Paragraph color={ palette.light.primary }>Projetos Concluídos</Paragraph>
              </Card>
              <Card>
                <Title>27</Title>
                <Paragraph color={ palette.light.primary }>Repositórios GitHub</Paragraph>
              </Card>
              <Card>
                <Title>5</Title>
                <Paragraph color={ palette.light.primary }>Projetos em Desenvolvimento</Paragraph>
              </Card>
            </Section>
          </Wrapper>
          <Wrapper
            background={ palette.light.primary }
            color={ palette.light.secondary }
          >
            <Section>
              <Block>
                <Title color={ palette.light.secondary }>Sobre mim</Title>
                <Paragraph color={ palette.light.secondary }>
                  Eu sou um apaixonado por jogos e por tecnologia com mais de oito anos de experiência no setor de tecnologia da informação aplicada à educação. Eu já corrigi um banco de dados em tempo real durante um evento de cursos de reciclagem para pessoas da área de medicina e gerenciei uma rede de mais de cem computadores no IFSP para pessoas estudantes. - <Link to='/about'>Veja mais...</Link>
                </Paragraph>
              </Block>
              <Block>
                <Image src={ images.cellphone.src } alt={ images.cellphone.alt } />
              </Block>
            </Section>
          </Wrapper>
          <Wrapper
            background={ palette.light.secondary }
            color={ palette.light.primary }
          >
            <Section>
              <Block>
                <Title color={ palette.light.primary }>Competências</Title>
                { skills.map((skill, index) =>
                  <Card key={ index }>
                    <Paragraph color={ palette.light.primary }>{ skill }</Paragraph>
                  </Card>) }
              </Block>
            </Section>
          </Wrapper>
          <Wrapper
            background={ palette.light.primary }
            color={ palette.light.secondary }
          >
            <Section>
              <Block>
                <Title>Contato</Title>
                <NavSocial>
                  <ExternalLink href={ social.linkedin } target="_blank">
                    <Image src={ images.linkedin.light.src } alt={ images.linkedin.light.alt } />
                  </ExternalLink>
                  <ExternalLink href={social.github} target="_blank">
                    <Image src={ images.github.light.src } alt={ images.github.light.alt } />
                  </ExternalLink>
                  <ExternalLink href={social.email} target="_blank">
                    <Image src={ images.email.light.src } alt={ images.email.light.alt } />
                  </ExternalLink>
                  <ExternalLink href={ social.telegram } target="_blank">
                    <Image src={ images.telegram.light.src } alt={ images.telegram.light.alt } />
                  </ExternalLink>
                </NavSocial>
              </Block>
              <Block>
                <Image src={ images.airplanes.src } alt={ images.airplanes.alt } />
              </Block>
            </Section>
          </Wrapper>
      </Container>
      <Footer
        background={ palette.light.secondary }
        color={ palette.light.primary }
      />
    </Fragment>
  );
};

export default Home;