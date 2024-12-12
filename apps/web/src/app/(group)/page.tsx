import { StyledLink } from '@/components/styled-link'

export default function Home() {
  return (
    <div className="flex flex-col space-y-2">
      <StyledLink href="/server-action-form">form</StyledLink>

      <StyledLink href="/table">table</StyledLink>

      <StyledLink href="/parallel-routes">parallel routes</StyledLink>

      <StyledLink href="/interception-routes">Interception routes</StyledLink>
    </div>
  )
}
