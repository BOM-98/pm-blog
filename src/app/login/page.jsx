import React from "react";

const LoginPage = () => {
  return (
    <div className="flex align-middle justify-center mt-12">
      <div className="bg-[var(--softBg)] md:p-[150px] flex flex-col gap-[50px] rounded-[10px] sm:px-[100px] sm:py-[50px] px-[20px] py-[40px]">
        <div className="p-[20px] rounded-[5px] text-white font-bold cursor-pointer bg-rose-500 max-w-[300px]">
          Sign in with Google
        </div>
        <div className="p-[20px] rounded-[5px] text-white font-bold cursor-pointer bg-sky-500 max-w-[300px]">
          Sign in with Facebook
        </div>
        <div className="p-[20px] rounded-[5px] text-white font-bold cursor-pointer bg-[#111] max-w-[300px]">
          Sign in with Email
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
