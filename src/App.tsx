import { Card } from "./components/Card"
import { Membership } from "./components/Membership"
import { OneTimePayment } from "./components/OneTimePayment"
import { PaidCourse } from "./components/PaidCourse"

function App() {
  return (
    <main className="pt-10">
      <Card className="max-w-xl mx-auto space-y-5">
        <PaidCourse />
        <OneTimePayment />
        <Membership />
      </Card>
    </main>
  )
}

export default App
