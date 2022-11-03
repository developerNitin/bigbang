import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [toggle, setToggle] = useState("");
  const inputType = ["Email", "Password", "Re-enter Password"];
  const button = ["Create an account", "Become a seller"];
  return (
    <div className="flex h-screen">
      <div className="w-[40%] border-r-[1px] p-[70px]">
        <Link to="/" className="text-[20px]">
          BigBang
        </Link>
      </div>
      <div className="flex-1 p-[70px]">
        <div className="mb-[30px]">
          <h1 className="text-[30px] mb-[8px] font-semibold">Sign up</h1>
          <p className="text-[16px]">
            Already have an account?
            <Link className="hover:underline" to="/auth">
               {" "}Login
            </Link>
          </p>
        </div>
        <div>
          <form>
            <div>
              <span>Login as</span>
              <div className="flex mt-[10px] gap-[20px] mb-[30px]">
                {button.map((i, idx) => {
                  return (
                    <button
                      onClick={() => setToggle(i)}
                      key={idx}
                      className={`w-[50%] py-[15px] border-[1px] border-gray-400 rounded-[4px] ${
                        toggle === i && "border-[blue]"
                      }`}
                    >
                      {i}
                    </button>
                  );
                })}
              </div>
              {inputType.map((i, idx) => {
                return (
                  <div key={idx}>
                    <span>{i}</span>
                    <input className="h-[50px] border-[1px] px-[10px] mt-[10px] mb-[30px] border-gray-400 w-full rounded-[4px]"></input>
                  </div>
                );
              })}
              <button className="px-[20px] py-[10px] border-[1px] border-gray-400 rounded-[4px]">
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
