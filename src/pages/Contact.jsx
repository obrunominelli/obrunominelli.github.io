import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { images, services, social } from '../data';
import { Block, Container, Dropdown, ExternalLink, Image, NavSocial, Paragraph, Section, Title, Wrapper } from '../styles';
import palette from '../styles/palette';

function Contact() {
  return (
    <Fragment>
      <Header />
      <Container>
        <Wrapper>
          <Title color={ palette.light.primary }>
            No que eu posso te ajudar?
          </Title>
          <Section>
            <Block>
              {services.map(({title, description}, index) =>
                <Dropdown key={ index }>
                  <Paragraph>{ title }</Paragraph>
                  <Block>
                    <Paragraph>{ description }</Paragraph>
                  </Block>
                </Dropdown>
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
      <Footer />
    </Fragment>
  );
};

export default Contact;