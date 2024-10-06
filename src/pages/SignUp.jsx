import { useState } from "react";
import Icons from "../../public/index.js";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { sign_up } from '../redux/actions/authActions';

function SignUp() {
  
  const [isPassword, setisPassword] = useState(false);
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const handleSignup = handleSubmit((values) => {
    dispatch(sign_up({ username: values.username, email:values.email, password:values.email }));
  });


  return (
    <div className="signin-page">
      <div className="signin-container">
        <div className="signin-logo">
          <img src={Icons.brandLogo} alt="logo" />
          <h2>Sign Up</h2>
        </div>
        <div className="signin-form">
          <form onSubmit={handleSignup}>
          <div className="form-group">
              <div className="input-inline">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="User Name"
                  autoComplete="off"
                  {...register("username", {
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
            <button type="submit" className="btn btn-signin !max-w-[100%]">
              Create Account
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

export default SignUp;
