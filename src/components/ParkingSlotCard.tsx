import React, { useState } from 'react';
import { MapPin, Clock, Car, DollarSign } from 'lucide-react';
import pic from '../assets/pic.jpg'

export const ParkingSlotCard = ({ slot, onBook }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
    <div className="relative pb-48 overflow-hidden">
      <img 
        className="absolute inset-0 h-full w-full object-cover transition-all duration-300 hover:scale-105"
        src={slot.imageUrl}
        alt={slot.name} 
      />
    </div>
    <div className="p-4 sm:p-6">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{slot.name}</h3>
      <div className="space-y-2">
        <div className="flex items-center text-gray-600">
          <MapPin size={16} className="mr-2 flex-shrink-0" />
          <span className="text-sm sm:text-base">{slot.address}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock size={16} className="mr-2 flex-shrink-0" />
          <span className="text-sm sm:text-base">{slot.availability}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Car size={16} className="mr-2 flex-shrink-0" />
          <span className="text-sm sm:text-base">{slot.type}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <DollarSign size={16} className="mr-2 flex-shrink-0" />
          <span className="text-sm sm:text-base">{slot.price}/hour</span>
        </div>
      </div>
    </div>
    <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border-t border-gray-200">
    <button 
        onClick={() => onBook(slot)}
        className="w-full bg-parkingYellow text-center text-asphalt py-2 font-bold rounded-md hover:bg-yellow-500 transition duration-300 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ease-in-out text-sm sm:text-base"
      >
        Book Now
      </button>
    </div>
  </div>
);