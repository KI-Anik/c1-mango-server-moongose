import { Request, Response } from "express";
import { mangoService } from "./mango.service";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import AppError from "../../error/AppError";

const createMango = catchAsync(async (req: Request, res: Response) => {
  const data = await mangoService.createMangoIntoDB(req.body)

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Mango created successfully",
    data
  })
})

const getAllMangos = catchAsync(async (req: Request, res: Response) => {
  const data = await mangoService.getAllMangosFromDB()

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'All mango getting done',
    data
  })
})

const getMangoById = catchAsync(async (req: Request, res: Response) => {
  const mangoId = req.params.mangoId
  const data = await mangoService.getMangoByIdFromDB(mangoId)

  res.send({
    success: true,
    message: "mango getting done",
    data
  })
})

const updateMango = catchAsync(async (req: Request, res: Response) => {
  const mangoId = req.params.mangoId;
  const payload = req.body;

  const data = await mangoService.updateMango(mangoId, payload)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Mango updated successfully",
    data
  })
})


const deleteMangoById = catchAsync(async (req: Request, res: Response) => {

})

export const mangoController = {
  createMango,
  getAllMangos,
  getMangoById,
  updateMango,
  deleteMangoById,
};
