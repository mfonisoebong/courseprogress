import { FC } from "react"
import { FormCard } from "../FormCard"
import { Select } from "../FormControl/Select"

export const Membership: FC = () => {
  return (
    <FormCard>
      <div className="mx-1"></div>
      <div className="space-y-5">
        <div>
          <h4 className="flex items-center space-x-2 font-bold ">
            <input type="checkbox" />
            <span>Membership</span>
          </h4>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
            exercitationem reiciendis, voluptat Lorem, ipsum dolor.
          </p>
        </div>
        <div className="w-8/12">
          <Select className="w-full text-sm">
            <option>Select a membership bundle</option>
          </Select>
          <small>
            Setup a{" "}
            <a className="font-semibold text-blue-500">membership bundle</a>
          </small>
        </div>
      </div>
    </FormCard>
  )
}
