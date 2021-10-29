import React from "react";
import ErrorAlter from "./ErrorAlter";
import "./Login.css";

function LoginForm(props) {
  let { handleSubmit, setUsername, setPassword, errorMessage, setError } =
    props.loginState;

  return (
    <div id="login" className="Login">
      {/* <!-- Outer Row --> */}
      <div className="row justify-content-center">
        <div className="row-md-8">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body">
              {/* <!-- Nested Row within Card Body --> */}
              <div className="row">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Login Page</h1>
                  </div>
                  <form action="POST" onSubmit={handleSubmit}>
                    {errorMessage && (
                      <ErrorAlter
                        errorMessage={errorMessage}
                        clearError={() => setError(undefined)}
                      ></ErrorAlter>
                    )}

                    <div className="form-group">
                      <input
                        className="form-control form-control-user"
                        aria-describedby="username"
                        type="text"
                        id="username"
                        required={true}
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                        placeholder="Username"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control form-control-user"
                        placeholder="Password"
                        id="email"
                        required={true}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>

                    <button
                      href="index.html"
                      className="btn btn-secondary btn-user btn-block"
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
