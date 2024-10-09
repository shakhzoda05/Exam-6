import React, { useContext, useRef, useState } from "react";
import Input from "../../component/Input";
import Button from "../../component/Button";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { MainContext } from "../../context/Context";
import LoadingGif from "../../assets/images/loading.gif";
import HeadingTitle from "../../component/Title";
import Title from "../../component/Title";

function Login() {
  const loginStatusRef = useRef();
  const passwordStatusRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const { setIsLogin } = useContext(MainContext);

  function loginFormSubmit(e) {
    e.preventDefault();
    const { loginValue, passwordValue } = e.target.elements;

    const storedData = JSON.parse(window.localStorage.getItem("signUpData"));

    const isLoginValid = storedData
      ? loginValue.value === storedData.login
      : loginValue.value === "shaxzoda";
    const isPasswordValid = storedData
      ? passwordValue.value === storedData.password
      : passwordValue.value === "2404";

    if (!isLoginValid) {
      toast.error("Loginda xatolik bor qayta urinib ko'ring!");
    } else {
      loginStatusRef.current.textContent = "";
      loginValue.classList.remove("!border-red-600", "!border");
    }

    if (!isPasswordValid) {
     
      toast.error("Iltimos, parolni to'g'ri kiriting!");
    } else {
      passwordStatusRef.current.textContent = "";
      passwordValue.classList.remove("!border-red-600", "!border");
    }

    if (isLoginValid && isPasswordValid) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLogin(true);
        setIsLoading(false);
      }, 1500);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-5">
      <div>
        <HeadingTitle title={"Welcome, Log into you account"} />
        <form
          onSubmit={loginFormSubmit}
          autoComplete="off"
          className="w-[512px] flex flex-col py-[72px] pl-[130px] pr-[134px] mt-[53px] h-[382px] bg-white"
        >
          <Title
            extraStyle={
              "!font-inter text-primary text-base !leading-[25px] !font-medium"
            }
            title={"It is our great pleasure to have you on board! "}
          />

          <Input
           extraStyle={  "mt-[14px] border-gray-300 hover:shadow-lg hover:shadow-lg"  } 
            type="text"
            name="loginValue"
            placeholder="Enter your Login"
          />
          <p ref={loginStatusRef}  className={` text-[13px]`}></p>
         

          <Input
            type="password"
            name="passwordValue"
            extraStyle={  "mt-[14px] border-gray-300 hover:shadow-lg"  } 
            placeholder="Enter Password"
          />
          <p ref={passwordStatusRef}  className={` text-[13px]`}></p>
          

          <Button
  extraStyle={`
    mt-[14px] 
    bg-blue-500 
    hover:bg-blue-600 
    active:bg-blue-700 
    disabled:bg-gray-400 
    disabled:cursor-not-allowed
    text-white 
    px-4 
    py-2 
    rounded-lg
  `}
  title={
    isLoading ? (
      <img
        src={LoadingGif}
        alt="Loading..."
        className="w-6 h-5 scale-2.5 mx-auto"
      />
    ) : (
      "Login"
    )
  }
  disabled={isLoading}
/>


<Link
  to="sign-up"
  className="
    font-inter 
    text-center 
    text-primary-5 
    mt-[14px] 
    text-xs 
    leading-[24px] 
    font-bold 
    hover:text-blue-400
  "
>
  Sign up
</Link>

        </form>
      </div>
    </div>
  );
}

export default Login;
