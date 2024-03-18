import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Login = () => {
  // const Success = () => {
  //   toast.success("Success Notification !");
  // };
  // const Error = (errorMessage) => {
  //   toast.error(errorMessage);
  // };
  const navigate = useNavigate();
  const [formDetails, setFormDetails] = useState({email: "" , password:""});

const {email, password} =  formDetails;
const handleInputChange = (e) => {
  setFormDetails((prevState) => ({
    ...prevState,
    [e.target.id]: e.target.value,
  }));
};
  const  submitForm = async(e) => {
    e.preventDefault();
   try {
    const userProfile = await  signInWithEmailAndPassword(auth, email, password);
     if (userProfile.user){
      localStorage.setItem('user', JSON.stringify(userProfile.user))
        navigate('/profile')
        toast.success('login successful')
     }
   } catch (error) {
    toast.error(error.message);
   }
  };
  return (
    <div className=" mx-20 my-10">
      <p className="mt-6"> Email: </p>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleInputChange}
        placeholder="JohnDoe@gmail.com"
        className=" bg-gray-200 w-[500px] rounded-md h-[30px] p-4 "
      />
      <p className="mt-6">Password</p>
      <input
        type="password"
        onChange={handleInputChange}
        id="password"
        value={password}
        placeholder="password(min of 8 characters)"
        className="bg-gray-200 w-[500px] rounded-md h-[30px] p-4 "
      />
      <button
        onClick={submitForm}
        className="block w-[400px] mx-auto  h-[40px] rounded-md hover:border-purple hover:text-purple border-2 my-10 text-center"
      >
        LOG IN
      </button>
    </div>
  );
};

export default Login;
