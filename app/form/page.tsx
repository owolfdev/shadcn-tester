import React from "react"

import { ProfileForm } from "@/components/scn-form-demo"

function FormPage() {
  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Shadcn form demo.
        </h1>
      </div>
      <div className="flex gap-2">
        <ProfileForm />
      </div>
    </section>
  )
}

export default FormPage
