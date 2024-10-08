import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [formData, setFormData] = useState({
        location: '',
       
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
  return (
    <div className="min-h-screen bg-concrete flex flex-col justify-center items-center p-4">
      <header className="w-full max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
          Parking Slot Finder
        </h1>
        <p className="text-xl text-indigo-700">
          Find and book your perfect parking spot with ease!
        </p>
      </header>

      <main className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Find Parking
            </h2>
            <form className="space-y-6">
              <div className="relative">
                <label htmlFor="location" className="text-sm font-medium text-gray-700 mb-1 block">
                  Location
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Enter your location"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 ease-in-out pl-10"
                  />
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>

              <Link
            to={`/parking/${formData.location}`}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 ease-in-out flex items-center justify-center"
          >
             
             <Search size={20} className="mr-2" />
             Find Parking
          </Link>
              {/* <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 ease-in-out flex items-center justify-center"
              >
                <Search size={20} className="mr-2" />
                Find Parking
              </button> */}
            </form>
          </div>
          <div className="px-8 py-4 bg-gray-50 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              Need help? <a href="#" className="text-indigo-600 hover:text-indigo-800">Contact support</a>
            </p>
          </div>
        </div>
      </main>

      <footer className="mt-12 text-center text-gray-600">
        <p>&copy; 2024 Parking Slot Finder. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;