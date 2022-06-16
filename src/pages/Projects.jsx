import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { projects } from '../data';
import { Block, Container, ExternalLink, Paragraph, Project, Subtitle, Wrapper } from '../styles';
import palette from '../styles/palette';

function Projects() {
  return (
    <Fragment>
      <Header />
      <Container>
        <Wrapper>
          <Block>
            {projects.map((project) =>
              <Project color={ palette.light.primary }>
                <Subtitle>{ project.title }</Subtitle>
                <Paragraph>{ project.description }</Paragraph>
                <Paragraph>{ project.stack }</Paragraph>
                <ExternalLink>{ project.url }</ExternalLink>
                <ExternalLink>{ project.repo }</ExternalLink>
              </Project>
            )}
          </Block>
        </Wrapper>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Projects;