import { useContext, useState } from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";


const Login = () => {


    const { signInUser, googleUser,  facebookUser } = useContext(AuthContext);
    const [error, setError] = useState(null);

    const location = useLocation();
    console.log(location);

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;
        signInUser(email, password)
            .then(result => {
                console.log(result);

                setError('Successful login');
                if(result.user){
                    
                    navigate(location?.state? location.state : '/' );
                    }
              
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            });

            // setError("");
    };


    //google user
    const handleGoogleLogin = () => {
        googleUser()
            .then(result => {
                // console.log(result.user);
                if(result.user){
                    
                navigate(location?.state? location.state : '/' );
                }
            })
            .catch(error => {
                console.log(error);
                setError(error.message); 
            });
    };


    // facebook user
    const handleFacebookLogin = () => {
       facebookUser()
            .then(result => {
                // console.log(result.user);
                if(result.user){
                    
                    navigate(location?.state? location.state : '/' );
                    }
            })
            .catch(error => {
                console.log(error);
                setError(error.message); 
            });
    };




    return (
        <div className="container mx-auto">
        

        <div className="my-11 space-y-7">
            <h2 className="text-2xl font-bold text-center">Please Login Here</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="md:w-2/4 lg:w-2/4 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl text-black font-normal">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered"
                        {...register("email", { required: true })}
                    />
                    {errors.email && <span className="my-1 text-red-600 font-bold">This field is required</span>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl text-black font-normal">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered"
                        {...register("password", { required: true })}
                    />
                    {errors.password && <span className="my-1 text-red-600 font-bold">This field is required</span>}
                </div>

                <div className="my-2">
                    {
                        error ? <p className="text-xl text-red-600 font-bold">{error}</p>
                            : <p className="text-xl text-blue-700 ">{error} </p>
                    }
                </div>

                <div className="my-2">
                    <p className="text-xl font-normal text-black">Do Not Have An Account Please <Link to='/register'><button className="btn btn-active btn-link text-xl font-normal ">Register</button></Link></p>
                </div>

                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>


            </form>
                <div className="my-4 space-y-3 text-center ">
                    <h2 className="text-xl font-bold"> <hr /> Social login</h2>
            <button onClick={handleGoogleLogin} className="btn btn-accent">Google</button>

            <button onClick={handleFacebookLogin} className="btn btn-primary mx-3">faceBook</button>
                </div>

        </div>
    </div>
    );
};

export default Login;