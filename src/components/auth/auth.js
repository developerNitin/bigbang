import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div className="flex h-screen">
      <div className="w-[40%] border-r-[1px]"></div>
      <div className="flex-1 p-[70px]">
        <div className="mb-[30px]">
          <h1 className="text-[30px] mb-[8px] font-semibold">Sign up</h1>
          <p className="text-[16px]">
            Already have an account? <Link to="/auth/register">Register</Link>
          </p>
        </div>
        <div>
          <form>
            <div>
              <span>Login as</span>
              <div className="flex mt-[10px] gap-[20px] mb-[30px]">
                <button className="w-[40%] py-[10px] border border-black rounded-[4px]">
                  
                </button>
                <button className="w-[40%] py-[10px] border border-black rounded-[4px]">
                  Seller
                </button>
              </div>
              <div>
                <input className="h-[40px] border"></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
