import { cn } from "@/lib/utils"

function Spinner({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="spinner"
      role="status"
      aria-label="Loading"
      className={cn("animate-spin size-4 border-2 border-current border-t-transparent rounded-full", className)}
      {...props}
    />
  )
}

export { Spinner }
