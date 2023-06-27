"use client"

import React, { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import Select from "react-select"

const Checkbox = ({ children, ...props }: JSX.IntrinsicElements["input"]) => (
  <label style={{ marginRight: "1em" }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
)

interface CustomStyles {
  option: (defaultStyles: any, state: any) => any
  placeholder: (provided: any, state: any) => any
  clearIndicator: (provided: any, state: any) => any
  dropdownIndicator: (provided: any, state: any) => any
  indicatorSeparator: (provided: any, state: any) => any
  multiValue: (provided: any, state: any) => any
  control: (defaultStyles: any, state: any) => any
  input: (styles: any) => any
}

const initialCustomStyles: CustomStyles = {
  option: (defaultStyles, state) => ({
    ...defaultStyles,
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: "#6B7280",
    fontSize: "14px",
  }),

  clearIndicator: (provided: any) => ({
    ...provided,
    display: "none"
  }),
  dropdownIndicator: (provided:any) => ({
    ...provided,
    display: "none"
  }),
  indicatorSeparator: () => ({
    display: "none"
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
  input: (styles: any) => ({
    ...styles,
    color: "black",
  }),
}

const customStylesDef = (theme: any) => ({
  option: (defaultStyles: any, { isFocused }: any) => ({
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

  clearIndicator: (provided: any) => ({
    ...provided,
    display: "none"
  }),
  dropdownIndicator: (provided:any) => ({
    ...provided,
    display: "none"
  }),
  indicatorSeparator: () => ({
    display: "none"
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
        ? "0 0 0 2px black, 0 0 0 4px hsl(216, 34%, 17%)"
        : "0 0 0 2px white, 0 0 0 4px hsl(215, 20.2%, 65.1%)"
      : "none",
    "&:hover": {
      borderColor: "gray-300",
    },
  }),
  input: (styles: any) => ({
    ...styles,
    color: theme === "dark" ? "#e2e8f0" : "black",
  }),
})

export function RSSelect({
  items,
  setSelectedItem,
  controls = false,
  instanceId,
}: {
  items: string[]
  setSelectedItem: (item: string) => void
  controls?: boolean
  instanceId?: string
}) {
  const { setTheme, theme } = useTheme()
  const [isClearable, setIsClearable] = useState(true)
  const [isSearchable, setIsSearchable] = useState(true)
  const [isDisabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isRtl, setIsRtl] = useState(false)

  //styles

  const [customStyles, setCustomStyles] =
    useState<CustomStyles>(initialCustomStyles)

  useEffect(() => {
    //console.log("theme", theme)
    setCustomStyles(customStylesDef(theme))
  }, [theme])

  return (
    <div>
      <div>
        <Select
          instanceId={instanceId}
          styles={customStyles}
          className="basic-single"
          classNamePrefix="select"
          defaultValue={{ value: items[0], label: items[0] }}
          isDisabled={isDisabled}
          isLoading={isLoading}
          isClearable={isClearable}
          isRtl={isRtl}
          isSearchable={isSearchable}
          name="color"
          options={items.map((item) => ({ value: item, label: item }))}
          onChange={(option) => option && setSelectedItem(option?.value)}
        />
      </div>
      {controls && (
        <div
          style={{
            color: "hsl(0, 0%, 40%)",
            display: "inline-block",
            fontSize: 12,
            fontStyle: "italic",
            marginTop: "1em",
          }}
        >
          <Checkbox
            checked={isClearable}
            onChange={() => setIsClearable((state) => !state)}
          >
            Clearable
          </Checkbox>
          <Checkbox
            checked={isSearchable}
            onChange={() => setIsSearchable((state) => !state)}
          >
            Searchable
          </Checkbox>
          <Checkbox
            checked={isDisabled}
            onChange={() => setIsDisabled((state) => !state)}
          >
            Disabled
          </Checkbox>
          <Checkbox
            checked={isLoading}
            onChange={() => setIsLoading((state) => !state)}
          >
            Loading
          </Checkbox>
          <Checkbox
            checked={isRtl}
            onChange={() => setIsRtl((state) => !state)}
          >
            RTL
          </Checkbox>
        </div>
      )}
    </div>
  )
}

export function RSSelectMulti({
  items,
  setSelectedItems,
  selectedItems,
  instanceId,
}: {
  items: string[]
  setSelectedItems: (items: string[]) => void
  selectedItems: string[]
  instanceId?: string
}) {
  const { setTheme, theme } = useTheme()
  const [isClearable, setIsClearable] = useState(true)
  const [isSearchable, setIsSearchable] = useState(true)
  const [isDisabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isRtl, setIsRtl] = useState(false)

  //styles

  const [customStyles, setCustomStyles] =
    useState<CustomStyles>(initialCustomStyles)

  useEffect(() => {
    //console.log("theme", theme)
    setCustomStyles(customStylesDef(theme))
  }, [theme])

  return (
    <div>
      <div>
        <Select
          instanceId={instanceId}
          styles={customStyles}
          className=""
          value={selectedItems.map((category) => ({
            value: category,
            label: category,
          }))}
          onChange={(selectedOptions) => {
            const selectedValues = selectedOptions.map((option) => option.value)
            setSelectedItems(selectedValues)
          }}
          options={items.map((item) => ({
            value: item,
            label: item,
          }))}
          isMulti
        />
      </div>
    </div>
  )
}
