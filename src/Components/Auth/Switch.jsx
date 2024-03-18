import "./auth.css";
import Login from "./Login";
import SignIn from "./SignIn";
import { useState } from "react";
export default function Switch() {
  const [login, setlogin] = useState("");
  const [Register, setRegister] = useState("");

  const LoginStyle = () => {
    setlogin("login");
    setRegister("");
  };
  const SignUpStyle = () => {
    setRegister("Register");
    setlogin("");
  };
  return (
    <div>
      <div className="flex flex-row">
        <div className="head">
          <div className="main h-screen m-auto lg:py-[45%] py-[40%] px-[10%] ">
            <h2 className="text-center text-3xl py-[5%]">CHATTER</h2>
            <p className=" text-[17px]">
              Unleash the Power of Words, Connect with Like-minded Readers and
              Writers
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-between mx-8">
            <div
              className="w-[340px] font-semibold text-xl p-4 border-b-8 border-purple"
              onClick={SignUpStyle}
            >
              Register
            </div>
            <div
              className="w-[340px] font-semibold text-xl border-b-8 p-4"
              onClick={LoginStyle}
            >
              Login
            </div>
          </div>
          {Register ? <SignIn /> : login ? <Login /> : <SignIn />}
        </div>
      </div>
    </div>
  );
}
