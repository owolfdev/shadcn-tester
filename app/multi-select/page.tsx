"use client"

import { use, useEffect, useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import Select from "react-select"

import { RSSelect, RSSelectMulti } from "@/components/rs-select"
import { InputDemo } from "@/components/scn-input-demo"

const Checkbox = ({ children, ...props }: JSX.IntrinsicElements["input"]) => (
  <label style={{ marginRight: "1em" }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
)

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

let items = [
  "All",
  "Apple",
  "Banana",
  "Orange",
  "Pear",
  "Grape",
  "Strawberry",
  "Blueberry",
  "Raspberry",
  "Watermelon",
]

interface CustomStyles {
  option: (defaultStyles: any, state: any) => any
  placeholder: (provided: any, state: any) => any
  multiValue: (provided: any, state: any) => any
  control: (defaultStyles: any, state: any) => any
  input: (styles: any) => any
}

export default function IndexPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const [selectedItem, setSelectedItem] = useState<string>("")
  const [isClearable, setIsClearable] = useState(true)
  const [isSearchable, setIsSearchable] = useState(true)
  const [isDisabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isRtl, setIsRtl] = useState(false)
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    selectedItems.length > 0 && console.log("selected items", selectedItems)
  }, [selectedItems])

  useEffect(() => {
    console.log("selectedItem", selectedItem)
  }, [selectedItem])

  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          React Select Combobox and Select components styled to match Shadcn
          input component.
        </h1>
      </div>
      <p>Shadcn Input</p>
      <div>
        <InputDemo />
      </div>
      <p>React Select</p>
      <RSSelectMulti
        instanceId="categories"
        items={categories}
        setSelectedItems={setSelectedItems}
        selectedItems={selectedItems}
      />
      <RSSelect
        instanceId="fruit"
        items={items}
        setSelectedItem={setSelectedItem}
        controls={true}
      />
      <div className="mt-4">
        <Link
          className="hover:text-slate-500"
          href="https://www.owolf.com/blog/style-react-select-component"
        >
          See a blog article that explains how to do this.
        </Link>
      </div>
    </section>
  )
}
