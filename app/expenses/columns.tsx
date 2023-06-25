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
  created_at: string
  user_id: string | null
  amount: string
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
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "THB",
      }).format(amount)
      const date = row.getValue("created_at") as string
      const description = row.getValue("description") as string
      const merchant = row.getValue("merchant") as string
      const categoriesRaw = row.getValue("categories") as string[]

      const categories = categoriesRaw.join(", ")

      // console.log("exid", exid)
      const account = row.getValue("account") as string

      return (
        <div className="flex justify-between w-full gap-6 sm:gap-20 h-[110px] sm:h-[90px]">
          <div className="w-1/2">
            <div className="font-medium">
              Amount: <span className="text-lg font-bold">{formatted}</span>
            </div>
            <div className="font-medium">Date: {date}</div>
            <div className="font-medium">Merchant: {merchant}</div>
            <div className="font-medium">Categories: {categories}</div>
            <div className="font-medium">Account: {account}</div>
          </div>
          <div className="w-1/2 px-3 py-2 overflow-hidden bg-gray-100 border rounded-md">
            {description}
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: "created_at",
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
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "THB",
      }).format(amount)
      const date = row.getValue("created_at") as string
      const description = row.getValue("description") as string
      const merchant = row.getValue("merchant") as string
      const categories = row.getValue("categories") as string[]

      const formattedCategories = categories.join(", ")
      const account = row.getValue("account") as string

      // console.log("exid", exid)

      return (
        <div className="flex justify-between w-full gap-6 sm:gap-20 h-[100px] sm:h-[90px]">
          <div className="w-1/2">
            <div className="text-sm font-medium">
              Amount: <span className="text-sm font-bold">{formatted}</span>
            </div>
            <div className="text-sm font-medium ">Date: {date}</div>
            <div className="text-sm font-medium ">Merch: {merchant}</div>
            <div className="text-sm font-medium ">
              Cat: {formattedCategories}
            </div>
            <div className="font-medium">Account: {account}</div>
          </div>
          <div className="w-1/2 px-3 py-2 overflow-hidden bg-gray-100 border rounded-md">
            {description.slice(0, 50)}
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: "created_at",
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
