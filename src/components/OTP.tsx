import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const OTP = () => {
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const [error, setError] = useState('');
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const handleChange = (element: EventTarget & HTMLInputElement, index: number) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.value !== '') {
      if (index < 4) {
        inputRefs.current[index + 1].focus();
      } else {
        inputRefs.current[index].blur();
        handleSubmit();
      }
    }
  };

  const handleBackspace = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === 'Backspace') {
      if (index > 0 && otp[index] === '') {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleSubmit = async () => {
    const otpValue = otp.join('');
    if (otpValue.length === 5) {
      setError('');
      console.log('Submitting OTP:', otpValue);
      
      try {
       
        const response = await mockApiCall(otpValue);
        
        if (response.success) {
          console.log('OTP verified successfully');
          navigate('/home'); 
        } else {
          setError('Invalid OTP. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting OTP:', error);
        setError('An error occurred. Please try again.');
      }
    } else {
      setError('Please enter all 5 digits.');
    }
  };

  // Mock API call function (replace with actual API call)
  const mockApiCall = (otp: string) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulating API response
        resolve({ success: otp === '12345' });
      }, 1000);
    });
  };

  return (
    <div className=" bg flex justify-center items-center min-h-screen bg-gray-100">
      <section className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Enter OTP</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-6">
          <div>
          
            <div className="flex justify-between gap-2">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  ref={(el) => (inputRefs.current[index] = el)}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onKeyDown={(e) => handleBackspace(e, index)}
                  className="w-12 h-12 border-2 rounded text-center text-xl focus:border-blue-500 focus:outline-none"
                />
              ))}
            </div>
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          </div>
        
          <p className="text-sm text-center">
            Didn't receive the code?{' '}
            <Link to="/" className="text-orange-600 hover:underline">
              Resend
            </Link>
          </p>
        </form>
      </section>
    </div>
  );
};

export default OTP;