const HomePage = () => {
    return (
      <div className="min-h-screen bg-concrete">
        <section className="text-center py-8">
          <h1 className="text-3xl font-bold text-asphalt">Welcome to the Parking Slot Finder</h1>
          <p className="text-asphalt mt-4">Find and book your parking spot with ease!</p>
        </section>
  
        <section className="flex flex-col justify-center items-center mx-auto my-6 h-auto lg:w-3/5 md:w-4/5 sm:w-full px-4">
          <div className="py-4">
            <h2 className="font-bold text-2xl text-asphalt">Parking</h2>
          </div>
          <form action="" method="post" className="flex flex-col gap-4 border p-6 shadow-xl w-full max-w-md bg-white rounded-lg">
          <div className="flex flex-col">
            <label htmlFor="location" className="text-asphalt font-semibold mb-2">
            location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Enter your location"
              className="border rounded-md px-4 py-2 focus:ring-2 focus:ring-parkingYellow focus:outline-none"
            />
          </div>

            <button
              type="button"
              className="bg-parkingYellow text-asphalt py-2 font-bold rounded-md hover:bg-yellow-500 transition duration-300"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    );
  };
  
  export default HomePage;
  