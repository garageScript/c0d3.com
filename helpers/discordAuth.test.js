import {
  getTokenFromAuthCode,
  getUserInfoFromRefreshToken
} from './discordAuth'
import { prisma } from '../prisma'
import fetch, {Response} from 'node-fetch'

const mockTokenResponse = {
  access_token: '6qrZcUqja7812RVdnEKjpzOL4CvHBFG',
  token_type: 'Bearer',
  expires_in: 604800,
  refresh_token: 'D43f5y0ahjqew82jZ4NViEr2YafMKhue',
  scope: 'email guilds.join gdm.join identify'
}

const mockUserInfoResponse = {
  id: '756944741073027119',
  username: 'charolastra',
  avatar: 'ea8f5f59aff14450e892321ba128745d',
  discriminator: '3886',
  public_flags: 0,
  flags: 0,
  locale: 'en-US',
  mfa_enabled: true,
  email: 'charlieworkhd@gmail.com',
  verified: true
}

const mockUserInfo = {
  userId: 1,
  username: 'charolastra',
  avatarUrl: `https://cdn.discordapp.com/avatars/756944741073027119/ea8f5f59aff14450e892321ba128745d.png`,
  refreshToken: 'D43f5y0ahjqew82jZ4NViEr2YafMKhue'
}

describe('getUserInfoFromRefreshToken function', () => {
  jest.mock('node-fetch')
  const fetch = require('node-fetch')
  const { Response } = jest.requireActual('node-fetch')
  beforeEach(() => {
    jest.clearAllMocks()
  })
  const userUpdateFn = (prisma.user.update = jest.fn())
  it('should update refresh token in database if refresh token invalid', async () => {
    await expect(
      getUserInfoFromRefreshToken(1, 'mockRefreshToken')
    ).rejects.toThrow('refresh token invalid')
    expect(userUpdateFn).toBeCalled()
  })

  it('should return user info if refresh token valid', async () => {
    fetch
      .mockReturnValueOnce(Promise.resolve(new Response(mockTokenResponse)))
      .mockReturnValueOnce(Promise.resolve(new Response(mockUserInfoResponse)))
    await expect(
      getUserInfoFromRefreshToken(1, 'mockRefreshToken')
    ).resolves.toEqual(mockUserInfo)
    expect(userUpdateFn).toBeCalled()
    expect(fetch.mock.calls.length).toBe(2)
  })
})
