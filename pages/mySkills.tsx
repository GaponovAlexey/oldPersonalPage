import { motion } from 'framer-motion'
import s from '../styles/Home.module.scss'
const Skills = () => {
  const frontend = [
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
  ]

  const backend = [
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
  ]

  const uiux = [
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
  ]

  const analytics = [
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
  ]
  const Other = [
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
  ]
  return (
    <div>
      <ul className={s.skills}>
        <div>
          <h2>Frontend</h2>
          {frontend.map((el, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {el.title}
            </motion.li>
          ))}
        </div>
        <div>
          <h2>UX / UI</h2>
          {uiux.map((el, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: +20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {el.title}
            </motion.li>
          ))}
        </div>
        <div>
          <h2>Backend</h2>
          {backend.map((el, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: +20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {el.title}
            </motion.li>
          ))}
        </div>
        <div>
          <h2>Analytics</h2>
          {analytics.map((el, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: +20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              {el.title}
            </motion.li>
          ))}
        </div>
        <div>
          <h2>Other</h2>
          {Other.map((el, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: +20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
            >
              {el.title}
            </motion.li>
          ))}
        </div>
      </ul>
    </div>
  )
}

export default Skills
