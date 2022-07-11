import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="bg-primary-main min-h-screen max-w-screen-lg py m-auto">
      <Head>
        <title>rite.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="text-gray-300 text-sm flex items-center justify-between px-12 py-5">
        <ul className="flex gap-8">
          <li className="font-medium">Features</li>
          <li className="font-medium">Pricing & Plans</li>
        </ul>
        <div className="text-3xl font-medium">rite.</div>
        {/*  TODO: dropdown */}
        <Link href="/">
          <a className="border-2 px-7 py-2" href="#">
            Sing Up
          </a>
        </Link>
      </header>

      <main>
        <section className="px-20 py-20">
          <h1 className="w-3/4 mb-10 text-8xl leading-none font-semibold">
            Manage Your Big Project.
          </h1>
          <p className="w-1/2 mb-10 text-gray-300">
            Intuitive features give any team the ability to quickly set up and
            customize workflows productive team.
          </p>

          <Link href="/">
            <a href="/" className="flex items-center text-3xl">
              <span className="mr-5">Get Started</span>
              <div className="relative overflow-hidden flex items-center w-10 h-10 bg-blue-900 rounded-full">
                <div className="w-8">
                  <svg className="fill-current" viewBox="0 0 20 20">
                    <path
                      d="M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0
	l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109
	c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483
	c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788
	S1.293,9.212,1.729,9.212z"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
          </Link>
        </section>

        <section className="flex text-4xl justify-around px-20 bg-gray-800">
          <div className="text-center">
            <div>49k +</div>
            <div>Users</div>
          </div>
          <div>
            <div>2.3k +</div>
            <div>Subscriber</div>
          </div>
          <div>
            <div>198 +</div>
            <div>Country</div>
          </div>
          <div>
            <div>76 %</div>
            <div>Profit</div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
