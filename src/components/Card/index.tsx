import { FC, HtmlHTMLAttributes, PropsWithChildren } from "react"

type CardProps = PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>>

export const Card: FC<CardProps> = ({ className, ...restProps }) => {
  const cardClassname = `p-4 bg-gray-200 ${className}`

  return <div className={cardClassname} {...restProps} />
}
