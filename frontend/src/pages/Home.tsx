import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeatureSection from "@/components/home/FeatureSection";
import CtaSection from "@/components/home/CtaSection"
import MainLayout from "@/components/shared/MainLayout";



const Home = () => {
  return (
    <MainLayout>
      <HeroSection/>
      <CategoriesSection/>
      <FeatureSection/>
      <CtaSection/>      
    </MainLayout>
  );
};

export default Home;
