import { useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { login } from "../userSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Login() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.logged) {
      navigate("/");
    }
  }, [user]);

  const iniciarSesion = (event) => {
    event.preventDefault();
    const {
      email: { value: email },
      password: { value: password },
    } = event.target;
    dispatch(login({ email, password }));
  };

  return (
    <div className="login h-[100vh] sm:h-screen w-screen bg-[#f0f2f5] flex items-center justify-center ">
      {/* bg-green-600 */}
      <div className="loginWrapper w-[100%] sm:w-[50%] h-[70%] flex flex-col sm:flex-row">
        <div className="loginLeft flex flex-1 flex-col justify-center  mb-8">
          <h3 className="loginLogo text-5xl font-extrabold text-[#1775ee] mb-3 text-center sm:text-left">
            LeanSocial
          </h3>
          <span className="loginDesc text-2xl sm:w-[100%] text-center sm:text-left">
            Connect with friends and the world around you on LeanSocial.
          </span>
        </div>
        <div className="loginRight flex flex-[1] flex-col justify-center px-12 sm:px-20">
          <form
            className="loginBox h-[400px] px-5 py-5 bg-white rounded-xl flex flex-col justify-between shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)]"
            onSubmit={iniciarSesion}
          >
            <input
              placeholder="Email"
              type="email"
              name="email"
              required
              className="loginInput h-[50px] rounded-xl border border-[gray] text-xl px-5 py-5 focus:outline-none my-4 shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)]"
            />
            <input
              placeholder="Password"
              type="password"
              name="password"
              required
              minLength="6"
              className="loginInput h-[50px] rounded-xl border border-[gray] text-xl px-5 py-5 focus:outline-none my-4 shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)]"
            />
            {/* existe una propiedad disable */}
            <button
              className="loginButton h-[50px] rounded-xl border-none bg-[#1775ee] text-white text-xl font-medium cursor-pointer my-4 shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)] disabled:cursor-not-allowed"
              type="submit"
              /* cuando esto es true, no te deja clickearlo */
              disabled={user.isFetching}
            >
              {user.isFetching ? <CircularProgress /> : "Log In"}
            </button>
            <span className="loginForgot text-center text-[#1775ee] mb-2">
              Forgot Password?
            </span>
            <button
              className="loginRegisterButton w-[85%] sm:w-[60%] self-center h-[50px] rounded-xl border-none bg-[#42b72a] text-white text-xl font-medium cursor-pointer my-2 shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)] disabled:cursor-not-allowed"
              disabled={user.isFetching}
            >
              {user.isFetching ? <CircularProgress /> : "Create a New Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
