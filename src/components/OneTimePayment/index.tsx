import { FC } from "react"
import { FormCard } from "../FormCard"
import { Input } from "../FormControl/Input"
import { Select } from "../FormControl/Select"

const CURRENCIES = ["USD", "AUD", "NGN", "USDT"]

export const OneTimePayment: FC = () => {
  return (
    <FormCard>
      <div className="mx-1"></div>
      <div className="space-y-5">
        <div>
          <h4 className="flex items-center space-x-2 font-bold ">
            <input type="checkbox" />
            <span>One time payment</span>
          </h4>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
            exercitationem reiciendis, voluptatem doloribus totam ea non neque.
          </p>
        </div>
        <div className="flex w-8/12">
          <Input
            placeholder="$ 1,000.00"
            className="w-9/12 border-r-0 rounded-tr-none rounded-br-none"
          />
          <Select className="w-3/12 border-l-0 rounded-tl-none rounded-bl-none">
            {CURRENCIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </Select>
        </div>
      </div>
    </FormCard>
  )
}
