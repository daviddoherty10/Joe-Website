import { BiUser } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import "./login.css";

function Login() {
  return (
    <>
      <div id="login-container">
        <div id="login-head">
          <h1>Login</h1>
        </div>
        <div>
          <form>
            <div>
              <BiUser />
              <input type="text" id="input-username" placeholder="Username" />
            </div>
            <div>
              <RiLockPasswordLine />
              <input
                id="input-password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div>
              <div id="login-form-container">
                <input type="submit" value={'Login'} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
