import React from "react"

import { CustomForm } from "@/components/scn-custom-form-demo"

function FormPage() {
  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Custom form demo.
        </h1>
      </div>
      <div className="flex gap-2">
        <CustomForm />
      </div>
    </section>
  )
}

export default FormPage
