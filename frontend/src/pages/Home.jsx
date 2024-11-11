import React from "react";
import Vote from "../components/Vote";
import { NavLink } from "react-router-dom";
import "./Home.css";
import myImage from "/src/images/4.png";
import Login from "./Login";
import AdminLogin from "./AdminLogin";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gradient-to-r from-[#1E40AF] to-[#60A5FA] text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a className="flex items-center gap-2" href="#" rel="ugc">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-white"
            >
              <path d="m9 12 2 2 4-4"></path>
              <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"></path>
              <path d="M22 19H2"></path>
            </svg>
            <span className="font-bold text-lg">SEHAJ-MAT</span>
          </a>
          <nav className="hidden md:flex items-center gap-4">
            <a className="hover:underline" href="#work" rel="ugc">
              How It Works
            </a>
            <a className="hover:underline" href="#access" rel="ugc">
              Accessibility
            </a>
            <a className="hover:underline" href="#security" rel="ugc">
              Security
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 bg-white text-[#1E40AF] hover:bg-[#3B82F6] hover:text-white">
            <NavLink to="/Login">Voter Login</NavLink>
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 bg-white text-[#1E40AF] hover:bg-[#3B82F6] hover:text-white">
            <NavLink to="/AdminLogin">Admin Login</NavLink>
          </button>
        </div>
      </header>
      <main className="flex-1 py-12 bg-gradient-to-b from-[#F3F4F6] to-[#E5E7EB]">
        {/* <!-- About --> */}
        <section className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4 text-[#1E40AF]">
                Secure and Accessible Online Voting
              </h1>
              <p className="text-gray-600 mb-6 text-[25px]">
                Our platform provides a safe and inclusive voting experience for
                all. With robust security measures and a focus on accessibility,
                we empower you to make your voice heard.
              </p>
            </div>
            <div>
              <div
                aria-roledescription="carousel"
                className="relative w-full "
                role="region"
              >
                <div className="overflow-hidden">
                  <div
                    className="flex -ml-4"
                    style={{ transform: "translate3d(0px, 0px, 0px)" }}
                  >
                    <div
                      aria-roledescription="slide"
                      className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                      role="group"
                    >
                      <img
                        alt="Voting Illustration"
                        className="w-full"
                        height="400"
                        src={myImage}
                        width="600"
                        style={{
                          aspectRatio: "600 / 400",
                          objectFit: "cover;margin-bottom:20px",
                        }} //className="mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- How it Works --> */}
        <section className="bg-white py-12" id="work">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#1E40AF]">
              How the Voting Process Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 mb-4 text-[#1E40AF]"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <h3 className="text-xl font-bold mb-2 text-[#1E40AF]">
                  Secure Registration
                </h3>
                <p className="text-gray-600">
                  Easily register to vote with our secure and user-friendly
                  platform. Verify your identity and get ready to participate.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 mb-4 text-[#1E40AF]"
                >
                  <path d="m9 12 2 2 4-4"></path>
                  <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"></path>
                  <path d="M22 19H2"></path>
                </svg>
                <h3 className="text-xl font-bold mb-2 text-[#1E40AF]">
                  Cast Your Vote
                </h3>
                <p className="text-gray-600">
                  Navigate the ballot with clear instructions and make your
                  selections with confidence. Your vote is secure and private.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 mb-4 text-[#1E40AF]"
                >
                  <rect
                    width="18"
                    height="11"
                    x="3"
                    y="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <h3 className="text-xl font-bold mb-2 text-[#1E40AF]">
                  Secure Verification
                </h3>
                <p className="text-gray-600">
                  Your vote is encrypted and stored securely. We provide
                  transparency throughout the process to build trust in the
                  system.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Accessibility --> */}
        <section
          className="py-12 bg-gradient-to-r from-[#1E40AF] to-[#60A5FA] text-white"
          id="access"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Accessibility Features
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 mb-4 text-[#1E40AF]"
                >
                  <path d="M10 8h.01"></path>
                  <path d="M12 12h.01"></path>
                  <path d="M14 8h.01"></path>
                  <path d="M16 12h.01"></path>
                  <path d="M18 8h.01"></path>
                  <path d="M6 8h.01"></path>
                  <path d="M7 16h10"></path>
                  <path d="M8 12h.01"></path>
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                </svg>
                <h3 className="text-xl font-bold mb-2 text-[#1E40AF]">
                  Keyboard Navigation
                </h3>
                <p className="text-gray-600">
                  Our platform is designed for seamless keyboard navigation,
                  ensuring accessibility for users with diverse needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 mb-4 text-[#1E40AF]"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 18a6 6 0 0 0 0-12v12z"></path>
                </svg>
                <h3 className="text-xl font-bold mb-2 text-[#1E40AF]">
                  High Contrast Mode
                </h3>
                <p className="text-gray-600">
                  Toggle our high contrast mode to enhance visibility and
                  readability for users with visual impairments.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 mb-4 text-[#1E40AF]"
                >
                  <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
                </svg>
                <h3 className="text-xl font-bold mb-2 text-[#1E40AF]">
                  Screen Reader Support
                </h3>
                <p className="text-gray-600">
                  Our platform is optimized for screen readers, ensuring a
                  seamless experience for users with visual or cognitive
                  disabilities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 mb-4 text-[#1E40AF]"
                >
                  <path d="m5 8 6 6"></path>
                  <path d="m4 14 6-6 2-3"></path>
                  <path d="M2 5h12"></path>
                  <path d="M7 2h1"></path>
                  <path d="m22 22-5-10-5 10"></path>
                  <path d="M14 18h6"></path>
                </svg>
                <h3 className="text-xl font-bold mb-2 text-[#1E40AF]">
                  Multilingual Support
                </h3>
                <p className="text-gray-600">
                  Choose from a variety of language options to participate in
                  your preferred language.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Security --> */}
        <section
          className="py-12 bg-gradient-to-b from-[#F3F4F6] to-[#E5E7EB]"
          id="security"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#1E40AF]">
              Secure and Transparent Voting
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-12 w-12 mb-4 text-[#1E40AF]"
                >
                  <rect
                    width="18"
                    height="11"
                    x="3"
                    y="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <h3 className="text-xl font-bold mb-2 text-[#1E40AF]">
                  Encryption and Authentication
                </h3>
                <p className="text-gray-600">
                  Your votes are encrypted and stored securely. We implement
                  robust authentication measures to protect against unauthorized
                  access.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 mb-4 text-[#1E40AF]"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
                <h3 className="text-xl font-bold mb-2 text-[#1E40AF]">
                  Multi-Factor Authentication
                </h3>
                <p className="text-gray-600">
                  Enhance the security of your account with multi-factor
                  authentication, ensuring only you can access your voting
                  information.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 mb-4 text-[#1E40AF]"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <h3 className="text-xl font-bold mb-2 text-[#1E40AF]">
                  Transparent Voting Process
                </h3>
                <p className="text-gray-600">
                  We provide clear and detailed information about the voting
                  process, giving you confidence in the integrity of the system.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 mb-4 text-[#1E40AF]"
                >
                  <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path>
                  <path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path>
                  <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path>
                  <path d="M2 12a10 10 0 0 1 18-6"></path>
                  <path d="M2 16h.01"></path>
                  <path d="M21.8 16c.2-2 .131-5.354 0-6"></path>
                  <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></path>
                  <path d="M8.65 22c.21-.66.45-1.32.57-2"></path>
                  <path d="M9 6.8a6 6 0 0 1 9 5.2v2"></path>
                </svg>
                <h3 className="text-xl font-bold mb-2 text-[#1E40AF]">
                  Biometric Authentication
                </h3>
                <p className="text-gray-600">
                  Optionally, you can use biometric authentication, such as
                  fingerprint or facial recognition, to further secure your
                  voting experience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gradient-to-r from-[#1E40AF] to-[#60A5FA] text-white py-6">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <p className="text-sm">© 2024 SEHAJ MAT. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <a className="hover:underline" href="#" rel="ugc">
              Privacy
            </a>
            <a className="hover:underline" href="#" rel="ugc">
              Terms
            </a>
            <a className="hover:underline" href="#" rel="ugc">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Home;
