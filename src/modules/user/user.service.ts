import { IUser } from "./user.interface";
import bcrypt from "bcryptjs";
import User from "./user.model";
import AppError from "../../error/AppError";
import jwt from "jsonwebtoken";

const registerUser = async (payload: IUser) => {
    payload.password = await bcrypt.hash(payload.password, 10)

    const user = new User(payload)
    const data = await user.save()
    return data
}

const loginUser = async (payload: IUser) => {
    const isUserExist = await User.findOne({ email: payload.email })
    if (!isUserExist) throw new AppError(404, 'User not found')

    const checkPassword = await bcrypt.compare(payload.password, isUserExist.password)
    if (!checkPassword) throw new AppError(401, "Password not matched")

        const jwtPayload = {
            email: isUserExist.email,
            role: isUserExist.role
        }

        const accessToken = jwt.sign(jwtPayload, 'very secret',{expiresIn: '1h'})

    return accessToken
}

export const userService = {
    registerUser,
    loginUser
}