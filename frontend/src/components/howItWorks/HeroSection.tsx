
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-purple-200 to-white py-16 relative overflow-hidden min-h-screen asjfb">
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

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 text-center py-30"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-transparent bg-clip-text">
            How CreativFlow Works
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
          >
            A simple, secure, and efficient way to connect influencers with
            creative professionals
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              variant="outline"
              className="text-lg text-white px-6 py-6 h-[20px] border-white border-2 bg-gray-800 hover:bg-purple-800 hover:text-white"
              asChild
            >
              <a href="#get-started">Get Started</a>
            </Button>
            <Button
              variant="outline"
              className="text-lg text-white px-6 py-6 h-[20px] border-white border-2 bg-gray-800 hover:bg-purple-800 hover:text-white"
              asChild
            >
              <a href="#for-creators">For Creators</a>
            </Button>
            <Button
              variant="outline"
              className="text-lg text-white px-6 py-6 h-[20px] border-white border-2 bg-gray-800 hover:bg-purple-800 hover:text-white"
              asChild
            >
              <a href="#for-freelancers">For Freelancers</a>
            </Button>
          </motion.div>
        </motion.div>

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
  )
}

export default HeroSection