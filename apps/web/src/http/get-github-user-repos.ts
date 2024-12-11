import { api } from './api-client'

interface GetGithubUserReposRequest {
  username: string
}

interface GetGithubUserReposResponse {
  id: string
  name: string
}

export async function getGithubUserRepos({
  username,
}: GetGithubUserReposRequest) {
  const result = await api
    .get(`users/${username}/repos`)
    .json<GetGithubUserReposResponse[]>()

  return result
}
