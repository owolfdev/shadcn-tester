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

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: () => null,

    cell: ({ row }) => {
      const exid = row.getValue("exid") as string
      const amount = parseFloat(row.getValue("amount"))
      const status = row.getValue("status") as string
      const email = row.getValue("email") as string
      const description = row.getValue("description") as string
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      console.log("exid", exid)

      return (
        <div className="flex justify-between w-full gap-6 sm:gap-20 h-[100px] sm:h-[80px]">
          <div className="w-1/2">
            <div className="font-medium">Amount: {formatted}</div>
            <div>Status: {status}</div>
            <div>Email: {email}</div>
            <div className="font-medium">id: {exid}</div>
          </div>
          <div className="w-1/2 px-3 py-2 overflow-hidden border rounded-md">
            {description}
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: "email",
    cell: ({ row }) => {
      const email = row.getValue("email") as String
      return null
    },
    header: () => null,
  },
  {
    accessorKey: "description",
    cell: ({ row }) => {
      const description = row.getValue("description") as String
      return null
    },
    header: () => null,
  },
  {
    accessorKey: "amount",
    header: () => null,

    cell: () => null,
  },
  {
    accessorKey: "exid",
    header: () => null,
    cell: () => null,
  },
]

export const columnsMobile: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: () => null,

    cell: ({ row }) => {
      const exid = row.getValue("exid") as string
      const amount = parseFloat(row.getValue("amount"))
      const status = row.getValue("status") as string
      const email = row.getValue("email") as string
      const description = row.getValue("description") as string
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      console.log("exid", exid)

      return (
        <div className="flex justify-between w-full gap-6 sm:gap-20 h-[100px] sm:h-[80px]">
          <div className="w-1/2">
            <div className="font-medium">Amount: {formatted}</div>
            <div>Status: {status}</div>
            <div>Email: {email}</div>
            <div className="font-medium">id: {exid}</div>
          </div>
          <div className="w-1/2 px-3 py-2 overflow-hidden border rounded-md">
            {description.slice(0, 50)}...
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: "email",
    cell: ({ row }) => {
      const email = row.getValue("email") as String
      return null
    },
    header: () => null,
  },
  {
    accessorKey: "description",
    cell: ({ row }) => {
      const description = row.getValue("description") as String
      return null
    },
    header: () => null,
  },
  {
    accessorKey: "amount",
    header: () => null,

    cell: () => null,
  },
  {
    accessorKey: "exid",
    header: () => null,
    cell: () => null,
  },
]

// export const columnsMobile: ColumnDef<Payment>[] = [
//   {
//     accessorKey: "status",
//     header: () => null,

//     cell: ({ row }) => {
//       const amount = parseFloat(row.getValue("amount"))
//       const status = row.getValue("status") as string
//       const email = row.getValue("email") as string
//       const description = row.getValue("description") as string
//       const formatted = new Intl.NumberFormat("en-US", {
//         style: "currency",
//         currency: "USD",
//       }).format(amount)
//       const id = row.getValue("exid") as string

//       return (
//         <div className="flex justify-between w-full gap-6 sm:gap-20 h-[100px] sm:h-[80px]">
//           <div className="w-1/2">
//             <div className="font-medium">Amount: {formatted}</div>
//             <div>Status: {status}</div>
//             <div>Email: {email}</div>
//             <div className="font-medium">id: {id}</div>
//           </div>
//           <div className="w-1/2 px-3 py-2 overflow-hidden border rounded-md">
//             {description.slice(0, 50)}...
//           </div>
//         </div>
//       )
//     },
//   },
//   {
//     accessorKey: "email",
//     cell: ({ row }) => {
//       const email = row.getValue("email") as String
//       return null
//     },
//     header: () => null,
//   },
//   {
//     accessorKey: "description",
//     cell: ({ row }) => {
//       const description = row.getValue("description") as String
//       return null
//     },
//     header: () => null,
//   },
//   {
//     accessorKey: "amount",
//     header: () => null,

//     cell: () => null,
//   },
//   {
//     accessorKey: "exid",
//     header: () => null,
//     cell: () => null,
//   },
// ]
