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

export { skills, images, social };