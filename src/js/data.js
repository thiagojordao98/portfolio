console.log('Bem-Vindo!')
let date = new Date()

function currentDate() {
  let dateFormat = date.toLocaleString("default", {
    month: "short",
    year: "numeric"
  })
  return dateFormat.replace('.', '')
  // return dateFormat.replace('.','')+" (Atualmente)"
}

function currentAge(birth) {
  let birthday = new Date(birth)
  return Math.floor(Math.ceil(Math.abs(birthday.getTime() - date.getTime()) / (1000 * 3600 * 24)) / 365.25)
}

let personal = {
  name: 'Thiago Jordão',
  birth: '1998-06-28 3:25',
  age: currentAge('1998-06-28 3:025'),
  email: 'thiagojordao98@gmail.com',
  phone: '84996843647',
  address: {
    cod: '59519310',
    country: {
      long: 'Brazil',
      short: 'BR'
    },
    state: {
      long: 'Rio Grande do Norte',
      short: 'RN'
    },
    city: {
      long: 'Parnamirim',
      short: 'GTI'
    },
    neighborhood: {
      long: 'Parque das Nações',
      short: 'MV2'
    },
    street: 'Rua Pedra Azul',
    number: 100
  },
  interest: 'Web Developer',
  cnh: 'AB'
}

let experiencies = [{
  name: 'Assessor de Projetos',
  company: 'Include Engenharia',
  date: {
    start: 'jun de 2021',
    end: 'atual'
  },
  description: 'Aulas de Programação, Design e Tecnologias | Suporte de Rede e Máquinas | Design de Artes'
},
]

let formations = [{
  name: 'Ensino médio',
  school: 'Objetivo',
  date: {
    start: 'jan de 2013',
    end: 'dez de 2015'
  },
  description: ''
}]

let courses = [{
  name: 'Javascript',
  institute: 'B7Web',
  hours: 44,
  description: 'Javacript | Rest API | ES6 | DOM',
  //link: 'https://alunos.b7web.com.br/media/certificates/certificado_.jpg'
},
{
  name: 'HTML5 e CSS3',
  institute: 'B7Web',
  hours: 89,
  description: 'HTML5 | CSS3 | Responsividade | SEO',
  //link: 'https://alunos.b7web.com.br/media/certificates/certificado_.jpg'
},
{
  name: 'Typescript',
  institute: 'B7Web',
  hours: 20,
  description: 'Typescript',
  //link: 'https://alunos.b7web.com.br/media/certificates/certificado_.jpg'
},
// {
//   name: 'SASS',
//   institute: 'B7Web',
//   hours: 20,
//   description: 'Sass | Webpack',
//   link: 'https://alunos.b7web.com.br/media/certificates/certificado_9653220.jpg'
// },
{
  name: 'Banco de Dados',
  institute: 'B7Web',
  hours: 20,
  description: 'SQL | HeidiSQL',
  link: 'https://alunos.b7web.com.br/media/certificates/certificado_3610821.jpg'
},
{
  name: 'Bootstrap4',
  institute: 'B7Web',
  hours: 20,
  description: 'Bootstrap 4',
  link: 'https://alunos.b7web.com.br/media/certificates/certificado_8838042.jpg'
},
{
  name: 'Git/Github',
  institute: 'B7Web',
  hours: 20,
  description: 'Comandos Git | Repositórios Github',
  link: 'https://alunos.b7web.com.br/media/certificates/certificado_6673888.jpg'
},
{
  name: 'Design Gráfico',
  institute: 'Instituo Mix de Profissões',
  hours: 99,
  description: 'Photoshop | Illustrator | Premiere',
  link: ''
},
{
  name: 'Informática Básica',
  institute: 'Instituo Mix de Profissões',
  hours: 90,
  description: 'Word | Excel | Power Point | Windows | Montagem, Manutenção e Formatação',
  link: ''
},
{
  name: 'Logística',
  institute: 'Instituo Mix de Profissões',
  hours: 72,
  description: 'Logística',
  link: ''
},
{
  name: 'Recursos Humanos',
  institute: 'Instituo Mix de Profissões',
  hours: 88,
  description: 'Gestão de Pessoas',
  link: ''
},
{
  name: 'Administração Financeira',
  institute: 'Instituo Mix de Profissões',
  hours: 77,
  description: 'Gestão Financeira',
  link: ''
},
{
  name: 'Marketing',
  institute: 'Instituo Mix de Profissões',
  hours: 75,
  description: 'UX/UI | Marketing',
  link: ''
},
]

let languages = {
  portuguese: 'Fluente',
  english: 'Intermediário'
}

