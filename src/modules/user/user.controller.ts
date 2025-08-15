import { Request, Response } from "express";
import User from "./user.model";
import { userService } from "./user.service";
import { sendResponse } from "../../utils/sendResponse";



const registerUser = async (req: Request, res: Response) => {
  const data = await userService.registerUser(req.body)

  res.send({
    success: true,
    message: "User Registered Successfully",
    data,
  });
};

const loginUser = async(req : Request, res: Response)=>{
  const data = await userService.loginUser(req.body)

  sendResponse(res,{
    statusCode: 201,
    success: true,
    message: "login successfull",
    data
  } )

}

const getUsers = async (req: Request, res: Response) => {
  const data = await User.find();

  res.send({
    success: true,
    message: "User retrieved Successfully",
    data,
  });
};

export { registerUser, loginUser, getUsers };
