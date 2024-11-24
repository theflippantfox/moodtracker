import { config } from 'dotenv'

config()

export const TOKEN = process.env.TOKEN || ''
export const GUILD_ID = process.env.GUILD_ID || ''
export const CLIENT_ID = process.env.CLIENT_ID || ''
