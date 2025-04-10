import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.25,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        ease: "easeInOut",
      },
    },
  };
  

const CtaSection = () => {
  return (
    <motion.section
      className="py-20 bg-gradient-to-r from-brand-100 to-brand-300 text-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
      <motion.h2
  className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-transparent bg-clip-text"
  variants={itemVariants}
>
  Supercharge Your Creative Journey
</motion.h2>

        <motion.p
          className="text-lg md:text-xl mb-10 text-gray-700 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Join thousands of creative minds—designers, influencers, and visionaries—collaborating on projects that matter.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <Button size="lg" className="bg-gradient-to-r from-purple-900  to-purple-700 text-white hover:bg-purple-800 shadow-lg" asChild>
            <Link to="/signup" className="flex items-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-gray-900 border-gray-900 hover:bg-gray-100"
            asChild
          >
            <Link to="/jobs" className="flex items-center gap-2 border-purple-700 border-2">
              Explore Jobs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CtaSection;
