'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeSwitcher } from './theme/theme-switcher'

export function Header() {
  const pathname = usePathname()

  const isHomePage = pathname === '/'

  return (
    <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between border-b border-muted px-2">
      <Link
        href="/"
        data-current={isHomePage}
        className="flex items-center gap-1 py-4 text-xs font-medium text-foreground hover:underline data-[current=true]:invisible"
      >
        <ArrowLeft className="size-4" />
        <p>Back to Home</p>
      </Link>

      <ThemeSwitcher />
    </div>
  )
}
