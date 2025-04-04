import { useState } from 'react';
import { FaFacebook, FaGoogle, FaApple, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import backgroundImage from '../assets/house.webp';
import log from '../assets/Frame 1.jpg'
import Navbar from '../Components/Navbar/Navbar';


function Signup() {
  const [step, setStep] = useState("phone");
  const navigate = useNavigate();
  return (
    <div>
    <Navbar />
    <div
      className="flex flex-col bg-fuchsia-400 items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* from div */}
      <div className="w-full max-w-md bg- p-6 rounded-2xl shadow-lg md:max-w-lg lg:max-w-xl shadow-fuchsia-300">
        {step === "phone" && (
          <div>
           <div className='flex justify-center mb-6'>
            <img className='animate-pulse bg-none' src={log} alt="" />
            <h2 className="text-3xl text-white font-semibold mb-4 animate-bounce">Welcome to Airbnb</h2>
           </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Country/Region</label>
              <select className="w-full mt-1 p-2 border rounded-lg bg-gray-50">
                <option>United Kingdom (+44)</option>
                <option>United States (+1)</option>
                <option>Canada (+1)</option>
                <option>Australia (+61)</option>
                <option>India (+91)</option>
                <option>Germany (+49)</option>
                <option>France (+33)</option>
                <option>Italy (+39)</option>
                <option>Spain (+34)</option>
                <option>China (+86)</option>
                <option>Japan (+81)</option>
                <option>South Korea (+82)</option>
                <option>Brazil (+55)</option>
                <option>South Africa (+27)</option>
                <option>Mexico (+52)</option>
                <option>Russia (+7)</option>
                <option>Netherlands (+31)</option>
                <option>Sweden (+46)</option>
                <option>Norway (+47)</option>
                <option>Denmark (+45)</option>
                <option>Switzerland (+41)</option>
                <option>New Zealand (+64)</option>
                <option>Singapore (+65)</option>
                <option>United Arab Emirates (+971)</option>
                <option>Saudi Arabia (+966)</option>
                <option>Turkey (+90)</option>
                <option>Argentina (+54)</option>
                <option>Chile (+56)</option>
                <option>Colombia (+57)</option>
                <option>Egypt (+20)</option>
                <option>Nigeria (+234)</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Phone number</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-lg bg-gray-50"
                placeholder="Phone number"
              />
            </div>
            <button
              className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white p-3 rounded-lg font-medium mb-4"
              onClick={() => setStep("email")}
            >
              Continue
            </button>

            {/* Social Media Buttons */}
            <div className="flex flex-col gap-2">
              <button className="w-full flex items-center justify-center border p-2 rounded-lg text-blue-600 hover:bg-blue-50">
                <FaFacebook className="mr-2" /> Continue with Facebook
              </button>
              <button className="w-full flex items-center justify-center border p-2 rounded-lg text-red-600 hover:bg-red-50">
                <FaGoogle className="mr-2" /> Continue with Google
              </button>
              <button className="w-full flex items-center justify-center border p-2 rounded-lg text-black hover:bg-gray-100">
                <FaApple className="mr-2" /> Continue with Apple
              </button>
              <button className="w-full flex items-center justify-center border p-2 rounded-lg text-gray-600 hover:bg-gray-50">
                <FaEnvelope className="mr-2" /> Continue with Email
              </button>
            </div>
          </div>
        )}

        {/* Step: Email */}
        {step === "email" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center animate-bounce text-white">Welcome to Airbnb</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full mt-1 p-2 border rounded-lg bg-gray-50"
                placeholder="Email"
              />
            </div>
            <button
              className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white p-3 rounded-lg font-medium"
              onClick={() => setStep("register")}
            >
              Continue
            </button>
          </div>
        )}

        {/* Step: Register */}
        {step === "register" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center animate-bounce text-white">Create an account</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">First name</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-lg bg-gray-50"
                placeholder="First name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Last name</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-lg bg-gray-50"
                placeholder="Last name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Birthdate</label>
              <input
                type="date"
                className="w-full mt-1 p-2 border rounded-lg bg-gray-50"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="w-full mt-1 p-2 border rounded-lg bg-gray-50"
                placeholder="Password"
              />
            </div>
            <button
              className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white p-3 rounded-lg font-medium"
              onClick={() => navigate("/signin")}
            >
              Agree and continue
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
  )
}

export default Signup




