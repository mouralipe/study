import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { ReactHookForm } from './components/react-hook-form'
import { ServerActionForm } from './components/server-action-form'

export default function Forms() {
  return (
    <div>
      <Link
        href="/"
        className="text-xs font-medium text-foreground hover:underline"
      >
        Back to Home
      </Link>

      <Separator className="my-8" />

      <ServerActionForm />

      <Separator className="my-8" />

      <ReactHookForm />
    </div>
  )
}
