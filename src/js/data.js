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
      short: 'PRN'
    },
    neighborhood: {
      long: 'Parque das Nações',
      short: 'PDN'
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
  description: 'Desenvolver aplicações web e mobile e acompanhar os demais projetos de consultoria da empresa garantindo os padrões de qualidade.'
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
  link: 'https://alunos.b7web.com.br/media/certificates/certificado_7877400.jpg'
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
  link: 'https://alunos.b7web.com.br/media/certificates/certificado_8661407.jpg'
},
// {
//   name: 'SASS',
//   institute: 'B7Web',
//   hours: 20,
//   description: 'Sass | Webpack',
//   link: ''
// },
{
  name: 'Banco de Dados',
  institute: 'B7Web',
  hours: 20,
  description: 'SQL | HeidiSQL',
  link: ''
},
{
  name: 'Bootstrap4',
  institute: 'B7Web',
  hours: 20,
  description: 'Bootstrap 4',
  link: ''
},
{
  name: 'Git/Github',
  institute: 'B7Web',
  hours: 20,
  description: 'Comandos Git | Repositórios Github',
  link: ''
}
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
    level: 75
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
  name: 'Dashboard de Vendas',
  desc: 'Relatório de vendas com porcetagem e taxa de sucesso para cada vendedor',
  site: 'https://salles-dashboard.netlify.app/dashboard',
  github: 'https://github.com/thiagojordao98/projeto-sds5',
  img: 'sales-dashboard',
  stacks: [
    'react',
    'typescript',
    'spring-boot'
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
  site: 'site-awax.netlify.app',
  github: 'https://github.com/thiagojordao98/projeto-AWAX/settings',
  img: 'awax',
  stacks: [
    'html5',
    'css3'
  ]
},
{
  name: '',
  desc: '',
  site: '',
  github: '',
  img: '',
  stacks: [
    'react',
    'typescript',
    'spring-boot'
  ]
},
{
  name: 'Pizzas',
  desc: 'Projeto de delivery de pizzas gerado com JS baseado em um array de dados.',
  site: 'https://pizzaria-online.netlify.app',
  github: 'https://github.com/thiagojordao98/projeto-pizzaria-online',
  img: 'pizzas',
  stacks: [
    'html5',
    'css3',
    'javascript',
    'React'
  ]
},
{
  name: '',
  desc: '',
  site: '',
  github: '',
  img: '',
  stacks: [
    'react',
    'api',
    'tailwind'
  ]
},
{
  name: '',
  desc: '',
  site: '',
  github: '',
  img: '',
  stacks: [
    'react',
    'api',
    'tailwind'
  ]
}
]