// import React, { use, useState } from 'react';

// import { Link,  useLocation,  useNavigate } from 'react-router';
// //import { AuthContext } from '../Provider/AuthContext';
// import { toast } from 'react-toastify';
// import { AuthContext } from '../../Providers/AuthContext';
// //import MyLink from '../../Components/MyLink';

// const Register = () => {
//      const {createUser,updateUser,setUser,signInGoogle} = use(AuthContext)
//      const [error,setError] = useState()
//      const navigate = useNavigate()
//      const location = useLocation()
    
//       const handleRegister =(e)=>{
//         e.preventDefault();
//         const name = e.target.name.value;
//         const photo = e.target.photo.value;
//         const email = e.target.email.value;
//         const password = e.target.password.value;
  
//         const validation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
//      if (!validation.test(password)) {
//       setError("Password must have at least one uppercase, one lowercase, and be 6+ characters long.");
//       return;
//      }
//         createUser(email,password)
//         .then(result =>{
          
//           const user = result.user;
//           updateUser({displayName: name,photoURL: photo})
//           .then(()=>{
//             setUser({ ...user,displayName: name,photoURL: photo})
//            navigate("/")
//           }
            
//           )
//           .catch(error =>{
//             setError(error.message)
//           })
//           toast.success('Successfully Register!');
//            setUser(user)
//         })
//         .catch(error =>{
//           setError(error.message)
//         })
//       }

//    const handleGoogleSign =()=>{
//     signInGoogle()
//     .then(result =>{
//       const user = result.user;
//       setUser(user)
//       navigate(location.state?.pathname || "/")
//       toast.success('Successfully Register!');
      
//     })
//     .catch(error =>{
//       setError(error.message)
//     })
//   }
//     return (
//        <div className="w-11/12 md:w-4/12 mx-auto my-14 card bg-base-300   shrink-0 shadow-2xl">
//              <div className="card-body">
//                <h1 className="text-3xl text-center font-bold ">Please Register now!</h1>
//               <form onSubmit={handleRegister} >
//                    <fieldset className="fieldset">
//                        {/* name */}
//                  <label className="label font-bold text-sm ">Name</label>
//                  <input type="text" 
//                  required
//                  name="name" className="input w-full border-0 shadow" placeholder="Enter Your Name" />
//                  {/* email */}
//                  <label className="label font-bold text-sm ">Email</label>
//                  <input type="email" 
//                  required
//                  name="email" className="input w-full border-0 shadow" placeholder="Enter Your Email" />
//                  {/* photo */}
//                  <label className="label font-bold text-sm ">Photo</label>
//                  <input type="text"
//                  required
//                   name="photo" className="input w-full border-0 shadow" placeholder="Photo URL" />
//                  {/* password */}
//                  <label className="label font-bold text-sm ">Password</label>
//                  <input type="password"
//                  required
//                   name="password" className="input w-full border-0 shadow " placeholder="Password" />

//                  {
//                   error && <p className='text-pink-700 font-bold text-xs'>{error}</p>
//                  }

//                  <button type="submit" className="btn bg-[#951ca5] mt-4 text-lg shadow border-0 dark:text-white ">Register</button>
//                </fieldset>
//                </form>
//                <p className='flex justify-center '>----------------------------<span className='px-2'>or</span>-----------------------------</p>
//                <p className='text-lg font-bold py-2 '>Already Have An Account. Please <Link to="/login" className='text-pink-700 underline text-md font-bold'>Log In</Link>.</p>
//                       {/* Google */}
//        <button onClick={handleGoogleSign} className="btn bg-white text-black border-0 font-bold text-md">
//          <svg aria-label="Google logo" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
//          Sign Up with Google
//        </button>
//              </div>
//            </div>
//     );
// }

// export default Register;


import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../Providers/AuthContext";

const Register = () => {
  const { createUser, updateUser, setUser, signInGoogle } =
    useContext(AuthContext);

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // ---------------- Register Handler ----------------
  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Password validation
    const validation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!validation.test(password)) {
      setError(
        "Password must have at least one uppercase, one lowercase, and be 6+ characters long."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        // update profile
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success("Successfully Registered!");
            navigate("/");
          })
          .catch((err) => {
            setError(err.message);
          });

        setUser(user);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  // ---------------- Google Handler ----------------
  const handleGoogleSign = () => {
    signInGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Successfully Registered!");
        navigate(location.state?.pathname || "/");
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="w-11/12 md:w-4/12 mx-auto my-14 card bg-base-300 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl text-center font-bold">
          Please Register Now!
        </h1>

        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label font-bold text-sm">Name</label>
            <input
              type="text"
              name="name"
              required
              className="input w-full border-0 shadow"
              placeholder="Enter your name"
            />

            {/* Email */}
            <label className="label font-bold text-sm">Email</label>
            <input
              type="email"
              name="email"
              required
              className="input w-full border-0 shadow"
              placeholder="Enter your email"
            />

            {/* Photo */}
            <label className="label font-bold text-sm">Photo URL</label>
            <input
              type="text"
              name="photo"
              required
              className="input w-full border-0 shadow"
              placeholder="Enter photo URL"
            />

            {/* Password */}
            <label className="label font-bold text-sm">Password</label>
            <input
              type="password"
              name="password"
              required
              className="input w-full border-0 shadow"
              placeholder="Enter password"
            />

            {/* Error Message */}
            {error && (
              <p className="text-pink-700 font-bold text-xs mt-2">{error}</p>
            )}

            <button
              type="submit"
              className="btn bg-[#951ca5] mt-4 text-lg shadow border-0 dark:text-white"
            >
              Register
            </button>
          </fieldset>
        </form>

        {/* Divider */}
        <p className="flex justify-center my-3">
          ----------------------------<span className="px-2">or</span>
          -----------------------------
        </p>

        {/* Login Link */}
        <p className="text-lg font-bold py-2">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-pink-700 underline text-md font-bold"
          >
            Log In
          </Link>
        </p>

        {/* Google Sign In */}
        <button
          onClick={handleGoogleSign}
          className="btn bg-white text-black border-0 font-bold text-md"
        >
          <svg
            aria-label="Google logo"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Sign Up with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
