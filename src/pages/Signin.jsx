import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icons from "../../public/index.js";

import { useForm } from "react-hook-form";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { useCookies } from "react-cookie";

function Signin() {
  const [isPassword, setisPassword] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const [, setTokenCookie] = useCookies(["token"]);
  const [, setUser] = useCookies(["user"]);

  const { mutate: signIn, isPending } = useMutation({
    mutationFn: ({ username, password }) =>
      axios.post(`${import.meta.env.VITE_ROOT}/jwt-auth/v1/token`, {
        username,
        password,
      }),
    onSuccess: (data) => {
      setTokenCookie("token", data?.data?.token);
      setUser("user", {
        name: data?.data?.user_display_name,
        id: data?.data?.user_id,
      });
      navigate("/courses");
    },
  });

  const handleLogin = handleSubmit((values) => {
    signIn({
      username: values.email,
      password: values.password,
    });
  });

  return (
    <div className="signin-page">
      <div className="signin-container">
        <div className="signin-logo">
          <img src={Icons.brandLogo} alt="logo" />
          <h2>Login</h2>
        </div>
        <div className="signin-form">
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <div className="input-inline">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="E-mail"
                  autoComplete="off"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                />
                <span className="input-icons">
                  <i className="bi bi-person-circle"></i>
                </span>
              </div>
            </div>
            <div className="form-group">
              <div className="input-inline">
                <input
                  type={isPassword ? "text" : "password"}
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  autoComplete="off"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                />
                <span
                  className="input-icons show-password"
                  onClick={() => setisPassword(!isPassword)}
                >
                  <i
                    className={isPassword ? "bi bi-eye-slash" : "bi bi-eye"}
                  ></i>
                </span>
              </div>
            </div>
            {/* Add loading state here when loggin in */}
            <button type="submit" className="btn btn-signin">
              Sign In
            </button>
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </form>
        </div>
      </div>
      <div className="signin-images">
        <img src={Icons.loginImage} alt="login" />
      </div>
    </div>
  );
}

export default Signin;
