import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";


const Register = () => {

  const [error,setError] = useState(null);

  const location = useLocation();
  console.log(location);

  const navigate = useNavigate();

  const { registerUser, undateUserProfile} = useContext(AuthContext);
 



  const {register, handleSubmit,  formState: { errors },
    } = useForm()
  
    const onSubmit = (data) =>{
      const {email,password,Photo,FullName} = data
      registerUser(email,password)
      .then(result =>{
          console.log(result);

          undateUserProfile(FullName,Photo)
          .then(() =>{
 navigate(location?.state? location.state : '/' );
      
})

          
         
      })
      .catch(error =>{
         console.log(error);
      })

      setError(""); 
      
      if(password.length <6 ){
          setError('password must be 6 characters');
          return;
      }

     else if(!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)){
          setError('Must have an Uppercase and LowerCase letter in the password');
          return;
      }
      
      setError("Register Successfully ");
     
    };





    return (
    
      <div className="my-11 space-y-7">
      <h2 className="text-3xl font-bold text-center">Please Register Here</h2>

  <form onSubmit={handleSubmit(onSubmit)} className="md:w-2/4 lg:w-2/4 mx-auto ">
  <div className="form-control">
    <label className="label">
      <span className="label-text text-xl text-black font-normal">Name</span>
    </label>
    <input type="text" name="name" placeholder="Enter the Name" className="input input-bordered" 
     {...register("FullName", { required: true })}
    />
     {errors.FullName && <span  className="my-1 text-red-600 font-bold">This field is required</span>}
  </div>

  <div className="form-control">
    <label className="label">
      <span className="label-text text-xl text-black font-normal">Email</span>
    </label>
    <input type="email" name="email" placeholder="Enter the Email" className="input input-bordered" 
      {...register("email", { required: true })}
      />
       {errors.email && <span  className="my-1 text-red-600 font-bold">This field is required</span>} 
  </div>

  <div className="form-control">
    <label className="label">
      <span className="label-text text-xl text-black font-normal">Photo URL </span>
    </label>
    <input type="text" name="Photo" placeholder="Photo URL" className="input input-bordered"
    
    {...register("Photo", { required: true })}
    />
     {errors.Photo && <span  className="my-1 text-red-600 font-bold">This field is required</span>} 
 
  </div>


  <div className="form-control">
    <label className="label">
      <span className="label-text text-xl text-black font-normal">Password</span>
    </label>
    <input type="password" name="password" placeholder="password" className="input input-bordered" 
    
    {...register("password", { required: true })}
    />
     {errors.password && <span  className="my-1 text-red-600 font-bold">This field is required</span>} 
 
  </div>

  <div className="my-2">
      {
          error && <p className="text-xl text-[#eab308] font-bold ">{error} </p>
      }
  </div>

  <div className="my-2">
      <p className="text-xl font-normal text-black">Already Have An Account <Link to='/login' ><button className="btn btn-active btn-link text-xl font-normal ">Login</button></Link></p>
  </div>

  <div className="form-control mt-6">
    <button className="btn btn-primary">Register</button>
  </div>
  </form>
  </div>

    );
};

export default Register;