import s from '../../styles/Home.module.scss'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
const Header = () => {
  return (
    <div className={s.componentHeader}>
      <Head>
        <title>AlexeyGaponov</title>
        <link rel='icon' href='#!' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <h1>Personal</h1>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/workShop'>Workshop</Link>
        </li>
        <li>
          <Link href='/Skills'>Skills</Link>
        </li>
        <motion.li
          transition={{
            type: 'just',
            repeat: Infinity,
          }}
          animate={{ rotate: 2 }}
        >
          contact me
        </motion.li>
      </ul>
    </div>
  )
}

export default Header
