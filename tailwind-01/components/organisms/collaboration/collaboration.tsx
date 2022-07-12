import Image from 'next/image'
import { Headline, HeadlineSubtitle, HeadlineTitle } from '../../molecules'

export const Collaboration = () => (
  <section className="p-20 pt-24 pb-0">
    <Headline>
      <HeadlineTitle>Power Collaboration</HeadlineTitle>
      <HeadlineSubtitle>
        List and card are the building blocks of organizing work on a Rite's
        board. Grow from there with task assignments, timelines, productivity
        metrics, calendars, and more.
      </HeadlineSubtitle>
    </Headline>

    <div className="flex  gap-7">
      <Image alt="Office" width="640" height="800" src="/img/office.jpg" />
      <Image alt="Building" width="1200" height="800" src="/img/building.jpg" />
    </div>
  </section>
)
