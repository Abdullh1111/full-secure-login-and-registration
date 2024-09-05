import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUpdateDataMutation } from "../service/verificationApi";
import {
  handleFetchError,
  handleLocalError,
  handleSuccess,
} from "../hooks/Toast";
import { useEffect } from "react";

const NewPassword = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [update, { data, error, isLoading }] = useUpdateDataMutation();
  const onSubmit = (datas: FieldValues) => {
    if (datas.password !== datas.confirmPass) {
      return handleLocalError("Passwords do not match");
    }
    const email = sessionStorage.getItem("passCode");

    // API call to update password
    console.log(datas);

    update({ email, ...datas });
  };
  useEffect(() => {
    if (data) {
      handleSuccess(data.message);
      navigate("/login");
    }
    if (error) {
      handleFetchError(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, data]);
  return isLoading ? (
    <div>loading...</div>
  ) : (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">OTP</span>
                </label>
                <input
                  {...register("otp", {
                    minLength: {
                      value: 6,
                      message: "Otp must have 8 character",
                    },
                  })}
                  type="text"
                  placeholder="Otp"
                  className="input input-bordered"
                  required
                />
                {errors.otp && (
                  <p className="text-red-500">{errors.otp.message as string}</p>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    minLength: {
                      value: 8,
                      message: "password must have 8 character",
                    },
                  })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {errors.password && (
                  <p className="text-red-500">
                    {errors.password.message as string}
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  {...register("confirmPass", {
                    minLength: {
                      value: 8,
                      message: "password must have 8 character",
                    },
                  })}
                  type="password"
                  placeholder="Confirm Password"
                  className="input input-bordered"
                  required
                />
                {errors.confirmPass && (
                  <p className="text-red-500">
                    {errors.confirmPass.message as string}
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
