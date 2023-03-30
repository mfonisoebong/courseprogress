import { FC, SelectHTMLAttributes } from "react"

type InputProps = SelectHTMLAttributes<HTMLSelectElement>

export const Select: FC<InputProps> = ({ className, ...restProps }) => {
  const inputClassName = `p-2 bg-white border-gray-400 border-solid border-[0.1rem] outline-none rounded-lg ${className}`
  return <select className={inputClassName} {...restProps} />
}
