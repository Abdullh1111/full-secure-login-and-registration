import { FieldValues, useForm } from "react-hook-form";
import { TUser } from "../Types/userType";
import { useRegisterMutation } from "../service/verificationApi";
import { useEffect } from "react";
import { handleFetchError, handleSuccess } from "../hooks/Toast";
import { useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const navigate = useNavigate();

  const datad = sessionStorage.getItem("registerData") as string;
  const parseData: TUser = JSON.parse(datad);
  const [update, { data, error, isLoading }] = useRegisterMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: FieldValues) => {
    const datas = { ...data, ...parseData };
    update(datas);
  };
  useEffect(() => {
    if (data) {
      handleSuccess(data?.message);
      navigate("/login");
    }
    if (error) {
      handleFetchError(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, data]);
  return isLoading ? (
    <div>loading</div>
  ) : (
    <div className="h-screen flex flex-col gap-10 justify-center items-center">
      <p className="text-4xl ">
        {" "}
        We sent otp to your{" "}
        <span className="font-bold underline">{parseData?.email}</span> account
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center gap-4"
      >
        <input
          {...register("otp", {
            minLength: { value: 6, message: "must have 6 letter" },
          })}
          type="text"
          placeholder="inter your otp"
          className="input input-bordered input-error w-full max-w-xs"
        />
        {errors.otp && (
          <p className="text-red-500">{errors.otp.message as string}</p>
        )}
        <button type="submit" className="btn btn-primary">
          Verify
        </button>
      </form>
    </div>
  );
};

export default VerifyOtp;
