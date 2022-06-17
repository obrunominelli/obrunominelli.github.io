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

const about = [
  "Desde a infância eu tenho contato constante com jogos digitais, RPG de mesa e tecnologia e minha curiosidade me fez descobrir cedo que sou autodidata. Logo nos primeiros anos de minha adolescência eu entrei no Instituto Federal de Educação, Ciência e Tecnologia de São Paulo (IFSP) - Campus São João da Boa Vista e foi o período no qual eu descobrir minha paixão pode desenvolvimento de software.",
  "Durante meu segundo ano de curso eu fiz um estágio em Análise e Desenvolvimento de Sistemas na GN1 Sistemas e Publicações Ltda., uma empresa que desenvolvia sistemas e diagramava publicações para associações e eventos da área de medicina.",
  "Após um ano e meio estagiando eu decidi prestar um concurso público para o IFSP e fui chamado no final de 2016 para assumir o cargo de Técnico de Laboratório de Informática, cargo este no qual permaneci por quatro anos gerenciando laboratório de informática para os cursos do Campus São Paulo Pirituba, gerenciando servidores Linux e desenvolvendo algumas aplicações como um servidor de gerenciamento de impressões para controlar os gastos de papel da instituição.",
  "No período que permaneci do IFSP, eu senti que deveria unificar minhas duas paixões, tecnologia e jogos, em algo que eu pudesse expôr ainda mais a minha criatividade. Então comecei a planejar o Rabiscando Mundos, um projeto pessoal no qual eu desenvolvia mecânicas para jogos de RPG além de publicar contos autorais e reflexões sobre o cotidiano.",
  "Atualmente eu trabalho como Desenvolvedor Web Frontend Freelancer e sou estudante de Desenvolvimento Web Fullstack na Trybe para aprimorar minhas habilidades."
];

const skills = [
  'HTML','CSS','JavaScript','React','Redux','Hooks','Context API','Node.js','RTL','Jest','TDD','Design Responsivo','SQL','Linux','Docker','Git'
];

const services = [
  {
    title: 'Jogos',
    description: 'O universo dos jogos é vasto e sempre há algo novo que possa ser explorado! Será um prazer te ajudar a criar o seu mundo.',
  },
  {
    title: 'Marketplace',
    description: 'Seu grupo é composto por diversas bandeiras e você precisa gerenciar cada uma delas? Podemos planejar um sistema online e personalizado para o seu negócio!',
  },
  {
    title: 'Institucional',
    description: 'Presença! É disso que sua marca precisa para entregar as informações de forma assertiva para seus clientes. Um site institucional é a sua melhor opção.',
  },
  {
    title: 'Hotsite',
    description: 'Você precisa vender seu produto online ou fazer a captura de pessoas para conversão em clientes? Eu não tenho dúvidas de que eu posso ajudar.',
  },
  {
    title: 'Cursos',
    description: 'Há diversas plataformas online para venda de cursos e talvez você gostaria de ter a sua com a sua cara. Nós podemos tornar isso realidade!',
  },
  {
    title: 'Fórum',
    description: 'Você é apaixonado por um assunto e gostaria de criar uma comunidade para discutir tópicos relacionados à sua paixão. Nós que podemos desenvolver sua ideia!',
  },
  {
    title: 'Notícias',
    description: 'A busca por informações é constante nos dias de hoje. Uma plataforma de notícias é a saída para que você entregue informação com extrema qualidade.',
  },
  {
    title: 'Membros',
    description: 'Sua marca está se expandindo e você quer entregar conteúdos exclusivos para o seu público, certo? A sessão reservada para membros é um bom começo.',
  },
  {
    title: 'Portfólio',
    description: 'A sua criatividade deve ser compartilhada com o mundo! Por que não me chama para um conversa para montarmos um portfólio com a sua cara?',
  },
  {
    title: 'Landing Page',
    description: 'Você está começando e precisa de uma página simples para divulgar o seu trabalho? Um site de página única é a sua mina de ouro.',
  },
  {
    title: 'E-commerce',
    description: 'O seu negócio está crescendo e você planeja vender online os seus produtos físicos e/ou digitais? Vamos sua loja online!',
  },
  {
    title: 'Blog',
    description: 'Seu espaço para falar das coisas que você mais ama, compartilhar ideias e expressar o que sente por meio de textos. Um blog é a saída para sua mente criativa!',
  },
];

