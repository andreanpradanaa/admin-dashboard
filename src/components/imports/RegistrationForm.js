import React from "react";

export default function RegistrationForm(props) {
  let { handleSubmit, setUsername, setPassword, setPasswordCheck } =
    props.registerState;

  return (
    <div id="login" className="Login">
      {/* <!-- Outer Row --> */}
      <div className="row justify-content-center">
        <div className="row-md-8">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body">
              {/* <!-- Nested Row within Card Body --> */}
              <div className="row">
                <div className="">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Register Page</h1>
                    </div>
                    <div className="form">
                      <form action="POST" onSubmit={handleSubmit}>
                        <div className="form-group">
                          <input
                            className="form-control form-control-user"
                            aria-describedby="username"
                            type="text"
                            id="username"
                            onChange={(e) => {
                              setUsername(e.target.value);
                            }}
                            placeholder="Username"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            className="form-control form-control-user"
                            aria-describedby="password"
                            type="text"
                            id="password"
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            className="form-control form-control-user"
                            aria-describedby="passwordCheck"
                            type="text"
                            id="passwordCheck"
                            onChange={(e) => {
                              setPasswordCheck(e.target.value);
                            }}
                            placeholder="Password Check"
                          />
                        </div>
                        <button className="btn btn-secondary btn-user btn-block">
                          Register
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
