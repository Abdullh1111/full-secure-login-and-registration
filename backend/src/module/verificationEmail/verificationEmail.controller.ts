import catchAsync from "../../ErrorHandler/catcAsync"
import verificationEmailService from "./verificationEmail.service"

const sendCode = catchAsync(async (req, res) => {
    const result = await verificationEmailService.sendCode(req.body)
    res.status(201).json({
        success: true,
        message: `Send code to ${req.body?.email}`,
        data: result
    })
})

export default {
    sendCode
}