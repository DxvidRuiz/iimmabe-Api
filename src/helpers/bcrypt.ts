import bcrypt from "bcrypt"

export const encryptPassword = async (plain_password: string) => {
    const hash = await bcrypt.hash(plain_password, 10)
    return hash

}



export const compare = async (plain_password: string, hash_password: string) => {
    return await bcrypt.compare(plain_password, hash_password)
}
