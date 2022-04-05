import { FC } from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout: FC = ({ children }) => {
  return (
    <div className='w-9/12 m-auto'>
      <Header />
      <div className='h-screen'>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
