import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col space-y-2">
      <Link
        href="/forms"
        className="font-medium text-foreground hover:underline"
      >
        form
      </Link>

      <Link
        href="/parallel-routes"
        className="font-medium text-foreground hover:underline"
      >
        parallel routes
      </Link>
    </div>
  )
}
