'use client'

import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { getGithubUserRepos } from '@/http/get-github-user-repos'
import { zodResolver } from '@hookform/resolvers/zod'
import { AlertTriangle, CheckCircle, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const FormSchema = z.object({
  name: z.string().min(1, 'Provide a valid username'),
})

type FormTypes = z.infer<typeof FormSchema>

export function ReactHookForm() {
  const [feedbackMessage, setFeedbackMessage] = useState({
    success: false,
    message: '',
  })

  const {
    formState: { isSubmitting, errors },
    handleSubmit,
    register,
    reset,
  } = useForm<FormTypes>({
    resolver: zodResolver(FormSchema),
  })

  async function onSubmitForm(data: FormTypes) {
    const { name } = data

    try {
      const response = await getGithubUserRepos({
        username: name,
      })

      const exampleMessage = `Repositories found. Example: ${response[0].name}`

      setFeedbackMessage({
        success: true,
        message: exampleMessage,
      })
    } catch (err) {
      setFeedbackMessage({
        success: false,
        message: 'Repositories not found',
      })
    }

    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
      {feedbackMessage.message && (
        <Alert variant={feedbackMessage.success ? 'default' : 'destructive'}>
          {feedbackMessage.success ? (
            <CheckCircle className="size-4" />
          ) : (
            <AlertTriangle className="size-4" />
          )}
          <AlertDescription>
            <p>{feedbackMessage.message}</p>
          </AlertDescription>
        </Alert>
      )}

      <h1 className="font-bold">React Hook Form</h1>

      <div className="space-y-1">
        <Label htmlFor="name">Github Username</Label>
        <Input id="name" {...register('name')} />

        {errors?.name?.message && (
          <p className="text-xs font-medium text-red-500 dark:text-red-400">
            {String(errors.name.message)}
          </p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : 'Submit'}
      </Button>
    </form>
  )
}
