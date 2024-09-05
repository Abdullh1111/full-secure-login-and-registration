
import catchAsync from "../../ErrorHandler/catcAsync";
import userService from "./user.service";

// registration

// login
const login = catchAsync(async (req, res) => {
    const result = await userService.login(req.body)
    const token = result.token()
    
    res.status(201).cookie('token',token,{
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
        secure: true, 
        sameSite: "none"
    }).json({
        success: true,
        message: "User login successfully",
        data: result
    })
})

// logout
const logout = catchAsync(async (req, res) => {
    
    res.status(201).cookie('token','',{
        httpOnly: true,
        secure:true,
        sameSite: "none",
        maxAge: 0
    }).json({
        success: true,
        message: "User logout successfully",
    })
})



// get user data
const userData = catchAsync(async (req, res) => {
    
    res.status(200).json({
        success: true,
        message: "Get user data successfully",
        data: res.locals.user
    })
})
export default {
    login,
    logout,
    userData
}
