import { PerksItem } from './perks-item'

export const Perks = () => (
  <section className="flex flex-col gap-20 px-20 py-24">
    <PerksItem
      title="Enterprise"
      desc="Tasks, deadlines, projects. Bring it all together with the project management tool that over 2 Million teams love & 1000s of IT Admins trust."
    />
    <PerksItem
      title="Everything You Need"
      desc="Rite cards and your portal to more organized work - where every single part of your tas can be managed, tracked and shared with teammates. Open and card to uncover an ecosystem of checklists, due dates."
    />
    <PerksItem
      title="No-code"
      desc="Let the robots do the work - so your team can focus on work that matters. With Rite's built-in automation, Butler, reduce the number of tedious tasks."
    />
  </section>
)
