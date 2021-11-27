import React from "react";

const Login = () => {
  return (
    <div className="login_container">
      <section className="login-form-wrap">
        <h1>Facebook</h1>
        <form className="login-form">
          <label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="Email"
            />
          </label>
          <label>
            <input
              id="password"
              type="password"
              name="password"
              required
              placeholder="Password"
            />
          </label>
          <input id="input_login" type="submit" value="Login" />
        </form>
        <h5>
          <a href="/">Forgot password</a>
        </h5>
      </section>
    </div>
  );
};

export default Login;
