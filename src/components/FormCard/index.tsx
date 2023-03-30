import { FC, PropsWithChildren } from "react"

export const FormCard: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="border-b-[0.1rem] border-solid border-gray-300 py-3 flex space-x-6">
      {children}
    </div>
  )
}
