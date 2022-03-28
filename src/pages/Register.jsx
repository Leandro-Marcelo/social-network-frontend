import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signUp } from "../userSlice";

export default function Register() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user.logged) {
      navigate("/home");
    }
  }, [user]);

  const registrarse = (event) => {
    event.preventDefault();
    const {
      email: { value: email },
      password: { value: password },
      username: { value: username },
    } = event.target;
    dispatch(signUp({ email, password, username }));
  };

  return (
    <div className="login h-[100vh] sm:h-screen w-screen bg-[#f0f2f5] flex items-center justify-center ">
      {/* bg-green-600 */}
      <div className="loginWrapper w-[100%] sm:w-[50%] h-[90%] sm:h-[70%] flex flex-col sm:flex-row">
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
            className="loginBox h-[500px] px-5 py-5 bg-white rounded-xl flex flex-col justify-between shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)]"
            onSubmit={registrarse}
          >
            <input
              placeholder="Username"
              type="text"
              name="username"
              required
              minLength="6"
              className="loginInput h-[50px] rounded-xl border border-[gray] text-xl px-5 py-5 focus:outline-none my-4 shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)]"
            />
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
            {/*  <input
              placeholder="Password Again"
              type="password"
              required
              minLength="6"
              className="loginInput h-[50px] rounded-xl border border-[gray] text-xl px-5 py-5 focus:outline-none my-4 shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)]"
            /> */}
            <button
              className="loginButton h-[50px] rounded-xl border-none bg-[#1775ee] text-white text-xl font-medium cursor-pointer my-4 shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)]"
              type="submit"
            >
              Sign Up
            </button>
            <button className="loginRegisterButton w-[85%] sm:w-[60%] self-center h-[50px] rounded-xl border-none bg-[#42b72a] text-white text-xl font-medium cursor-pointer my-2 shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)]">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
