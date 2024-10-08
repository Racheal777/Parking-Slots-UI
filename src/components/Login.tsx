import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg flex justify-center items-center min-h-screen bg-concrete">
      <section className="w-full max-w-md px-6 py-8 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Login</h2>
        </div>
        <form className="flex flex-col gap-4">
        <div className="flex flex-col">
            <label htmlFor="lastName" className="text-asphalt font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              className="border rounded-md px-4 py-2 focus:ring-2 focus:ring-parkingYellow focus:outline-none"
            />
          </div>


          <Link
            to="/otp"
            className="bg-parkingYellow text-center text-asphalt py-2 font-bold rounded-md hover:bg-yellow-500 transition duration-300"
          >
            Submit
          </Link>
          <p className="text-sm text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-orange-600 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </section>
    </div>
  );
};

export default Login;
