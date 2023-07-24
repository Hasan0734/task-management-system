import React from "react";
import TextField from "../ui/inputs/TextField";
import Link from "next/link";
import CheckBox from "../ui/inputs/CheckBox";

export default function LoginForm() {
  return (
    <>
      <form action="">
        <div>
          <h1 className="text-4xl text-white text-center">Sign in</h1>
          <p className="text-sm mt-3 text-white text-center">
            Free access to our dashboard.
          </p>
        </div>

        <div className="text-center mt-10 flex justify-center">
          <button
            type="button"
            className="flex items-center gap-2 text-white px-3 py-3 rounded-lg border border-white text-xs md:text-base"
          >
            <img
              className="w-3 md:w-5"
              src="/assets/icons/google.svg"
              alt="google-icon"
            />{" "}
            Sign in with Google
          </button>
        </div>

        <div className=" flex items-center mt-5 w-full">
          <hr className=" border-white flex-grow flex-shrink" />
          <div className="flex-shrink-0 px-5 text-gray-400 text-sm">OR</div>
          <hr className=" border-white flex-grow flex-shrink" />
        </div>

        <div className="space-y-3">
          <TextField
            placeholder="name@example.com"
            label="Email Address"
            name="email"
            labelClass="text-white"
            className="py-3"
          />
          <TextField
            type="password"
            placeholder="**********"
            label={
              <span className="flex items-center justify-between">
                <span>Password</span>
                <Link href={"/forget-password"} className="text-secondary">
                  Forget Password?
                </Link>
              </span>
            }
            name="password"
            labelClass="text-white"
            className="py-3"
          />
          <CheckBox label="Remember me" labelClass="text-white" />
        </div>
        <div className="text-center mt-8">
          <button className="uppercase px-4 py-3 bg-white rounded-lg text-sm">
            Sign in
          </button>

          <p className="text-gray-400 text-sm mt-8">
            Don&apos;t have an account yet?{" "}
            <Link href={"/register"} className="text-secondary">
              Sign up here
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}
