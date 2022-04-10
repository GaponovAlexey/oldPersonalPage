import { FC } from 'react'
import Footer from './Footer'
import Header from './Header'
import s from '../../styles/Home.module.scss'

const Layout: FC = ({ children }) => {
  return (
    <div className={s.layout}>
      <Header />
      <div className={s.child}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
