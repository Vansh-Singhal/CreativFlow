import { FiCode, FiShield, FiMic, FiImage } from "react-icons/fi";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const FeatureSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-gray-50 py-16 transition-all duration-500 ease-in-out"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} 
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl font-bold mb-3 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-transparent bg-clip-text"
          >
            Powered by AI, Built for Creators
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }} 
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-gray-900 max-w-3xl mx-auto"
          >
            Our AI tools make every step of the creative process smarter and easier
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: <FiCode className="h-5 w-5 text-purple-700" />,
              title: "AI-Generated Job Descriptions",
              text: "Turn your basic ideas into detailed, professional job posts that attract the right talent.",
            },
            {
              icon: <FiShield className="h-5 w-5 text-purple-700" />,
              title: "Smart Contracts & Escrow",
              text: "Secure payments and clear terms with AI-generated contracts customized to your project.",
            },
            {
              icon: <FiMic className="h-5 w-5 text-purple-700" />,
              title: "Voice-to-Text Feedback",
              text: "Record your thoughts and our AI transcribes them into clear, actionable feedback.",
            },
            {
              icon: <FiImage className="h-5 w-5 text-purple-700" />,
              title: "Portfolio & Resume Analysis",
              text: "Our AI assesses skills from uploaded work samples for better matching and verification.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card hover:border-purple-300 flex items-start"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <div className="h-12 w-12 bg-purple-200 rounded-full flex items-center justify-center mr-4 shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureSection;
