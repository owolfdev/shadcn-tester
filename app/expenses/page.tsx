"use client"

import React, { useEffect } from "react"
import Link from "next/link"
import { useMediaQuery } from "react-responsive"

import { Expense, Payment, columns, columnsMobile } from "./columns"
import dataArray from "./data"
import { DataTable } from "./data-table"

function DemoPage() {
  const isMobile = useMediaQuery({ maxWidth: 740 })
  const [data, setData] = React.useState<Expense[]>([])

  async function getData(): Promise<Expense[]> {
    // Fetch data from your API here.
    // console.log("data array", dataArray)
    const fetchedData = dataArray
    const sortedData = fetchedData.sort((a: Expense, b: Expense) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    return [...(sortedData as Expense[])]
  }

  useEffect(() => {
    getData().then((data) => {
      setData(data)
    })
  }, [])

  useEffect(() => {
    // console.log("data:", data)
  }, [data])

  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10 ">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <Link href="/expenses">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Expenses
          </h1>
        </Link>
      </div>
      <div className="">
        <div className="max-w-[800px]">
          {isMobile ? (
            <DataTable columns={columnsMobile} data={data} />
          ) : (
            <DataTable columns={columns} data={data} />
          )}
        </div>
      </div>
    </section>
  )
}

export default DemoPage
