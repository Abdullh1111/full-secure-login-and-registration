import catchAsync from "../../ErrorHandler/catcAsync"
import verificationEmailService from "./verificationEmail.service"

const sendCode = catchAsync(async (req, res) => {
    const result = await verificationEmailService.sendCode(req.body)
    res.status(201).json({
        success: true,
        message: "User created successfully",
        data: result
    })
})

export default {
    sendCode
}