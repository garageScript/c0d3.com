import { prisma } from '../prisma'
import { URLSearchParams } from 'url'
import { User } from '.prisma/client'
import fetch from 'node-fetch'

const discordAPI = 'https://discordapp.com/api'
const client_id = process.env.DISCORD_KEY
const client_secret = process.env.DISCORD_SECRET

type AccessTokenResponse = {
  access_token: string
  token_type: string
  expires_in: number
  refresh_token: string
  scope: string
}

type UserInfoResponse = {
  id: string
  username: string
  avatar: string
  discriminator: string
  public_flags: number
  locale: string
  mfa_enabled: boolean
  email: string
  verified: boolean
}

type DiscordUserInfo = {
  userId: string
  username: string
  avatarUrl: string
  refreshToken: string
}

export const getTokenFromAuthCode = (
  code: string
): Promise<AccessTokenResponse> => {
  return fetch(`${discordAPI}/oauth2/token`, {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      client_id,
      client_secret,
      code,
      redirect_uri: 'https://c0d3.com/discord/redir',
      scope: 'email guilds.join gdm.join identify'
    })
  }).then(r => r.json())
}

const getTokenFromRefreshToken = (
  refresh_token: string
): Promise<AccessTokenResponse> => {
  return fetch(`${discordAPI}/oauth2/token`, {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    body: new URLSearchParams({
      client_id,
      client_secret,
      grant_type: 'refresh_token',
      refresh_token
    })
  }).then(r => r.json())
}

const getUserInfo = (accessToken: string): Promise<UserInfoResponse> => {
  return fetch(`${discordAPI}/users/@me`, {
    method: 'GET',
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      Authorization: `Bearer ${accessToken}`
    }
  }).then(r => r.json())
}

const updateUserRefreshToken = async (
  userId: number,
  refreshToken: string
): Promise<User> => {
  const updatedUser = await prisma.user.update({
    where: {
      id: userId
    },
    data: {
      discordRefreshToken: refreshToken
    }
  })
  return updatedUser
}

export const getUserInfoFromRefreshToken = async (
  userId: number,
  refreshToken: string
): Promise<DiscordUserInfo> => {
  const tokenResponse = await getTokenFromRefreshToken(refreshToken)
  const updatedRefreshToken = tokenResponse.refresh_token || ''
  await updateUserRefreshToken(userId, updatedRefreshToken)

  if (!updatedRefreshToken) throw new Error('refresh token invalid')

  const { id, username, avatar } = await getUserInfo(tokenResponse.access_token)

  return {
    userId: id,
    username,
    avatarUrl: `https://cdn.discordapp.com/avatars/${id}/${avatar}.png`,
    refreshToken: updatedRefreshToken
  }
}
