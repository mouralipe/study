'use client'

import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { AlertTriangle, CheckCircle, Loader2 } from 'lucide-react'
import { useActionState } from 'react'
import { handleSubmitAction } from '../actions'

export function ServerActionForm() {
  const [state, formAction, isPending] = useActionState(handleSubmitAction, {
    success: false,
    message: '',
    errors: null,
  })

  return (
    <form action={formAction} className="space-y-4">
      {state.message && (
        <Alert variant={state.success ? 'default' : 'destructive'}>
          {state.success ? (
            <CheckCircle className="size-4" />
          ) : (
            <AlertTriangle className="size-4" />
          )}
          <AlertDescription>
            <p>{state.message}</p>
          </AlertDescription>
        </Alert>
      )}

      <h1 className="font-bold">Server Action Form</h1>

      <div className="space-y-1">
        <Label htmlFor="name">Github Username</Label>
        <Input name="name" id="name" />

        {state.errors?.name && (
          <p className="text-xs font-medium text-red-500 dark:text-red-400">
            {state.errors.name[0]}
          </p>
        )}
      </div>

      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? <Loader2 className="size-4 animate-spin" /> : 'Submit'}
      </Button>
    </form>
  )
}
