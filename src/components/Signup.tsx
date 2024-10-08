import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="bg flex justify-center items-center min-h-screen bg-concrete">
      <section className="w-full max-w-md px-8 py-10 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-asphalt">Signup</h2>
        </div>
        <form className="flex flex-col gap-6">

          <div className="flex flex-col">
            <label htmlFor="firstName" className="text-asphalt font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Enter your full name"
              className="border rounded-md px-4 py-2 focus:ring-2 focus:ring-parkingYellow focus:outline-none"
            />
          </div>

          

          <div className="flex flex-col">
            <label htmlFor="email" className="text-asphalt font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="border rounded-md px-4 py-2 focus:ring-2 focus:ring-parkingYellow focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="text-asphalt font-semibold mb-2">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              className="border rounded-md px-4 py-2 focus:ring-2 focus:ring-parkingYellow focus:outline-none"
            />
          </div>

          <button
            type="button"
            className="bg-parkingYellow text-asphalt py-2 font-bold rounded-md hover:bg-yellow-500 transition duration-300"
          >
            Submit
          </button>

          <p className="text-sm text-center text-asphalt">
            Have an account already?{" "}
            <Link to="/" className="text-orange-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </section>
    </div>
  );
};

export default Signup;
