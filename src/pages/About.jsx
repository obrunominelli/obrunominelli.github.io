import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { about, docs } from '../data';
import { Block, Container, ExternalLink, Image, Paragraph, Thumbnail, Wrapper } from '../styles';
import palette from '../styles/palette';

function About() {
  return (
    <>
      <Header />
        <Container>
          <Wrapper>
            <Block>
              <Thumbnail>
                <Image src='' alt='Fotografia de Bruno Minelli' />
                <Paragraph color={ palette.light.primary }>Bruno Minelli | Desenvolvedor Web</Paragraph>
                <ExternalLink
                  color={ palette.light.primary }
                  href={ docs.resume.url }
                  target='_blank'
                >
                  { docs.resume.content }
                </ExternalLink>
              </Thumbnail>
              { about.map((content, index) =>
                <Paragraph
                  key={ index }
                  color={ palette.light.primary }
                >
                  { content }
                </Paragraph>
              )}
            </Block>
          </Wrapper>
        </Container>
      <Footer />
    </>
  );
};

export default About;