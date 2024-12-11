'use server'

import { getGithubUserRepos } from '@/http/get-github-user-repos'
import { z } from 'zod'

const ServerActionFormSchema = z.object({
  name: z.string().min(1, 'Provide a valid username'),
})

export async function handleSubmitAction(_: unknown, data: FormData) {
  const result = ServerActionFormSchema.safeParse(Object.fromEntries(data))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors

    return { success: false, message: null, errors }
  }

  const { name } = result.data

  try {
    const response = await getGithubUserRepos({
      username: name,
    })

    const exampleMessage = `Repositories found. Example: ${response[0].name}`

    return { success: true, message: exampleMessage, errors: null }
  } catch (err) {
    return { success: false, message: 'Repositories not found', errors: null }
  }
}
