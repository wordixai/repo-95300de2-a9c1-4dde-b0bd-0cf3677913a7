import PopHeader from "@/components/PopHeader";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import ProductGrid from "@/components/ProductGrid";
import PopFooter from "@/components/PopFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <PopHeader />
      <HeroSection />
      <CategorySection />
      <ProductGrid />
      <PopFooter />
    </div>
  );
};

export default Index;