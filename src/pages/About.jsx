import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { about } from '../data';
import { Block, Container, Image, Paragraph, Section, Wrapper } from '../styles';
import palette from '../styles/palette';

function About() {
  return (
    <>
      <Header />
        <Container>
          <Wrapper>
            <Section>
              <Block>
              <Image src='' alt='Fotografia de Bruno Minelli' />
                { about.map((content) =>
                  <Paragraph color={ palette.light.primary }>
                    { content }
                  </Paragraph>
                )}
              </Block>
            </Section>
          </Wrapper>
        </Container>
      <Footer />
    </>
  );
};

export default About;