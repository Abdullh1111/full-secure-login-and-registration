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


const registration = catchAsync(async (req, res) => {
    const result = await verificationEmailService.registration(req.body)
    res.status(201).json({
        success: true,
        message: "User created successfully",
        data: result
    })
})

// update Data
const updateData = catchAsync(async (req, res) => {
    const result = await verificationEmailService.updateData(req.body)
    res.status(200).json({
        success: true,
        message: "User data updated successfully",
        data: result
    })
})
export default {
    sendCode,
    registration,
    updateData
}