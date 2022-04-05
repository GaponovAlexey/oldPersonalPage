import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout/Layout'

const Home: NextPage = () => {
  return (
    <div>
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
      <Layout>
        <h1>hi</h1>
      </Layout>
    </div>
  )
}

export default Home
