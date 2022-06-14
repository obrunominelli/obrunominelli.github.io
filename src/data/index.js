import iconEmailDark from '../images/icon-mail-dark.svg';
import iconEmailLight from '../images/icon-mail-light.svg';
import iconGitHubDark from '../images/icon-github-dark.svg';
import iconGitHubLight from '../images/icon-github-light.svg';
import iconLinkedInDark from '../images/icon-linkedin-dark.svg';
import iconLinkedInLight from '../images/icon-linkedin-light.svg';
import iconTelegramDark from '../images/icon-telegram-dark.svg';
import iconTelegramLight from '../images/icon-telegram-light.svg';
import imageAirplanes from '../images/image-airplanes.png';
import imageCellphones from '../images/image-cellphones.png';
import imageLaptop from '../images/image-laptop.png';

const skills = [
  'HTML','CSS','JavaScript','React','Redux','Hooks','Context API','Node.js','RTL','Jest','TDD','Design Responsivo','SQL','Linux','Conteinerização','Git'
];

const about = [
  "Desde a infância eu tenho contato constante com jogos digitais, RPG de mesa e tecnologia e minha curiosidade me fez descobrir cedo que sou autodidata. Logo nos primeiros anos de minha adolescência eu entrei no Instituto Federal de Educação, Ciência e Tecnologia de São Paulo (IFSP) - Campus São João da Boa Vista e foi o período no qual eu descobrir minha paixão pode desenvolvimento de software.",
  "Durante meu segundo ano de curso eu fiz um estágio em Análise e Desenvolvimento de Sistemas na GN1 Sistemas e Publicações Ltda., uma empresa que desenvolvia sistemas e diagramava publicações para associações e eventos da área de medicina.",
  "Após um ano e meio estagiando eu decidi prestar um concurso público para o IFSP e fui chamado no final de 2016 para assumir o cargo de Técnico de Laboratório de Informática, cargo este no qual permaneci por quatro anos gerenciando laboratório de informática para os cursos do Campus São Paulo Pirituba, gerenciando servidores Linux e desenvolvendo algumas aplicações como um servidor de gerenciamento de impressões para controlar os gastos de papel da instituição.",
  "No período que permaneci do IFSP, eu senti que deveria unificar minhas duas paixões, tecnologia e jogos, em algo que eu pudesse expôr ainda mais a minha criatividade. Então comecei a planejar o Rabiscando Mundos, um projeto pessoal no qual eu desenvolvia mecânicas para jogos de RPG além de publicar contos autorais e reflexões sobre o cotidiano.",
  "Atualmente eu trabalho como Desenvolvedor Web Frontend Freelancer e sou estudante de Desenvolvimento Web Fullstack na Trybe para aprimorar minhas habilidades."
];

const images = {
  email: {
    dark: {
      src: iconEmailDark,
      alt: 'Ícone de Email',
    },
    light: {
      src: iconEmailLight,
      alt: 'Ícone de Email',
    },
  },
  github: {
    dark: {
      src: iconGitHubDark,
      alt: 'Ícone do GitHub',
    },
    light: {
      src: iconGitHubLight,
      alt: 'Ícone do GitHub',
    },
  },
  linkedin: {
    dark: {
      src: iconLinkedInDark,
      alt: 'Ícone do LinkedIn',
    },
    light: {
      src: iconLinkedInLight,
      alt: 'Ícone do LinkedIn',
    },
  },
  telegram: {
    dark: {
      src: iconTelegramDark,
      alt: 'Ícone do Telegram',
    },
    light: {
      src: iconTelegramLight,
      alt: 'Ícone do Telegram',
    },
  },
  airplanes: {
    src: imageAirplanes,
    alt: 'Imagem de aviões de papel'
  },
  cellphone: {
    src: imageCellphones,
    alt: 'Imagem de celulares'
  },
  laptop: {
    src: imageLaptop,
    alt: 'Imagem de laptop com a tela em branco'
  },
};

const social = {
    email: 'mailto:obrunominelli@gmail.com',
    github: 'https://github.com/obrunominelli/',
    linkedin: 'https://www.linkedin.com/in/obrunominelli/',
    telegram: 'https://t.me/obrunominelli/',
}

export { skills, about, images, social };