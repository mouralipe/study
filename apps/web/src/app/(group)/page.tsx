import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-4">
      <h1>Home</h1>
      <Link
        href="/forms"
        className="font-medium text-foreground hover:underline"
      >
        form
      </Link>
    </div>
  )
}
