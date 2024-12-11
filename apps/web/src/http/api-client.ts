import ky from 'ky'

export const api = ky.create({
  prefixUrl: 'http://api.github.com',
})
