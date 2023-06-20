"use client"

import { use, useEffect, useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import Select from "react-select"

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

interface MultiSelectProps {
  selectedCategories: string[] // Update the type definition
  setSelectedCategories: (categories: string[]) => void
}

export function MultiSelect({
  selectedCategories,
  setSelectedCategories,
}: MultiSelectProps) {
  //   const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const { setTheme, theme } = useTheme()

  useEffect(() => {
    selectedCategories.length > 0 &&
      console.log("selectedCategories", selectedCategories)
  }, [selectedCategories])

  const initialCustomStyles: CustomStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
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
    }),
  }

  const [customStyles, setCustomStyles] =
    useState<CustomStyles>(initialCustomStyles)

  useEffect(() => {
    //console.log("theme", theme)
    setCustomStyles({
      option: (defaultStyles: any, { isFocused }) => ({
        ...defaultStyles,
        backgroundColor: isFocused
          ? theme === "dark"
            ? "#e2e8f0"
            : "#e2e8f0"
          : "transparent",
        color: isFocused
          ? theme === "dark"
            ? "black"
            : "#6B728"
          : theme === "dark"
          ? "black"
          : "#6B728",
        ":active": {
          ...defaultStyles[":active"],
          backgroundColor: isFocused
            ? theme === "dark"
              ? "#e2e8f0"
              : "#e2e8f0"
            : "transparent",
          color: isFocused
            ? theme === "dark"
              ? "black"
              : "#6B728"
            : theme === "dark"
            ? "black"
            : "#6B728",
        },
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
    <div>
      <div>
        <Select
          styles={customStyles}
          className=" border-red-50"
          value={selectedCategories.map((category: any) => ({
            value: category,
            label: category,
          }))}
          onChange={(selectedOptions) => {
            const selectedValues = selectedOptions.map((option) => option.value)
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
  )
}
