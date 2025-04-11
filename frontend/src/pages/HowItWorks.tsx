import MainLayout from "@/components/shared/MainLayout";
import { Button } from "@/components/ui/button";
import { 
  FaArrowRight, 
  FaCheckCircle, 
  FaFileAlt, 
  FaSearch, 
  FaHandshake, 
  FaCommentAlt, 
  FaShieldAlt, 
  FaStar, 
  FaUpload 
} from "react-icons/fa";
import { Link } from "react-router-dom"; 
import { FaFileLines } from "react-icons/fa6";

const HowItWorks = () => {
  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-purple-200 to-white py-16 h-[700px] relative overflow-hidden">
  {/* Bottom Animated Wave */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    <svg
      className="w-[200%] h-32 animate-wave"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#a855f7"
        fillOpacity="0.4"
        d="M0,224L48,192C96,160,192,96,288,96C384,96,480,160,576,176C672,192,768,160,864,160C960,160,1056,192,1152,181.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L0,320Z"
      />
    </svg>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center py-30">
    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-transparent bg-clip-text">
      How CreativFlow Works
    </h1>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
      A simple, secure, and efficient way to connect influencers with creative professionals
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <Button variant="outline" className="text-lg px-6 py-6 h-[20px] border-purple-800 border-2 bg-purple-100 hover:bg-gray-800 hover:text-white" asChild>
        <a href="#get-started">Get Started</a>
      </Button>
      <Button variant="outline" className="text-lg px-6 py-6 h-[20px] border-purple-800 border-2 bg-purple-100 hover:bg-gray-800 hover:text-white" asChild>
        <a href="#for-creators">For Creators</a>
      </Button>
      <Button variant="outline" className="text-lg px-6 py-6 h-[20px] border-purple-800 border-2 bg-purple-100 hover:bg-gray-800 hover:text-white" asChild>
        <a href="#for-freelancers">For Freelancers</a>
      </Button>
    </div>
  </div>

  {/* Animation CSS */}
  <style>
    {`
      @keyframes wave {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }

      .animate-wave {
        animation: wave 10s linear infinite;
      }
    `}
  </style>
</div>

      <div id="get-started"className="py-12 md:py-24 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mt-30 mb-12 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-transparent bg-clip-text">How It Works For Everyone</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           
            <div className="flex flex-col items-center text-center p-6 border bg-gradient-to-b from-purple-100 to-white border-purple-800 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <FaFileAlt className="h-6 w-10 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm " />
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-900">1. Post or Find Work</h3>
              <p className="text-gray-800">
                Create a detailed job post or browse available opportunities with our AI-powered matching system.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 border border-gray-800 bg-gradient-to-b from-purple-100 to-white rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <FaCommentAlt className="h-6 w-10 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-900">2. Connect & Collaborate</h3>
              <p className="text-gray-800">
                Use our secure messaging platform to discuss project details and finalize contracts with built-in payment protection.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 border border-gray-800 bg-gradient-to-b from-purple-100 to-white rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <FaStar className="h-6 w-10 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-900">3. Complete & Review</h3>
              <p className="text-gray-800">
                Deliver completed work through our platform, release payment, and build your reputation with reviews.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="for-creators" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-transparent bg-clip-text">For Influencers & Content Creators</h2>
          <p className="text-center text-gray-900 font-semibold max-w-3xl mx-auto mb-12">
            Find the perfect creative professional to enhance your content and grow your channel
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-b from-purple-100 via-purple-100 to-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-6 text-purple-900">Your Journey on CreativFlow</h3>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center">
                      <FaSearch className="h-4 w-4 text-brand-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Find Top Creative Talent</h4>
                    <p className="text-gray-600">Browse profiles of verified professionals with portfolios and ratings</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center">
                      <FaFileLines className="h-4 w-4 text-brand-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Create Detailed Briefs</h4>
                    <p className="text-gray-600">Our AI helps you craft precise job briefs to attract the right talent</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center">
                      <FaShieldAlt className="h-4 w-4 text-brand-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Secure Payment Protection</h4>
                    <p className="text-gray-600">Money is held in escrow until you approve the final deliverables</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center">
                      <FaCheckCircle className="h-4 w-4 text-brand-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Quality Guaranteed</h4>
                    <p className="text-gray-600">Request revisions and only pay when you're satisfied with the work</p>
                  </div>
                </li>
              </ul>
              
              <Button className="mt-8 bg-brand-600 hover:bg-brand-700" asChild>
                <Link to="/signup">Start Hiring <FaArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            
            <div className="bg-gradient-to-b from-purple-100 via-purple-100 to-white text-gray-900 p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-6 text-purple-900">Why Influencers Choose CreativFlow</h3>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="h-5 w-5 text-purple-900" />
                  <span>Access to pre-vetted creative professionals</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="h-5 w-5 text-purple-900" />
                  <span>AI-powered matching with the perfect freelancer</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="h-5 w-5 text-purple-900" />
                  <span>File watermarking for copyright protection</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="h-5 w-5 text-purple-900" />
                  <span>Secure payment system with milestone releases</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="h-5 w-5 text-purple-900" />
                  <span>AI tools for better briefs and feedback</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="h-5 w-5 text-purple-900" />
                  <span>One-click rehiring for recurring projects</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="h-5 w-5 text-purple-900" />
                  <span>Dedicated support for high-profile creators</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="for-freelancers" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-transparent bg-clip-text">For Creative Professionals</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Showcase your skills, find well-paid work, and build long-term relationships with top creators
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-6">Why Freelancers Choose CreativFlow</h3>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="h-5 w-5 text-purple-200" />
                  <span>Connect with established content creators</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="h-5 w-5 text-purple-200" />
                  <span>AI-enhanced portfolio creation tools</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="h-5 w-5 text-purple-200" />
                  <span>Secure contracts with payment protection</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="h-5 w-5 text-purple-200" />
                  <span>Transparent revision process with clear limits</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="h-5 w-5 text-purple-200" />
                  <span>Build a verified profile with authentic reviews</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="h-5 w-5 text-purple-200" />
                  <span>Lower fees than other freelance platforms</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="h-5 w-5 text-purple-200" />
                  <span>Opportunity for repeat business and referrals</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-6 text-purple-600">Your Journey on CreativFlow</h3>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <FaUpload className="h-4 w-4 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Create Your Portfolio</h4>
                    <p className="text-gray-600">Showcase your work with our AI-enhanced portfolio builder</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <FaSearch className="h-4 w-4 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Find Relevant Projects</h4>
                    <p className="text-gray-600">Our matching algorithm connects you with perfect-fit opportunities</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <FaHandshake className="h-4 w-4 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Work With Clear Terms</h4>
                    <p className="text-gray-600">AI-generated contracts protect both parties with fair terms</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <FaStar className="h-4 w-4 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Build Your Reputation</h4>
                    <p className="text-gray-600">Get verified reviews to showcase your skills and reliability</p>
                  </div>
                </li>
              </ul>
              
              <Button className="mt-8 bg-purple-600 hover:bg-purple-700" asChild>
                <Link to="/signup">Join as Freelancer <FaArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HowItWorks;