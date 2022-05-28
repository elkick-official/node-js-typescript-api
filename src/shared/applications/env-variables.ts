require('dotenv').config()

type envType = {
  TOKEN_TYPE: string | undefined
  JWT_SECRET: string | undefined
}

export const env: envType = {
  TOKEN_TYPE:
    process.env.NODE_ENV === 'development'
      ? process.env.DEVELOPMENT_TOKEN_TYPE
      : process.env.PRODUCTION_TOKEN_TYPE,
  JWT_SECRET:
    process.env.NODE_ENV === 'development'
      ? process.env.DEVELOPMENT_JWT_SECRET
      : process.env.PRODUCTION_JWT_SECRET,
}
