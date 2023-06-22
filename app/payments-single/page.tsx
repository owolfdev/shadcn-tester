import { Payment, columns } from "./columns"
import dataArray from "./data"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  console.log("data array", dataArray)
  return [...(dataArray as Payment[])]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container py-10 mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
