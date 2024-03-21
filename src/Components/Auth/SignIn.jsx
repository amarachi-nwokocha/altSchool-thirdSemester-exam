import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { doc, serverTimestamp, setDoc } from "firebase/firestore";
const SignIn = () => {
  const navigate = useNavigate();
  const [formDetails, setFormDetails] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });
  const { email, firstName, lastName, password, confirmPassword } = formDetails;

  const handleInputChange = (e) => {
    setFormDetails((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const createUser = async (e) => {
    e.preventDefault();
    if (password.length < 8 || confirmPassword.length < 8) {
      toast.error(
        "Password should contain at least 8 characters."
      );
    }

    if (password !== confirmPassword) {
      toast("password do not match");
    }
    console.log(email, password);
    try {
      const userProfile = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userProfile.user;

      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });
      const formDetailsCopy = { ...formDetails };
      delete formDetailsCopy.password;
      formDetailsCopy.timeStamp = serverTimestamp();
      await setDoc(doc(db, "users", user.uid), formDetailsCopy);
      toast.success(`Account created for ${firstName}`);
      navigate("/profile");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className=" mx-20 my-10">
      <div>
        <div className="flex flex-row  gap-52">
          <label>First Name:</label>
          <label>Last Name:</label>
        </div>
        <div className="flex flex-row gap-20">
          <input
            type="text"
            placeholder="first name "
            value={firstName}
            id="firstName"
            onChange={handleInputChange}
            className="  bg-gray-200 w-[200px] rounded-md h-[30px] p-4 "
          />
          <input
            type="text"
            placeholder="last name "
            value={lastName}
            id="lastName"
            onChange={handleInputChange}
            className="  bg-gray-200 w-[200px] rounded-md h-[30px] p-4 "
          />
        </div>
      </div>
      {/* <select name="Joining as " id="">
        <option value="writer">Writer</option>
        <option value="reader">Reader</option>
        <option value="WebDeveloper">Web Developer</option>
        <option value="projectManager">Project Manager</option>
      </select> */}
      <label className="mt-4 block"> Email: </label>
      <input
        type="email"
        value={email}
        id="email"
        onChange={handleInputChange}
        required
        placeholder="JohnDoe@gmail.com"
        className="  bg-gray-200 w-[500px] rounded-md h-[30px] p-4 "
      />
      <label className="mt-6 block">Password</label>
      <input
        type="password"
        value={password}
        id="password"
        onChange={handleInputChange}
        required
        placeholder="password(min of 8 characters)"
        className=" bg-gray-200 w-[500px] rounded-md h-[30px] p-4 "
      />
      <label className="mt-6 block">Confirm Password</label>
      <input
        type="password"
        value={confirmPassword}
        id="confirmPassword"
        onChange={handleInputChange}
        required
        placeholder="password(min of 8 characters)"
        className=" bg-gray-200 w-[500px] rounded-md h-[30px] p-4 "
      />
      <button
        onClick={createUser}
        className="block w-[400px] mx-auto  h-[40px] rounded-md hover:border-purple hover:text-purple border-2 my-10 text-center"
      >
        Create Account
      </button>
      <button className="block w-[400px] mx-auto  h-[40px] rounded-md hover:border-purple hover:text-purple border-2 my-10 text-center">
        {" "}
        Continue with Google
        <FcGoogle />{" "}
      </button>
      <button className="block w-[400px] mx-auto  h-[40px] rounded-md hover:border-purple hover:text-purple border-2 my-10 text-center">
        Continue with Linkedin
      </button>
    </div>
  );
};

export default SignIn;
