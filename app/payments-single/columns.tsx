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

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
  description: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: () => null,
    // header: ({ column }) => {
    //   return (
    //     <div>
    //       <Button
    //         variant="ghost"
    //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //       >
    //         Status
    //         <ArrowUpDown className="w-4 h-4 ml-2" />
    //       </Button>
    //       {/* <Button
    //         variant="ghost"
    //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //       >
    //         Amount
    //         <ArrowUpDown className="w-4 h-4 ml-2" />
    //       </Button> */}
    //     </div>
    //   )
    // },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const status = row.getValue("status") as String
      const email = row.getValue("email") as String
      const description = row.getValue("description") as String
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      console.log("description", description)

      //return <div className="bg-green-100">Hi</div>

      return (
        <div className="flex justify-between w-full gap-10 sm:gap-20 h-[100px] pt-4">
          <div className="">
            <div>Email: {email}</div>
            <div className="font-medium">Amount: {formatted}</div>
            <div>Status: {status}</div>
          </div>
          <div className="">{description}</div>
        </div>
      )
    },
  },
  {
    accessorKey: "email",
    cell: ({ row }) => {
      const email = row.getValue("email") as String
      return null
      // <div className="font-medium text-left ">{email}</div>
    },
    header: () => null,
    //header: ({ column }) => {

    // <Button
    //   variant="ghost"
    //   onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    // >
    //   Email
    //   <ArrowUpDown className="w-4 h-4 ml-2" />
    // </Button>
    //},
  },
  {
    accessorKey: "description",
    cell: ({ row }) => {
      const description = row.getValue("description") as String
      //return <div className="font-medium text-left ">{description}</div>
    },
    header: () => null,
    //header: ({ column }) => {

    // return (
    //   <Button
    //     variant="ghost"
    //     onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //   >
    //     Description
    //     <ArrowUpDown className="w-4 h-4 ml-2" />
    //   </Button>
    // )
    //},
  },
  {
    accessorKey: "amount",
    header: () => null,
    //header: ({ column }) => {

    // return (
    //   <Button
    //     variant="ghost"
    //     onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //   >
    //     <div className="text-right">Amount</div>
    //     <ArrowUpDown className="w-4 h-4 ml-2" />
    //   </Button>
    // )
    //},
    // header: () => <div className="text-right">Amount</div>,
    cell: () => null,
    //cell: ({ row }) => {
    // const amount = parseFloat(row.getValue("amount"))
    // const formatted = new Intl.NumberFormat("en-US", {
    //   style: "currency",
    //   currency: "USD",
    // }).format(amount)

    //return <div className="font-medium text-left ">{formatted}</div>
    //},
  },
  {
    id: "actions",
    header: () => null,
    cell: () => null,
    // cell: ({ row }) => {
    //   const payment = row.original

    //   return (
    //     <DropdownMenu>
    //       <DropdownMenuTrigger asChild>
    //         <Button variant="ghost" className="w-8 h-8 p-0">
    //           <span className="sr-only">Open menu</span>
    //           <MoreHorizontal className="w-4 h-4" />
    //         </Button>
    //       </DropdownMenuTrigger>
    //       <DropdownMenuContent align="end">
    //         <DropdownMenuLabel>Actions</DropdownMenuLabel>
    //         <DropdownMenuItem
    //           onClick={() => navigator.clipboard.writeText(payment.id)}
    //         >
    //           Copy payment ID
    //         </DropdownMenuItem>
    //         <DropdownMenuSeparator />
    //         <DropdownMenuItem>View customer</DropdownMenuItem>
    //         <DropdownMenuItem>View payment details</DropdownMenuItem>
    //       </DropdownMenuContent>
    //     </DropdownMenu>
    //   )
    // },
  },
]
