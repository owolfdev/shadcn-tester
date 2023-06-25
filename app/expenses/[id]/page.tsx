import { useRouter } from "next/navigation"

import { Expense } from "../columns"
import dataArray from "../data"

export default function PaymentPage({ params }: { params: { id: string } }) {
  const expenseData = dataArray
  const data = expenseData.find((item) => item.id === params.id)
  // // const data = dataArray
  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Payment
        </h1>
      </div>
      {/* <div>{JSON.stringify(dataArray)}</div> */}
      <p>URL Parameter: {params.id}</p>
      <div>Description: {JSON.stringify(data?.description)}</div>
      <div>{JSON.stringify(data)}</div>
    </section>
  )
}
