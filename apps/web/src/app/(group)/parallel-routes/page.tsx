import Link from 'next/link'

export default function ParallelRoutes() {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="font-bold">Parallel Routes</h1>

      <Link
        href="/parallel-routes/parallel-specific"
        className="pb-4 font-medium text-foreground underline"
      >
        parallel specific
      </Link>
    </div>
  )
}
