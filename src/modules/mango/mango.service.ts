import { ObjectId } from "mongoose"
import { IMango } from "./mango.interface"
import Mango from "./mango.model"

const createMangoIntoDB = async (payload: IMango) => {
    const data = await Mango.create(payload)
    return data
}

const getAllMangosFromDB = async () => {
    const data = await Mango.find()
    return data
}

const getMangoByIdFromDB = async (payload: string) => {
    const data = await Mango.findById(payload)
    return data
}

const updateMango = async (mangoId: string, payload: IMango) => {
    const data = await Mango.findByIdAndUpdate(mangoId, payload, {
        new: true,
        runValidators: true
    })
    return data
}

export const mangoService = {
    createMangoIntoDB,
    getMangoByIdFromDB,
    getAllMangosFromDB,
    updateMango
}