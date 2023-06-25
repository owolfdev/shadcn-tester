"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type Payment = {
  exid: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
  description: string
}

export type Expense = {
  id: string
  date: string
  user_id: string | null
  amount: number
  description: string
  location: string
  account: string
  categories: string[]
  currency: string | null
  merchant: string
  receipt: string | null
  author: string | null
}

export const columns: ColumnDef<Expense>[] = [
  {
    accessorKey: "id",
    header: () => null,

    cell: ({ row }) => {
      const id = row.getValue("id") as string
      const amount: number = row.getValue("amount")
      const convertedAmount: number = amount / 100
      const formattedAmount: string = convertedAmount.toFixed(2)
      const date = row.getValue("date") as string
      const description = row.getValue("description") as string
      const merchant = row.getValue("merchant") as string
      const categoriesRaw = row.getValue("categories") as string[]

      const categories = categoriesRaw.join(", ")

      // console.log("exid", exid)
      const account = row.getValue("account") as string

      return (
        <div className="flex justify-between w-full gap-6 sm:gap-20 h-[110px] sm:h-[110px] overflow-hidden">
          <div className="w-1/2">
            <div className="">
              <span className="font-semibold">Amount: </span>
              <span className="text-lg ">&#36;</span>
              {/* <span className="text-lg ">&#3647;</span> */}
              <span className="text-lg font-bold">{formattedAmount}</span>
            </div>
            <div className="text-sm font-medium ">Date: {date}</div>
            <div className="font-bold">Merchant: {merchant}</div>
            <div className="text-xs text-gray-500">
              Categories: {categories}
            </div>
            <div className="text-sm font-medium">Account: {account}</div>
          </div>
          <div className="w-1/2 px-3 py-2 overflow-hidden bg-gray-100 border rounded-md">
            {description}
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: "date",
    cell: () => null,
    header: () => null,
  },
  {
    accessorKey: "amount",
    cell: () => null,
    header: () => null,
  },
  {
    accessorKey: "description",
    header: () => null,

    cell: () => null,
  },
  {
    accessorKey: "merchant",
    header: () => null,
    cell: () => null,
  },
  {
    accessorKey: "categories",
    header: () => null,
    cell: () => null,
  },
  {
    accessorKey: "account",
    header: () => null,
    cell: () => null,
  },
]

export const columnsMobile: ColumnDef<Expense>[] = [
  {
    accessorKey: "id",
    header: () => null,

    cell: ({ row }) => {
      const id = row.getValue("id") as string
      const amount: number = row.getValue("amount")
      const convertedAmount: number = amount / 100
      const formattedAmount: string = convertedAmount.toFixed(2)
      const date = row.getValue("date") as string
      const description = row.getValue("description") as string
      const merchant = row.getValue("merchant") as string
      const categoriesRaw = row.getValue("categories") as string[]

      const categories = categoriesRaw.join(", ")

      // console.log("exid", exid)
      const account = row.getValue("account") as string

      return (
        <div className="flex justify-between w-full gap-6 sm:gap-20 h-[110px] sm:h-[90px] overflow-hidden">
          <div className="w-1/2">
            <div className="">
              <span className="text-lg ">&#36;</span>
              {/* <span className="text-lg ">&#3647;</span> */}
              <span className="text-lg font-bold">{formattedAmount}</span>
            </div>
            <div className="text-sm font-medium">{date}</div>
            <div className="font-bold">{merchant}</div>
            <div className="text-xs text-gray-500">{categories}</div>
            <div className="text-sm font-medium">{account}</div>
          </div>
          <div className="w-1/2 px-3 py-2 overflow-hidden bg-gray-100 border rounded-md">
            {description.slice(0, 50)}
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: "date",
    cell: () => null,
    header: () => null,
  },
  {
    accessorKey: "amount",
    cell: () => null,

    header: () => null,
  },
  {
    accessorKey: "description",
    header: () => null,

    cell: () => null,
  },
  {
    accessorKey: "merchant",
    header: () => null,
    cell: () => null,
  },
  {
    accessorKey: "categories",
    header: () => null,
    cell: () => null,
  },
  {
    accessorKey: "account",
    header: () => null,
    cell: () => null,
  },
]
