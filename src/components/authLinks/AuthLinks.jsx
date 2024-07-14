"use client";
import Link from "next/link";
import { useState } from "react";

const AuthLinks = () => {
  //temporary
  const [open, setOpen] = useState(false);
  const status = "notauthenticated";

  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login" className="cursor-pointer">
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className="cursor-pointer">
            Write
          </Link>
          <span className="cursor-pointer">Logout</span>
        </>
      )}
      <div className="w-[20px] h-[16px] sm:hidden flex flex-col justify-between" onClick={() => setOpen(!open)}>
        <div className="w-full h-[2px] bg-[var(--textColor)] text-[var(--textColor)]"></div>
        <div className="w-full h-[2px] bg-[var(--textColor)] text-[var(--textColor)]"></div>
        <div className="w-full h-[2px] bg-[var(--textColor)] text-[var(--textColor)]"></div>
      </div>
      {open && (
        <div className="absolute top-[100px] left-0 bg-[var(--bg)] text-[var(--textColor)] h-[calc(100vh-100px)] w-full flex flex-col items-center justify-center gap-[50px] text-[36px] z-10">
          <Link href="/">Homepage</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className="cursor-pointer">Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
