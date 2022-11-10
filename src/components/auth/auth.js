import { Link } from "react-router-dom";

const Auth = () => {
  const inputType = ["Email", "Password"];
  return (
    <div className="flex h-screen">
      <div className="flex flex-col justify-between w-[40%] border-r-[1px] p-[70px] pb-[100px]">
        <div>
          <h1 className="mb-[20px] text-[40px] font-bold ">
            Start your journey with us.
          </h1>
          <p>
            Discover the world best community of freelancers and explore
            marketplace.
          </p>
        </div>
        <Link to="/" className="text-[20px]">
          BigBang
        </Link>
      </div>
      <div className="flex-1 p-[70px]">
        <div className="mb-[30px]">
          <h1 className="text-[30px] mb-[8px] font-semibold ">Login</h1>
          <p className="text-[16px]">
            Don't have an account?{" "}
            <Link className="hover:underline" to="/auth/register">
              Register
            </Link>
          </p>
        </div>
        <div>
          <form>
            <div>
              {inputType.map((i, idx) => {
                return (
                  <div key={idx}>
                    <span>{i}</span>
                    <input className="h-[50px] border-[1px] px-[10px] mt-[10px] mb-[30px] border-gray-400 w-full rounded-[4px]"></input>
                  </div>
                );
              })}
              <button className="px-[20px] py-[10px] border-[1px] border-gray-400 rounded-[4px]">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
