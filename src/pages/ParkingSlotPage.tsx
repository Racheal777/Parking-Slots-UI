import { useState } from "react";
import {  ChevronLeft, ChevronRight } from 'lucide-react';
import { ParkingSlotCard } from "../components/ParkingSlotCard";
import BookingForm from "../components/BookingForm";
import { useParams } from "react-router-dom";


const ParkingSlotsPage = () => {
    // const [location, setLocation] = useState('National Theatre');
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState(null);
  
    const {location} = useParams()

    const handleBooking = (slot) => {
      setSelectedSlot(slot);
      setShowBookingForm(true);
    };
    
    // Mock data for available parking slots
    const parkingSlots = [
      { id: 1, name: "SSNIT Parking", address: "123 Main St", availability: "24/7", type: "Covered", imageUrl: '/src/assets/pic2.jpg', price: "$2.50" },
      { id: 2, name: "Afua Southerland Park", address: "456 Oak Ave", availability: "6AM - 10PM",imageUrl: '/src/assets/pic3.jpg', type: "Multi-story", price: "$3.00" },
      { id: 3, name: "Kempinski Parking Lot", address: "789 River Rd", availability: "24/7",imageUrl: '/src/assets/pic2.jpg', type: "Open", price: "$2.00" },
      { id: 4, name: "World Trade Center", address: "321 Market St", availability: "7AM - 9PM",imageUrl: '/src/assets/pic2.jpg', type: "Street", price: "$1.50" },
      { id: 5, name: "Movenpick Hotel", address: "321 Market St", availability: "7AM - 9PM",imageUrl: '/src/assets/pic3.jpg', type: "Street", price: "$1.50" },
    ];
  
    return (
      <div className="min-h-screen bg-concrete py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-indigo-900 mb-2 sm:mb-4">Available Parking Slots</h1>
            <p className="text-lg sm:text-xl text-indigo-700 capitalize ">Find your perfect spot in {location}</p>
          </header>
  
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="flex items-center justify-between">
              <button className="text-indigo-600 hover:text-indigo-800 focus:outline-none p-2">
                <ChevronLeft size={20} />
              </button>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 capitalize">{location}</h2>
              <button className="text-indigo-600 hover:text-indigo-800 focus:outline-none p-2">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {parkingSlots.map(slot => (
              <ParkingSlotCard key={slot.id} slot={slot} 
               onBook={() => handleBooking(slot)}/>
            ))}
          </div>

          {showBookingForm && (
        <BookingForm 
          slot={selectedSlot} 
          onClose={() => setShowBookingForm(false)} 
        />
      )}
        </div>
      </div>
    );
  };
  
  export default ParkingSlotsPage;