let skills = {
  hard: [
    // Languages
    'html5',
    'css3',
    'javascript',
    'typescript',
    'react',
    'styled-components',
    'sass',
    // 'php',
    // 'jquery',
    // 'redux',
    // 'nextjs',
    'bootstrap',
    'tailwind',
    // 'nodejs',
    'sql',
    // 'api',
    // 'jest',

    // Database
    'postgresql',
    'mysql',
    'firebase',
    // 'graphql',
    // 'mongodb',

    // Tools
    'git',
    'npm',
    'yarn',
    'windows',
    'linux',
    'webpack',
    'vscode',

    // Design
    'figma',
    // 'adobeXD'

    // 'Office'
    // 'excel',
    // 'word',
    // 'powerPoint',
  ],
  soft: [
    'Pensamento Computacional',
    'Comprometimento',
    'Confiabilidade',
    'Empatia',
    'Resiliência',
    'Trabalho em equipe'
  ],
  stacks: [{
    name: 'front-end',
    level: 85
  },
  {
    name: 'back-end',
    level: 40
  },
  {
    name: 'mobile',
    level: 50
  },
  ]
}

let social = [{
  name: 'github',
  link: 'https://github.com/thiagojordao98',
},
{
  name: 'linkedin',
  link: 'https://linkedin.com/in/thiagojordao98',
},
{
  name: 'whatsapp',
  link: 'https://api.whatsapp.com/send/?phone=5584996843647&text=Ol%C3%A1+Thiago,+tudo+bem?&app_absent=0',
},
{
  name: 'gmail',
  link: 'mailto:thiagojordao98@gmail.com',
},
{
  name: 'curriculum',
  link: 'https://drive.google.com/file/d/1jpGjPwaBPo1CkkFCH-jrEkYXPNw7tEDN/view?usp=sharing',
}
]

let portfolio = [{
  name: 'Lifoo',
  desc: 'Site desenvolvido na disciplina de PES',
  site: 'https://lifoo.netlify.app/',
  github: '',
  img: 'lifoo',
  stacks: [
    'react',
    'tailwind'
  ]
},
{
  name: 'Expense Tracker',
  desc: 'Sistema para controle financeiro com filtro para buscar categorias e datas específicas.',
  site: 'https://expense-tracker-lilac.vercel.app/',
  github: 'https://github.com/thiagojordao98/expense-tracker',
  img: 'expense-tracker',
  stacks: [
    'react',
    'typescript',
    'styled-components'
  ]
},
{
  name: 'Pokedex',
  desc: 'Pokedex para catalogar os Pokémons de Kanto.',
  site: 'https://pokedex-kantoo.netlify.app/',
  github: 'https://github.com/thiagojordao98/kanto-pokedex',
  img: 'pokedex',
  stacks: [
    'html5',
    'css3',
    'javascript'
  ]
},
{
  name: 'AWAX',
  desc: 'Template de landing page criado apenas com HTML e CSS',
  site: 'https://yagrrusso.github.io/awax/',
  github: 'https://github.com/YaGRRusso/awax',
  img: 'awax',
  stacks: [
    'html5',
    'css3'
  ]
},
{
  name: 'Cadastro DEV',
  desc: 'Tela de cadastro criada para registro de usário.',
  site: 'https://yagrrusso.github.io/',
  github: 'https://github.com/YaGRRusso/',
  img: 'cadastro',
  stacks: [
    'react',
    'typescript'
  ]
},
{
  name: '',
  desc: '',
  site: 'https://yagrrusso.github.io/starbucks/',
  github: '',
  img: '',
  stacks: [
    'html5',
    'css3'
  ]
},
{
  name: 'Pizzas',
  desc: 'Projeto de delivery de pizzas gerado com JS baseado em um array de dados.',
  site: 'https://yagrrusso.github.io/pizza-delivery/',
  github: 'https://github.com/YaGRRusso/pizza-delivery',
  img: 'pizzas',
  stacks: [
    'html5',
    'css3',
    'javascript',
    'React'
  ]
},
{
  name: 'React + Rest API',
  desc: '',
  site: '',
  github: '',
  img: 'pizzas',
  stacks: [
    'react',
    'api',
    'tailwind'
  ]
},
{
  name: 'React + Rest API',
  desc: '',
  site: '',
  github: '',
  img: 'pizzas',
  stacks: [
    'react',
    'api',
    'tailwind'
  ]
},
{
  name: 'React + Rest API',
  desc: '',
  site: '',
  github: '',
  img: 'pizzas',
  stacks: [
    'react',
    'api',
    'tailwind'
  ]
},
{
  name: 'React + Rest API',
  desc: '',
  site: '',
  github: '',
  img: 'pizzas',
  stacks: [
    'react',
    'api',
    'tailwind'
  ]
},
{
  name: 'React + Rest API',
  desc: '',
  site: '',
  github: '',
  img: 'pizzas',
  stacks: [
    'react',
    'api',
    'tailwind'
  ]
}
]