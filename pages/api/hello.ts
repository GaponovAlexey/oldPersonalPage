import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  frontend: {
    title: string
  }[]
  backend: {
    title: string
  }[]
  uiux: {
    title: string
  }[]
  analytics: {
    title: string
  }[]
  Other: {
    title: string
  }[]
}

const skills = {
  frontend: [
    { title: 'JS | TS' },
    { title: 'HTML | CSS | Sass' },
    { title: 'React | NextJs' },
    { title: 'React Hooks' },
    { title: 'React Context API' },
    { title: 'Redux Toolkit' },
    { title: 'Redux Saga' },
    { title: 'Redux Persist' },
    { title: 'RTK Query' },
    { title: 'React Router6' },
    { title: 'React Transition Group' },
    { title: 'React Hook Form' },
    { title: 'Slick' },
    { title: 'PassportJs' },
    { title: 'TailwindCSS' },
    { title: 'Styled-Components' },
    { title: 'Emotion' },
  ],
  backend: [
    { title: 'NodeJS' },
    { title: 'Express' },
    { title: 'RESTful API' },
    { title: 'SQL' },
    { title: 'PostgreSQL' },
    { title: 'Firebase' },
    { title: 'Supabase' },
    { title: 'MongoDB' },
    { title: 'Mongoose' },
    { title: 'GraphQL' },
    { title: 'Apollo Client' },
    { title: 'Apollo Server' },
  ],
  uiux: [
    { title: 'Figma' },
    { title: 'Framer motion' },
    { title: 'PixiJS' },
    { title: 'Materialize' },
    { title: 'Ant Design of React' },
    { title: 'Material-UI' },
    { title: 'Material Design 3' },
    { title: 'React-Vis' },
    { title: 'UIkit' },
    { title: 'Chart.js' },
    { title: 'React-Motion' },
    { title: 'React Materialize' },
    { title: 'React Bootstrap' },
    { title: 'React-Spring' },
    { title: 'Tailblocks' },
  ],
  analytics: [
    { title: 'Python' },
    { title: 'Amplitude' },
    { title: 'Tableau' },
    { title: 'Power BL' },
    { title: 'Highcharts' },
    { title: 'GoJs' },
    { title: 'Google Excel' },
    { title: 'Pandas' },
    { title: 'Numpy' },
    { title: 'Matplotlib' },
    { title: 'Seaborn' },
    { title: 'Scikit-learn' },
    { title: 'Google Analytics' },
    { title: 'Google Tag Manager' },
    { title: 'Google Ads' },
    { title: 'GoJs' },
  ],
  Other: [
    { title: 'npm | yarn' },
    { title: 'GitHub Pages' },
    { title: 'Git' },
    { title: 'Webpack' },
    { title: 'Gulp' },
    { title: 'Laravel Mix' },
    { title: 'Babel' },
    { title: 'ESLint' },
    { title: 'Prettier' },
    { title: 'Jest' },
    { title: '1С' },
    { title: 'Bitrix24' },
    { title: 'Wordpress' },
    { title: 'Jira' },
    { title: 'Confluence' },
    { title: 'Trello' },
    { title: 'Slack' },
    { title: 'EditorConfig' },
    { title: 'Json2ts' },
    { title: 'Cors' },
    { title: 'Codepen' },
    { title: 'Codesandbox' },
    { title: 'Codesandbox' },
    { title: 'svgomg' },
    { title: 'imagecompressor' },
    { title: 'Autoprefixer CSS' },
    { title: 'CSS Minifier' },
    { title: 'Tabmine ' },
  ],
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(skills)
}
