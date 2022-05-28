import bcrypt from 'bcrypt'

const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10
  return await new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, function (error, hash) {
      if (error) reject(error)
      resolve(hash)
    })
  })
}

export { hashPassword }
