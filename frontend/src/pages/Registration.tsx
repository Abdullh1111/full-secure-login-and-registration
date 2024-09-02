import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Registration = () => {
  const {register,handleSubmit,formState:{errors}} = useForm()
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Registration Now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleSubmit((data)=>console.log(data))}>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Full  Name</span>

          </label>
          <input {...register ('name',{minLength:{value:3,message:'Name must have 3 character'}})} type="text" placeholder="Full Name" className="input input-bordered" required />
          {errors.name && <p className="text-red-500">{errors.name.message as string}</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register ('email')} type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input {...register ('password',{minLength:{value:8,message:"password must have 8 character"}})} type="password" placeholder="password" className="input input-bordered" required />
          {errors.password && <p className="text-red-500">{errors.password.message as string}</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input {...register('confirmPass',{minLength:{value:8,message:"password must have 8 character"}})} type="password" placeholder="Confirm Password" className="input input-bordered" required />
          {errors.confirmPass && <p className="text-red-500">{errors.confirmPass.message as string}</p>}
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Registration</button>
        </div>
      </form>
      <div className="mb-10 flex justify-center items-center">Already have an Account? 
          <Link className="text-blue-600 ml-1"  to="/login">Login Now!</Link>
        </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Registration;