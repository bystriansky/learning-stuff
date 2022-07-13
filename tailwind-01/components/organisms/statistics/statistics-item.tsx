import { ReactNode } from 'react'

type Props = {
  title: ReactNode
  amount: ReactNode
}

export const StatisticsItem = ({ title, amount }: Props) => (
  <div className="text-center">
    <div className="mb-3 text-3xl md:text-5xl">{amount}</div>
    <div className="text-sm">{title}</div>
  </div>
)
