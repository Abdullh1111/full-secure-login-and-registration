import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import VerifyOtp from "../pages/VerifyOtp";
import MainLayout from "../pages/MainLayout";
import EmailPage from "../pages/EmailPage";
import NewPassword from "../pages/NewPassword";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Registration></Registration>
    },
    {
        path: '/verifyOtp',
        element: <VerifyOtp />,
    },
    {
        path: '/email',
        element: <EmailPage></EmailPage>,
    },
    {
        path: '/updatepass',
        element: <NewPassword></NewPassword>,
    }
])

export default router