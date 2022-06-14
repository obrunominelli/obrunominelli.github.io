import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { projects } from '../data';
import { Block, Container, Paragraph, Project, Section, Subtitle, Wrapper } from '../styles';
import palette from '../styles/palette';

function Projects() {
  return (
    <Fragment>
      <Header />
        <Container>
          <Wrapper>
            <Section>
              <Block>
                { projects.map((project) =>
                  <Project background={ palette.light.primary }>
                    <Subtitle>{ project.title }</Subtitle>
                    <Paragraph>{ project.description }</Paragraph>
                    <Paragraph>Stack: { project.stack }</Paragraph>
                  </Project>
                )}
              </Block>
            </Section>
          </Wrapper>
        </Container>
      <Footer />
    </Fragment>
  );
};

export default Projects;