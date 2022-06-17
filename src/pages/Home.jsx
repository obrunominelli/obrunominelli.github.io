import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { images, skills, social } from '../data';
import { Container, Wrapper, Block, Title, Subtitle, Paragraph, Card, Image, NavSocial, ExternalLink, Section } from '../styles';
import palette from '../styles/palette';

function Home() {
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
              <Subtitle color={ palette.light.accent }>Desenvolvedor Web Frontend</Subtitle>
            </Block>
            <Block>
              <Image src={ images.laptop.src } alt={ images.laptop.alt } />
            </Block>
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
                Eu sou um apaixonado por jogos e por tecnologia com mais de oito anos de experiência no setor de tecnologia da informação aplicada à educação. Eu já corrigi um banco de dados em tempo real durante um evento de cursos de reciclagem para pessoas da área de medicina e gerenciei uma rede de mais de cem computadores no IFSP para pessoas estudantes.
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
                  <Paragraph>{ skill }</Paragraph>
                </Card>
              )}
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