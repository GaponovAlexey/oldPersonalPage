import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout/Layout'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>AlexeyGaponov</title>
        <link rel='icon' href='#!' />
      </Head>
      <Layout>
        <h1>hi</h1>
      </Layout>
    </div>
  )
}

export default Home
