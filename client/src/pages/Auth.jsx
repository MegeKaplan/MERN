import React, { useState } from "react";
import { loginAction, registerAction } from "../redux/actions/auth";
import { useDispatch } from "react-redux";

const Auth = () => {
  const [signUp, setSignUp] = useState(true);
  const [authData, setAuthData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const onChangeFunc = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const authFunction = () => {
    if (signUp) {
      dispatch(registerAction(authData));
    } else {
      dispatch(loginAction(authData));
    }
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center fixed top-0 left-0 z-50">
      <div className="w-1/3 bg-white p-3">
        <h1 className="text-2xl text-gray-700 font-bold">
          {signUp ? "Register" : "Login"}
        </h1>
        <div className="flex flex-col space-y-3 my-5">
          {signUp && (
            <input
              value={authData.username}
              name="username"
              onChange={onChangeFunc}
              className="input_style"
              type="text"
              placeholder="username"
            />
          )}
          <input
            value={authData.email}
            name="email"
            onChange={onChangeFunc}
            className="input_style"
            type="text"
            placeholder="email"
          />
          <input
            value={authData.password}
            name="password"
            onChange={onChangeFunc}
            className="input_style"
            type="text"
            placeholder="password"
          />
        </div>
        <div className="text-red-500 text-xs cursor-pointer mb-4">
          {signUp ? (
            <span onClick={() => setSignUp(false)}>
              Are you have an account?
            </span>
          ) : (
            <span onClick={() => setSignUp(true)}>
              Are you haven't an account?
            </span>
          )}
        </div>
        <button
          onClick={authFunction}
          className="cursor-pointer hover:bg-indigo-800 w-full p-2 text-center bg-indigo-600 text-white rounded-md"
        >
          {signUp ? "Sign Up" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
