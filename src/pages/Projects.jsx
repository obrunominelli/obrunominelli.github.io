import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { projects } from '../data';
import { Block, Container, Paragraph, Project, Section, Subtitle, Title, Wrapper } from '../styles';
import palette from '../styles/palette';

function Projects() {
  return (
    <Fragment>
      <Header />
        <Container>
          <Wrapper>
            <Section>
              <Block>
                { projects.map((project, index) =>
                  <Project
                    key={ index }
                    background={ palette.light.primary }
                  >
                    <Title>{ project.title }</Title>
                    <Paragraph>{ project.description }</Paragraph>
                    <Paragraph>{ project.stack }</Paragraph>
                    <Subtitle>Equipe</Subtitle>
                    <Section>
                      {project.team
                        .sort()
                        .map((member, index) =>
                        <Paragraph key={ index }>{ member }</Paragraph>
                      )}
                    </Section>
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