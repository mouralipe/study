import { NavLink } from './nav-link'
import { Button } from './ui/button'

export interface TabsProps {
  buttons: {
    name: string
    url: string
  }[]
}

export function Tabs({ buttons }: TabsProps) {
  return (
    <div className="border-b py-4">
      <nav className="mx-auto flex max-w-[1200px] items-center gap-2">
        {buttons.map((button) => (
          <Button
            key={button.url}
            asChild
            variant="ghost"
            size="sm"
            className="border border-transparent text-muted-foreground data-[current=true]:border-border data-[current=true]:text-foreground"
          >
            <NavLink href={button.url}>{button.name}</NavLink>
          </Button>
        ))}
      </nav>
    </div>
  )
}
