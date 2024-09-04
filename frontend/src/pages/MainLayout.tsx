import { useEffect } from "react";
import { useGetUserDataQuery } from "../service/userApi";
import { handleFetchError } from "../hooks/Toast";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { userData } from "../features/user/userSlice";
import Logout from "./Logout";


const MainLayout = () => {
    const {data,error,isLoading} = useGetUserDataQuery()
    const dispatch = useAppDispatch()
    const userDatas = useAppSelector(state=> state.user)
    useEffect(()=>{
        if(data){
            
            dispatch(userData(data.data))
        }
        if(error){
            handleFetchError(error)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data,error])
    
    return (
        isLoading ? <div>loading...</div> :
        <div className="h-screen flex flex-col justify-center items-center">
           <p className="text-2xl font-semibold">Hello {userDatas?.name}. Welcome back!!</p>
           <Logout></Logout>
        </div>
    );
};

export default MainLayout;