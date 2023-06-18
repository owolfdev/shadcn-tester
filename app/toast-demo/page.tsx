import { ToastDemo } from "@/components/scn-toast-demo"
import { ToastDestructive } from "@/components/scn-toast-destructive"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div>
        <ToastDemo />
        <ToastDestructive />
      </div>
    </section>
  )
}
