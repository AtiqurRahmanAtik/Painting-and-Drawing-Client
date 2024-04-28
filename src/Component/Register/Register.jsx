

const Register = () => {

    const handleRegister =(e)=>{
        e.preventDefault();

    }
    return (
        <div className="my-11">          

        <div className="hero  bg-base-200">
        <div className=" flex-col lg:flex-row-reverse space-y-7 py-4">
          <div className="text-center lg:text-left ">
            <h1 className="text-5xl font-bold">Registration Now</h1>
           
          </div>
      
          {/* form */}
              <div className=" w-full">
      
             <form onSubmit={handleRegister}>
      
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered w-full" required />
              </div>
      
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered w-full" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              
              <div className="form-control mt-6">
                <button className="btn btn-primary">Registration</button>
              </div>
             </form>
              </div>
        </div>
      </div>
              </div>
    );
};

export default Register;