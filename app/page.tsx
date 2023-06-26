"use client"

import { use, useEffect, useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import Select from "react-select"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { InputDemo } from "@/components/scn-input-demo"
import { ToastDemo } from "@/components/scn-toast-demo"
import { ToastDestructive } from "@/components/scn-toast-destructive"
import { ToggleDemo } from "@/components/scn-toggle-demo"
import { TooltipDemo } from "@/components/scn-tootip-demo"

let categories = [
  "All",
  "Design",
  "Development",
  "Marketing",
  "Productivity",
  "Sales",
  "Support",
  "Writing",
]

interface CustomStyles {
  option: (defaultStyles: any, state: any) => any
  placeholder: (provided: any, state: any) => any
  multiValue: (provided: any, state: any) => any
  control: (defaultStyles: any, state: any) => any
}

export default function IndexPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const someFunc = () => {
    console.log("Tooltip clicked")
  }

  const { setTheme, theme } = useTheme()

  const initialCustomStyles: CustomStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? "#fff" : "gray",
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: "#6B7280",
      fontSize: "14px",
    }),
    multiValue: (provided, state) => ({
      ...provided,
      backgroundColor: "#e2e8f0",
      borderRadius: "0.35rem",
      color: "#6B7280",
      fontSize: "14px",
    }),
    control: (defaultStyles, state) => ({
      ...defaultStyles,
      borderRadius: "0.35rem",
      backgroundColor: "transparent",
      borderColor: "gray-300",
      boxShadow: state.isFocused
        ? theme === "dark"
          ? "0 0 0 2px black, 0 0 0 4px rgba(30, 41, 59, 1)"
          : "0 0 0 2px white, 0 0 0 4px rgba(113, 128, 150, 1)"
        : "none",
      "&:hover": {
        borderColor: "gray-300",
      },
    }),
  }

  const [customStyles, setCustomStyles] =
    useState<CustomStyles>(initialCustomStyles)

  useEffect(() => {
    //console.log("theme", theme)
    setCustomStyles({
      option: (defaultStyles: any, state: any) => ({
        ...defaultStyles,
        color: state.isSelected ? "#fff" : "gray",
      }),
      placeholder: (provided: any, state: any) => ({
        // Styles for the placeholder text
        ...provided,
        color: "#6B7280",
        fontSize: "14px",
      }),

      multiValue: (provided: any, state: any) => ({
        // Styles for the placeholder text
        ...provided,
        backgroundColor: "#e2e8f0",
        borderRadius: "0.35rem",
        color: "#6B7280",
        fontSize: "14px",
      }),

      control: (defaultStyles: any, state: any) => ({
        ...defaultStyles,
        borderRadius: "0.35rem",
        backgroundColor: "transparent",
        borderColor: "gray-300",
        boxShadow: state.isFocused
          ? theme === "dark"
            ? "0 0 0 2px black, 0 0 0 4px rgba(30, 41, 59, 1)"
            : "0 0 0 2px white, 0 0 0 4px rgba(113, 128, 150, 0.85)"
          : "none",
        "&:hover": {
          borderColor: "gray-300",
        },
      }),
    })
  }, [theme])

  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Here below are some tests using{" "}
          <Link className="hover:text-slate-400" href="https://ui.shadcn.com/">
            shadcn/ui,
          </Link>{" "}
          sometimes in combination with other libraries.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <Link
          href="/multi-select"
          className="text-lg font-semibold hover:text-slate-400"
        >
          Multi Select from React Select styled to match shadcn/ui
        </Link>
        <Link
          href="/toast-demo"
          className="text-lg font-semibold hover:text-slate-400"
        >
          Test for shadcn/ui Toast component
        </Link>
        <Link
          href="/form"
          className="text-lg font-semibold hover:text-slate-400"
        >
          Test for shadcn/ui Form
        </Link>
        <Link
          href="/form-custom"
          className="text-lg font-semibold hover:text-slate-400"
        >
          Custom shadcn/ui Form
        </Link>
        <Link
          href="/chart"
          className="text-lg font-semibold hover:text-slate-400"
        >
          Test Recharts chart
        </Link>
        <Link
          href="/data-table"
          className="text-lg font-semibold hover:text-slate-400"
        >
          Shadcn Data Table Test
        </Link>

        <Link
          href="/payments-single"
          className="text-lg font-semibold hover:text-slate-400"
        >
          Custom Shadcn Data Table Test - Single full width cell
        </Link>
        <Link
          href="/expenses"
          className="text-lg font-semibold hover:text-slate-400"
        >
          Custom Shadcn Data Table Test - Expenses
        </Link>
      </div>
      {/* other links */}
      <div className="flex flex-col gap-2">
        <Link
          href="https://github.com/owolfdev/shadcn-tester"
          className="text-muted-foreground hover:text-slate-400"
        >
          Source code here.
        </Link>
      </div>
      <p className="max-w-[700px] text-lg text-muted-foreground">
        This project is based on the{" "}
        <Link
          className="hover:text-slate-400"
          href="https://ui.shadcn.com/docs/installation"
        >
          Next.JS starter template
        </Link>{" "}
        available on the{" "}
        <Link href="http://ui.shadcn.com">official website</Link>.
      </p>
    </section>
  )
}
