import { FC } from "react"
import { FormCard } from "../FormCard"

export const PaidCourse: FC = () => {
  return (
    <FormCard>
      <div>
        <input type="radio" />
      </div>
      <div className="space-y-2">
        <h3 className="font-bold text-xl">Paid course</h3>
        <p className="text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
          accusantium quia aliquid. Ad, animi quasi.
        </p>
      </div>
    </FormCard>
  )
}
