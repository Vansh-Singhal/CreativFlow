import { Link } from "react-router-dom";
import {
  MdVideoLibrary,
  MdImage,
  MdAnimation,
  MdRecordVoiceOver,
  MdEditNote
} from "react-icons/md";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  { Icon: MdVideoLibrary, title: "Video Editors", desc: "Transform raw footage into engaging stories" },
  { Icon: MdImage, title: "Thumbnail Design", desc: "Eye-catching thumbnails that convert" },
  { Icon: MdAnimation, title: "Animation", desc: "Bring your ideas to life with motion" },
  { Icon: MdRecordVoiceOver, title: "Voiceover", desc: "Professional voices for your content" },
  { Icon: MdEditNote, title: "Scriptwriting", desc: "Compelling scripts that engage viewers" }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  whileHover: {
    scale: 1.05,
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)"
  }
};

const CategoriesSection = () => {
  return (
    <motion.section
      className="py-12 px-4 sm:px-8 md:px-16 lg:px-24 bg-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-transparent bg-clip-text">Find Creative Professionals</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-900 font-semibold">
          Top talent for all your content creation needs
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        variants={containerVariants}
      >
        {categories.map(({ Icon, title, desc }, index) => (
          <motion.div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm text-slate-900 font-semibold cursor-pointer"
            variants={cardVariants}
            whileHover="whileHover"
          >
            <div className="h-14 w-14 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Icon className="h-7 w-7 text-slate-900" />
            </div>
            <h3 className="font-semibold text-xl mb-2">{title}</h3>
            <p className="text-sm text-gray-700">{desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Button */}
<motion.div
  className="mt-14 text-center"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.5 }}
>
  <motion.div
    whileHover={{
      scale: 1.05,
      boxShadow: "0px 0px 12px rgba(17, 24, 39, 0.4)" // Soft gray-900 glow
    }}
    whileTap={{ scale: 0.95 }}
    className="inline-flex items-center space-x-2 border-2 border-gray-900 text-gray-900 font-medium px-6 py-2 rounded-full transition-all duration-300 hover:bg-gray-900 hover:text-white cursor-pointer"
  >
    <Link to="/freelancers" className="flex items-center gap-2 ">
      <span>Explore All Categories</span>
      <ArrowRight className="h-4 w-4" />
    </Link>
  </motion.div>
</motion.div>


    </motion.section>
  );
};

export default CategoriesSection;
