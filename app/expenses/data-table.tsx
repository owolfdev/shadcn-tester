import React, { useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
// import { SelectPrimitive, SelectTrigger, SelectValue, SelectGroup, SelectItem, SelectSeparator } from "@radix-ui/react-select";
import { ArrowUpDown, Check, ChevronDown } from "lucide-react"
import { useMediaQuery } from "react-responsive"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface TData {
  exid: string
  amount: number
  status: string
  email: string
  description: string
  categories?: string[]
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [filteringTerm, setFilteringTerm] =
    React.useState<string>("description")
  const [sortingTerm, setSortingTerm] = React.useState<string>("date")

  const router = useRouter()

  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  })

  useEffect(() => {
    //console.log("sorting", sorting)
  }, [sorting])

  const isMobile = useMediaQuery({ maxWidth: 640 })

  useEffect(() => {}, [])

  useEffect(() => {
    console.log("data in data table", data)
  }, [data])

  const handleOverlayClick = () => {
    console.log("overlay clicked")
  }

  function handleFilterInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value
    if (filteringTerm === "categories") {
      const filteredData = data.filter((item) => {
        // Convert categories array to lowercase strings
        if (!item.categories) return false
        const lowercaseCategories = item.categories.map((category) =>
          category.toLowerCase()
        )

        // Check if any category matches the search input
        return lowercaseCategories.some((category) =>
          category.includes(inputValue.toLowerCase())
        )
      })

      console.log("filteredData", filteredData)
      table.getColumn(filteringTerm)?.setFilterValue(event.target.value)

      // Update the filtered data
      table.setState((state) => ({
        ...state,
        rows: filteredData,
      }))
    } else {
      table.getColumn(filteringTerm)?.setFilterValue(event.target.value)
    }
  }

  return (
    <div>
      {/* Filter */}
      <div className="z-20 flex items-end h-full gap-4 p-2">
        <div className="flex flex-col gap-2">
          <Select
            onValueChange={(selectedItem) => setFilteringTerm(selectedItem)}
          >
            <SelectTrigger className="z-30 h-8">
              <SelectValue placeholder="Filter by.." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="merchant">Merchant</SelectItem>
                <SelectItem value="description">Description</SelectItem>
                <SelectItem value="categories">Categories</SelectItem>
                <SelectItem value="account">Account</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="z-20 input-no-zoom">
            <Input
              placeholder={`Filter ${filteringTerm}...`}
              value={
                (table.getColumn(filteringTerm)?.getFilterValue() as string) ??
                ""
              }
              onChange={handleFilterInputChange}
              className="h-8 max-w-sm input-no-zoom"
            />
          </div>
        </div>
        {/* End Filter */}
        {/* Sort */}
        <div className="flex flex-col gap-2">
          <Select
            onValueChange={(selectedItem) => setSortingTerm(selectedItem)}
          >
            <SelectTrigger className="z-10 h-8">
              <SelectValue placeholder="Sort by.." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="amount">Amount</SelectItem>
                <SelectItem value="date">Date</SelectItem>
                <SelectItem value="account">Account</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <div className="">
            <Button
              className="h-8"
              variant="secondary"
              onClick={() =>
                table
                  .getColumn(sortingTerm)
                  ?.toggleSorting(
                    table.getColumn(sortingTerm)?.getIsSorted() === "asc"
                  )
              }
            >
              {sortingTerm}
              {table.getColumn(sortingTerm)?.getIsSorted() === "asc" ? (
                sorting.length > 0 ? (
                  <ArrowUpDown className="w-4 h-4 ml-2 transform scale-x-[-1]" />
                ) : (
                  <ArrowUpDown className="w-4 h-4 ml-2 transform scale-x-[-1] text-gray-400" />
                )
              ) : sorting.length > 0 ? (
                <ArrowUpDown className="w-4 h-4 ml-2 transform " />
              ) : (
                <ArrowUpDown className="w-4 h-4 ml-2 text-gray-400 transform" />
              )}
            </Button>
          </div>
        </div>
        {/* End Sort */}
      </div>
      {/* Table */}
      <div className="border rounded-md">
        <Table>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row: any) => {
                // console.log("row", row)

                const rowId = row.original.id // Access the exid from the original data
                return (
                  <TableRow
                    key={rowId}
                    data-state={row.getIsSelected() && "selected"}
                    className=""
                    onClick={() => router.push(`/expenses/${rowId}`)}
                  >
                    {row.getVisibleCells().map((cell: any) => {
                      if (cell.column.id === "id") {
                        return (
                          <TableCell key={rowId} className="flex">
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </TableCell>
                        )
                      }
                      return null
                    })}
                  </TableRow>
                )
              })
            ) : (
              <TableRow className="">
                <TableCell colSpan={columns.length} className="">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* Pagination */}
      <div className="flex items-start justify-between px-2 py-4">
        <div className="flex justify-start text-sm font-semibold">
          {table.getRowModel().rows?.length *
            (table.getState().pagination.pageIndex + 1)}{" "}
          of {data.length} items
        </div>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
