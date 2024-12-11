import { Separator } from '@/components/ui/separator'
import { ReactHookForm } from './components/react-hook-form'
import { ServerActionForm } from './components/server-action-form'

export default function Forms() {
  return (
    <div>
      <ServerActionForm />

      <Separator className="my-8" />

      <ReactHookForm />
    </div>
  )
}
