import Link from 'next/link'
import type { ComponentProps } from 'react'

interface StyledLinkProps extends ComponentProps<typeof Link> {}

export function StyledLink(props: StyledLinkProps) {
  return (
    <Link className="font-medium text-foreground hover:underline" {...props} />
  )
}
