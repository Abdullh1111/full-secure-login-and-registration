import { TUser } from "../Types/userType";

const VerifyOtp = () => {
    const data  = sessionStorage.getItem("registerData") as string
    const parseData : TUser= JSON.parse(data)
  return (
    <div className="h-screen flex flex-col gap-10 justify-center items-center">
     <p className="text-4xl "> We sent otp to your <span className="font-bold underline">{parseData.email}</span> account</p>
      <form  className="flex flex-col justify-center items-center gap-4">
        <input
          type="text"
          placeholder="inter your otp"
          className="input input-bordered input-error w-full max-w-xs"
        />
        <button type="submit" className="btn btn-primary">
                  Verify
                </button>
      </form>
    </div>
  );
};

export default VerifyOtp;
