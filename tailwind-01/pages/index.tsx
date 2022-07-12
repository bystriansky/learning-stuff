import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Advantages,
  Banner,
  Collaboration,
  Perks,
  Intro,
  PageHeader,
  PageFooter,
  Statistics,
} from '../components/organisms'

const Home: NextPage = () => {
  return (
    <div className="bg-primary-main min-h-screen max-w-screen-lg m-auto">
      <Head>
        <title>rite.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader />

      <main>
        <Intro />
        <Statistics />
        <Advantages />
        <Banner variant="big" title="More Features as Your Team Grow" />
        <Collaboration />
        <Perks />
        <Banner variant="small" title="Start and Move Forward." />
      </main>

      <PageFooter />
    </div>
  )
}

export default Home
