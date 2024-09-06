import { FieldValues, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {handleLocalError,  handleFetchError } from "../hooks/Toast";
import { useEmailVerifyMutation } from "../service/verificationApi";
import { useEffect } from "react";
import { TUser } from "../Types/userType";
// import Recapthcha from "./Recapthcha";

const Registration = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [update, { data, error, isLoading }] = useEmailVerifyMutation();
  const onSubmit = (data: FieldValues | TUser) => {
    if (data.password !== data.confirmPass) {
      return handleLocalError("Passwords do not match");
    }
    
    sessionStorage.setItem("registerData", JSON.stringify(data));
    // API call to register user
    update({email: data.email});
  };
  useEffect(() => {
    if (data) {
      
      navigate('/verifyOtp')
    }
    if(error){
      handleFetchError(error)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, data]);

  
  // const [disabled , setDisabled] = useState(true)
  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // function onChange(value: any) {
  //   if (value) {
  //     setDisabled(false)
  //   }
  // }
  return isLoading ? (
    <div>loading</div>
  ) : (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Registration Now!</h1>
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
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  {...register("name", {
                    minLength: {
                      value: 3,
                      message: "Name must have 3 character",
                    },
                  })}
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered"
                  required
                />
                {errors.name && (
                  <p className="text-red-500">
                    {errors.name.message as string}
                  </p>
                )}
              </div>
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
              {/* <Recapthcha onChange={onChange}></Recapthcha> */}
              <div className="form-control mt-6">
                <button type="submit" className="btn mt-5 btn-primary">
                  Registration
                </button>
              </div>
            </form>
            <div className="mb-10 flex justify-center items-center">
              Already have an Account?
              <Link className="text-blue-600 ml-1" to="/login">
                Login Now!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
