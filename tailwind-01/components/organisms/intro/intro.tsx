import { Link } from '../../atoms/link'
import { ArrowIcon } from '../../../icons'

export const Intro = () => (
  <section className="wrapper py-20 sm:py-24 intro-bg-img">
    <h1 className="lg:w-4/5 mb-10 text-7xl md:text-8xl leading-none font-semibold">
      Manage Your Big Project.
    </h1>

    <p className="lg:w-1/2 mb-10 text-text-light">
      Intuitive features give any team the ability to quickly set up and
      customize workflows productive team.
    </p>

    <Link href="/">
      <div className="flex items-center text-3xl">
        <span className="mr-5">Get Started</span>

        <div className="relative overflow-hidden flex items-center w-10 h-10 bg-secondary-main rounded-full">
          <div className="w-8">
            <ArrowIcon />
          </div>
        </div>
      </div>
    </Link>
  </section>
)
