import { FieldValues, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../service/userApi";
import { useEffect, useState } from "react";
import { handleFetchError, handleSuccess } from "../hooks/Toast";
import Recapthcha from "./Recapthcha";

const Login = () => {
  const navigate = useNavigate();
  const [update, { data, error, isLoading }] = useLoginUserMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: FieldValues) => {
    update(data);
  };

  useEffect(() => {
    if (data) {
      handleSuccess(data.message);
      navigate("/");
    }
    if (error) {
      handleFetchError(error);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, data]);
  const [disabled, setDisabled] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onChange(value: any) {
    if (value) {
      setDisabled(false);
    }
  }
  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    minLength: {
                      value: 8,
                      message: "Password must min have 8 letter",
                    },
                  })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  {errors.password && (
                    <p className="text-red-500">
                      {errors.password.message as string}
                    </p>
                  )}
                  <Link to="/email" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <Recapthcha onChange={onChange}></Recapthcha>
                <button disabled={disabled} className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            <div className="mb-10 flex justify-center items-center">
              Don't have an Account?
              <Link className="text-blue-600 ml-1" to="/register">
                {" "}
                Register Now!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
