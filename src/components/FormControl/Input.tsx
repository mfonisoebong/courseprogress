import { FC, InputHTMLAttributes } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input: FC<InputProps> = ({ className, ...restProps }) => {
  const inputClassName = `p-2 border-gray-400 border-solid border-[0.1rem] outline-none rounded-lg ${className} `
  return <input className={inputClassName} {...restProps} />
}
