"use client"

import React, { useEffect } from "react"
import { useMediaQuery } from "react-responsive"

import { Payment, columns, columnsMobile } from "./columns"
import dataArray from "./data"
import { DataTable } from "./data-table"

function DemoPage() {
  const isMobile = useMediaQuery({ maxWidth: 740 })

  const [data, setData] = React.useState<Payment[]>([])

  async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    console.log("data array", dataArray)
    return [...(dataArray as Payment[])]
  }

  useEffect(() => {
    getData().then((data) => {
      setData(data)
    })
  }, [])

  return (
    <div className="container py-10 mx-auto">
      {isMobile ? (
        <DataTable columns={columnsMobile} data={data} />
      ) : (
        <DataTable columns={columns} data={data} />
      )}
    </div>
  )
}

export default DemoPage
