import { Tabs } from '@/components/tabs'

export default function Layout({ children }: { children: React.ReactNode }) {
  const tabButtons = [
    {
      name: 'Server Action Form',
      url: '/server-action-form',
    },
    {
      name: 'React Hook Form',
      url: '/react-hook-form',
    },
  ]

  return (
    <div className="space-y-4">
      <Tabs buttons={tabButtons} />

      {children}
    </div>
  )
}
