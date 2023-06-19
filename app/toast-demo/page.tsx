import { ToastDemo } from "@/components/scn-toast-demo"
import { ToastDestructive } from "@/components/scn-toast-destructive"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Shadcn toast component demo.
        </h1>
      </div>
      <div>
        <ToastDemo />
        <ToastDestructive />
      </div>
    </section>
  )
}
