import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { Expense } from "../columns"
import dataArray from "../data"

export default function PaymentPage({ params }: { params: { id: string } }) {
  const expenseData = dataArray
  const data = expenseData.find((item) => item.id === params.id)
  const formatDate = (date: string) => {
    const d: Date = new Date(date)
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
    const formattedDate: string = d.toLocaleDateString("en-US", options)
    return formattedDate
  }
  const convertedAmount: number = data?.amount! / 100
  const formattedAmount: string = convertedAmount.toFixed(2)
  const receiptImage = data?.receipt as string
  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10 ">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <Link href="/expenses">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Expenses
          </h1>
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        <div>{formatDate(data?.date!)}</div>
        <div className="text-lg mb-2">
          <span className="text-lg ">&#36;</span>
          <span className="font-bold">{formattedAmount}</span>
        </div>{" "}
        <div className="px-3 py-2 overflow-hidden rounded-md border ">
          <div>
            <span className="font-bold">Description</span>
          </div>
          <div className="px-3 py-2 overflow-hidden rounded-md border mt-2 mb-4 bg-slate-100 dark:bg-slate-900">
            <div>{data?.description}</div>
          </div>

          {/* <div className="">
            <span className="font-bold">Categories:</span> {data?.categories}
          </div> */}
          <div>
            <div className="font-bold mb-2">Categories</div>{" "}
            <div className="flex gap-2 flex-wrap mb-4">
              {data?.categories.split(",").map((category) => {
                return (
                  <div className="px-2 py-1 bg-slate-100 dark:bg-slate-900 rounded-md border">
                    {category}
                  </div>
                )
              })}
            </div>
          </div>
          <div>
            <span className="font-bold">Merchant</span> {data?.merchant}
          </div>
          <div>
            <span className="font-bold">Location</span> {data?.location}
          </div>
          <div>
            <span className="font-bold">Account</span> {data?.account}
          </div>
          <div className="w-full sm:w-1/2 mb-1 mt-4 border rounded-lg overflow-hidden">
            <img src={data?.receipt} alt="" />
            {/* <Image src={receiptImage} alt="receipt" width={500} height={500} /> */}
          </div>
        </div>
      </div>
    </section>
  )
}
