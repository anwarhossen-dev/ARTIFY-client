import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
//import { AuthContext } from '../Provider/AuthContext';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Providers/AuthContext';

const Login = () => {
  const {signInGoogle,setUser,signInUser} = use(AuthContext)
  const [error,setError] = useState()
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogIn =(e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const validation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/ ;
        if(!validation.test(password)){
            setError("Password must have at least one uppercase, one lowercase, and be 6+ characters long.")
            return;
        }
        
    signInUser(email,password)
    .then(result => {
      setUser(result.user)
      e.target.reset()
      navigate( location.state ? location.state : "/")
      toast.success(`${Login.User?.displayName} logged in successfully`);
    })
    .catch(error =>{
      toast.error(error.message);
      setError(error.message)
    })
  }
  const handleGoogleSign =()=>{

    signInGoogle()
    .then(result =>{
      setUser(result.user)
      navigate( location.state?.pathname || "/")
     toast.success(`${Login.User?.displayName} logged in successfully`);
    })
    .catch(error =>{
      toast.error(error.message);
    })
  }


    return (
       
    <div className="w-11/12 md:w-4/12 mx-auto my-20 card bg-base-300 ">
      <div className="card-body">
        <h1 className="text-5xl text-center font-bold">Login now!</h1>
        <form onSubmit={handleLogIn} action="">
            <fieldset className="fieldset">
          <label className="label font-bold text-sm">Email</label>
          <input 
          type="email"
          name='email' 
          required
          className="input w-full" placeholder="Email" />
          <label className="label font-bold text-sm">Password</label>
          <input 
          type="password"
          name="password" 
          required
          className="input w-full" placeholder="Password" />
          <div><a className="link link-hover font-bold text-sm label">Forgot password?</a></div>

          {
            error && <p className='text-pink-500 font-bold text-xs'>{error}</p>
          }

          <button type='submit' className="btn btn-secondary mt-4 text-lg shadow">Log In</button>
        </fieldset>
        </form>
        <p className='font-bold text-lg py-3'>Create An Account? Please <Link to="/auth/register" className='text-blue-500 underline'>Register</Link>.</p>
        {/* Google */}
<Link to="/" onClick={handleGoogleSign} className="btn bg-white text-black border-[#e5e5e5] font-bold text-md">
  <svg aria-label="Google logo" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</Link>
      </div>
    </div>
    );
};

export default Login;