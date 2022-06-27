import React, { useContext } from 'react'
import { about, skills } from '../../assets/data';
import images from '../../assets/images';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Container, Wrapper, Section, Division, Image, Card, Title, Subtitle, SocialIcon, Stack } from './styles';
import * as icons from '../../assets/icons';
import AppContext from '../../store/context';

const { dark, light } = icons;

function Home() {
  const { appTheme } = useContext(AppContext);

  return (
    <Container>
      <Header />
      <Wrapper>
        <Section>
          <Division>
            <Title>
              Olá,<br />
              eu sou Bruno Minelli<br />
            </Title>
            <Subtitle>
              Desenvolvedor Web
            </Subtitle>
          </Division>
          <Image src={ images.laptop.src } alt={ images.laptop.alt } />
        </Section>
        <Section>
          <Division>
            <Title>Sobre mim</Title>
            { about.resume.map((content, index) => <p key={ index }>{ content }</p>) }
          </Division>
          <Image src={ images.cellphonesMockup.src } alt={ images.cellphonesMockup.alt } />
        </Section>
        <Section>
          <Division>
            <Title>Habilidades</Title>
            {skills.map(({title, stacks}, index) =>
              <Stack>
                <Subtitle key={ index }>{ title }</Subtitle>
                <Section>
                  {stacks.map((stack, index) =>
                    <Card>
                      <p key={ index }>{ stack }</p>
                    </Card>
                  )}
                </Section>
              </Stack>
            )}
          </Division>
        </Section>
        <Section>
          <Division>
            <Title>Contato</Title>
            <Section>
              {appTheme ?
                dark.map(({src, alt, url}, index) =>
                <SocialIcon href={ url } key={ index } target='_blank'>
                  <Image src={ src }  alt={ alt } />
                </SocialIcon>
              ): light.map(({src, alt, url}, index) =>
                <SocialIcon href={ url } key={ index } target='_blank'>
                  <Image src={ src }  alt={ alt } />
                </SocialIcon>
              )}
            </Section>
          </Division>
        </Section>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Home;