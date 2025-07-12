import { useNavigate } from "react-router-dom";
import SignUpModal from "../modals/SignUpModal.jsx";
import { useState } from "react";
import SignInModal from "../modals/SignInModal.jsx";
import { useAuth } from "../../context/AuthContext.jsx";
import logo from "../../assets/SamaKa.png";

const HeroSection = () => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    if (user) {
      navigate("");
    } else {
      setIsSignInModalOpen(true);
      setIsSignUpModalOpen(false);
    }
  };

  const handleCloseModals = () => {
    setIsSignInModalOpen(false);
    setIsSignUpModalOpen(false);
  };

  const handleSwitchToSignUp = () => {
    setIsSignInModalOpen(false);
    setIsSignUpModalOpen(true);
  };

  const handleSwitchToSignIn = () => {
    setIsSignUpModalOpen(false);
    setIsSignInModalOpen(true);
  };

  return (
    <>
      <div className="flex justify-center items-center pt-2 sm:pt-24 md:pt-32 lg:pt-40 pb-16 sm:pb-20 md:pb-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          
          <img src={logo} alt="SamaKa logo" className="w-60 md:w-96 flex-shrink-0" />

         
          <div className="text-center md:text-center flex-1">
            <div className="mb-6 sm:mb-8 lg:mb-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl text-headingText font-bold leading-tight mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                <span className="block sm:inline">Be part of the community</span>{" "}
                <span className="block sm:inline">here in</span>{" "}
                <div className="relative inline-block mt-1 sm:mt-0">
                  <span className="text-primary">Sama</span>{""}
                  <span className="text-subHeadingText">Ka</span>
                  
                </div>
              </h1>
            </div>
            <div className="text-center md:text-center flex-1 mb-8 sm:mb-10 lg:mb-12">
              <p className="text-subHeadingText text-base sm:text-lg md:text-xl lg:text-2xl max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
              Lorem ipsum dolor sit amet consectetur. Feugiat lacus porta malesuada porta cras.
              </p>
            </div>
            <div className="flex flex-col sm:flex-col justify-center md:justify-start items-center gap-4 sm:gap-6 px-4 sm:px-0">
              <button
                onClick={handleSignUpClick}
                className="w-full sm:w-auto bg-primary text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[200px] sm:min-w-[220px]"
              >
                Join Activity
              </button>
              <a
                href="#hiw"
                className="w-full sm:w-auto border-2 border-gray-300 text-subHeadingText px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1 min-w-[200px] sm:min-w-[220px]"
              >
                View Rewards
              </a>
            </div>
          </div> 
        </div>
      </div>
      <SignInModal
        isOpen={isSignInModalOpen}
        onClose={handleCloseModals}
        onSwitchToSignUp={handleSwitchToSignUp}
      />

      <SignUpModal
        isOpen={isSignUpModalOpen}
        onClose={handleCloseModals}
        onSwitchToSignIn={handleSwitchToSignIn}
      />
    </>
  );
};

export default HeroSection;
