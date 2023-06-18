"use client"

import { use, useEffect, useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import Select from "react-select"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { InputDemo } from "@/components/scn-input-demo"

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
    console.log("theme", theme)
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
      <div>
        <InputDemo />
      </div>
      <div>
        <div>
          <Select
            styles={customStyles}
            className=" border-red-50"
            value={selectedCategories.map((category) => ({
              value: category,
              label: category,
            }))}
            onChange={(selectedOptions) => {
              const selectedValues = selectedOptions.map(
                (option) => option.value
              )
              setSelectedCategories(selectedValues)
            }}
            options={categories.map((category) => ({
              value: category,
              label: category,
            }))}
            isMulti
          />
        </div>
      </div>
    </section>
  )
}