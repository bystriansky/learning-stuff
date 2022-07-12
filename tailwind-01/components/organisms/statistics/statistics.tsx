import { StatisticsItem } from './statistics-item'

export const Statistics = () => (
  <section className="flex justify-around px-20 py-16 bg-primary-light">
    <StatisticsItem amount="49k +" title="Users"></StatisticsItem>
    <StatisticsItem amount="2.3k +" title="Subscriber"></StatisticsItem>
    <StatisticsItem amount="198 +" title="Country"></StatisticsItem>
    <StatisticsItem amount="76 %" title="Profit"></StatisticsItem>
  </section>
)
