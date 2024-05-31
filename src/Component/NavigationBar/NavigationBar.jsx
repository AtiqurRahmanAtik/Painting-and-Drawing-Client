import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import photo from "../../assets/Image/user.png";

const NavigationBar = () => {

  const {user, LogOut} = useContext(AuthContext);


    //handlesingout
    const handleSingOut = ()=>{
      LogOut()
      .then()
      .catch()
    }
  

    const Links = <>
    
    <NavLink to='/'> <li><a className=" font-normal"> Home</a></li> </NavLink> 
    
   <NavLink to='/allArtCraft'> <li><a className=" font-normal">All Art & craft Items</a></li> </NavLink> 

   {
      user &&   <NavLink to='/addcraft'> <li><a className=" font-normal"> AddCraft</a></li> </NavLink> 

   }


   {
     user && 
     <NavLink to='/myArtCraft/'> <li><a className=" font-normal"> MyArt&CraftList</a></li> </NavLink> 
   }


       
     
    </>


    return (
        <div className="navbar bg-teal-400">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            
            {Links}
            </ul>
          </div>
          <Link to='/' className="btn bg-gray-300 text-xl ">PaintDraw </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            
            {Links}
          </ul>
        </div>
      

      
        <div className="navbar-end">

{/* <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img alt="Tailwind CSS Navbar component" src={photo} />
      </div>
    </div> */}
    
    
  <div>
    
  {
      user ? <div className="hidden lg:flex items-center gap-2">
          <span>{user.email}</span>
     
<div className="tooltip" data-tip={user.displayName}>
         <img className="w-11 rounded-full" src={user?.photoURL || {photo}} alt="" />
</div>

         <button onClick={handleSingOut} className="btn bg-blue-500 text-white">Sing Out</button>

         
      </div> :

      <Link to='/login'>
      <button  className="btn bg-blue-500 text-white">Login</button>
      </Link>
     
      
    }

    </div>  
 



</div>
      
      
      </div>
    );
};

export default NavigationBar;