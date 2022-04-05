import { FC } from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className='h-screen'>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
