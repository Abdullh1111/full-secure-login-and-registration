import { FieldValues, useForm } from "react-hook-form";
import { usePassCodeMutation } from "../service/verificationApi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleFetchError } from "../hooks/Toast";

const EmailPage = () => {
    const navigate = useNavigate()
    const [update,{data,error,isLoading}] = usePassCodeMutation()
    const {register,handleSubmit} = useForm()
    const onSubmit = (value: FieldValues) =>{
        update(value)
    }
    useEffect(()=>{
        if(data){
            sessionStorage.setItem("passCode",data.data)
            navigate('/login')
        }
        if(error){
            handleFetchError(error)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data,error])
  return (
    isLoading ? <div>loading...</div> :
    <div className="h-screen flex flex-col justify-center items-center gap-5">
      <p className="text-2xl font-semibold">Please enter your email:</p>
      <form onSubmit={handleSubmit(onSubmit)} className=" flex justify-center items-center flex-col gap-5">
        <input
          type="email"
          placeholder="Enter your email.."
          className="input input-bordered input-primary w-full max-w-xs"
          required
          autoFocus
          {...register("email")}
        />
        <button className="btn btn-primary">
        Login
      </button>
      </form>
    </div>
  );
};

export default EmailPage;
