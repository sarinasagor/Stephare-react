import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icons from "../../public/index.js";

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { useDispatch, useSelector  } from "react-redux";
import { login  } from "../redux/actions/authActions.jsx";

function Login() {
    const [isPassword, setIsPassword] = useState(false);
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const errorMessage = useSelector((state) => state.auth.error);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { mutate: signIn, isLoading } = useMutation({
        mutationFn: async ({ username, password }) => {
            await dispatch(login({ username, password }));
            navigate("/courses");
        },
        onSuccess: () => {
            setLoginError("");
            navigate("/courses");
        },
        onError: (error) => {
            setLoginError(error.message || "Login failed. Please try again.");
        },
    });

    const handleLogin = handleSubmit((values) => {
        setLoginError("");
        signIn({
            username: values.email,
            password: values.password,
        });
    });

    function setisPassword(value) {
        setIsPassword(value);
    }

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
                                {errors.email && (
                                    <span className="text-danger mt-2 ml-6">
                                        {errors.email.message}
                                    </span>
                                )}
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
                                {errors.password && (
                                    <span className="text-danger mt-2 ml-6">
                                        {errors.password.message}
                                    </span>
                                )}
                                <span
                                    className="input-icons show-password"
                                    onClick={() => setisPassword(!isPassword)}
                                >
                                    <i
                                        className={
                                            isPassword
                                                ? "bi bi-eye-slash"
                                                : "bi bi-eye"
                                        }
                                    ></i>
                                </span>
                            </div>
                        </div>

                        {/* Display login error message */}
                        {errorMessage && <p style={{ color: 'red', maxWidth:'300px' }}>{errorMessage}</p>} {/* Display the error message */}

                        {/* Add loading state here when loggin in */}
                        <button
                            type="submit"
                            className="btn btn-signin"
                            disabled={isLoading}
                        >
                            {isLoading ? "Loading..." : "Signin"}
                        </button>
                        {loginError && <p style={{ color: 'red',maxWidth:'300px' }}>{loginError}</p>}
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

export default Login;