const projects = [
  {
    title: 'iCook',
    description: "O que você acha de conhecer o mundo por meio da gastronomia? Nesta aplicação alimentada pelas API's TheMealsDB e TheCocktailsDB você pode embarcar nesta jornada.",
    team: ['Bruno Minelli', 'Isabela Nery', 'Thais Kotovicz', 'Wanny Martins'],
    stack: 'Front-end',
    repo: '',
    url: '',
  },
  {
    title: 'E-Commerce',
    description: "Nós precisamos fazer compras e a internet é pode nos ajudar com isso. Esta é uma simulação de e-commerce alimentada pelas API's do Mercado Livre.",
    team: ['Bruno Minelli', 'André Felipe', 'Jaqueline Santos', 'Jéssica Pereira', 'Vagner Britz'],
    stack: 'Front-end',
    repo: '',
    url: '',
  },
  {
    title: 'E-Wallet',
    description: "Como gerenciar gastos internacionais? Saiba o custo em Real Brasileiro de suas compras por meio desta carteira de despesas alimentada por uma API da AwesomeAPI.",
    team: ['Bruno Minelli'],
    stack: 'Front-end',
    repo: '',
    url: '',
  },
  {
    title: 'Tracks',
    description: 'Muitas pessoas possuem a trilha sonora de sua vida. O que acha de ter um gostinho da sua neste aplicativo alimentado pela API do iTunes?',
    team: ['Bruno Minelli'],
    stack: 'Front-end',
    repo: '',
    url: '',
  },
  {
    title: 'Collor Guesser',
    description: 'Você consegue adivinhar uma cor por meio de um código RGB ou de um número hexadecimal? Divirta-se com esse jogo e teste suas habilidades visuais!',
    team: ['Bruno Minelli'],
    stack: 'Front-end',
    repo: '',
    url: '',
  },
  {
    title: 'Talkers',
    description: 'Grandes eventos precisam de uma boa organização. Talkers é uma solução online para que você gerencie palestras e workshops de maneira fácil e com praticidade.',
    team: ['Bruno Minelli'],
    stack: 'Back-end',
    repo: '',
    url: '',
  },
  {
    title: 'Store',
    description: 'Todo estabelecimento precisa de informações confiáveis para se manter no mercado. Store é uma solução que permite que você gerencie seu negócio de qualquer lugar.',
    team: ['Bruno Minelli'],
    stack: 'Back-end',
    repo: '',
    url: '',
  },
  {
    title: 'Car Shop',
    description: 'Conforto, segurança e velocidade são algumas coisas que um automóvel nos garante. Cars é uma solução para gerenciar concessionárias. Vamos colocar o pé na estrada?',
    team: ['Bruno Minelli'],
    stack: 'Back-end',
    repo: '',
    url: '',
  },
  {
    title: 'Ayla RPG',
    description: 'Em um mundo cheio de perigos, quais desafios você enfrentaria por ouro e glória para se tornar uma lenda entre os mortais? Conheça Ayla RPG!',
    team: ['Bruno Minelli'],
    stack: 'Back-end',
    repo: '',
    url: '',
  },
  {
    title: 'Home Beer',
    description: 'Boteco e cerveja de garrafa pode animar happy hour de qualquer pessoa. Que tal fazer isso do conforto da sua casa com o Home Beer?',
    team: ['Bruno Minelli'],
    stack: 'Back-end',
    repo: '',
    url: '',
  },
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

const docs = {
  resume: {
    content: '</currículo>',
    url: 'https://drive.google.com/file/d/1uFP8CqSQKXSGE6Dy02Q3kB1dFKpebrva/view?usp=sharing',
  },
};

const social = {
    email: 'mailto:obrunominelli@gmail.com',
    github: 'https://github.com/obrunominelli/',
    linkedin: 'https://www.linkedin.com/in/obrunominelli/',
    telegram: 'https://t.me/obrunominelli/',
};

export { skills, about, services, projects, images, docs, social };