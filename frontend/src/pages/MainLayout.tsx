import { useEffect } from "react";
import { useGetUserDataQuery } from "../service/userApi";
import { handleFetchError } from "../hooks/Toast";


const MainLayout = () => {
    const {data,error,isLoading} = useGetUserDataQuery()
    useEffect(()=>{
        if(error){
            handleFetchError(error)
        }
    },[data,error])
    return (
        isLoading ? <div>loading...</div> :
        <div>
           
        </div>
    );
};

export default MainLayout;