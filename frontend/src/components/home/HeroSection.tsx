import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { FaCheckCircle } from "react-icons/fa"

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-brand-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Creative Talent,</span> Verified and Ready
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              The trusted AI-powered platform connecting influencers with top creative professionals. Secure escrow payments, smart contracts, and verified talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg bg-gray-700 hover:bg-brand-700" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <Link to="/how-it-works">How It Works</Link>
              </Button>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <FaCheckCircle className="w-5 h-5 mr-1 text-brand-600" /> Secure Escrow
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="w-5 h-5 mr-1 text-brand-600" /> Verified Professionals
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="w-5 h-5 mr-1 text-brand-600" /> AI-Generated Contracts
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="w-5 h-5 mr-1 text-brand-600" /> Revision Protection
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HeroSection