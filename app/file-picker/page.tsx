import React from "react"
import FilePicker from "components/custom-file-picker"

const FilePickerPage = () => {
  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Custom file picker.
        </h1>
      </div>
      <div className="flex gap-2">
        <FilePicker />
      </div>
    </section>
  )
}

export default FilePickerPage
