import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] bg-pop-gradient overflow-hidden">
      <div className="dot-pattern absolute inset-0"></div>
      
      {/* Floating comic elements */}
      <div className="absolute top-10 left-10 transform rotate-12 bounce-in">
        <div className="comic-bubble bg-pop-yellow">
          <span className="font-pop text-xl text-comic-black">WOW!</span>
        </div>
      </div>
      
      <div className="absolute top-32 right-20 transform -rotate-6 bounce-in animation-delay-300">
        <div className="comic-bubble bg-pop-cyan">
          <span className="font-pop text-lg text-comic-black">BOOM!</span>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/4 transform rotate-6 bounce-in animation-delay-600">
        <div className="comic-bubble bg-pop-lime">
          <span className="font-pop text-sm text-comic-black">FRESH!</span>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-pop text-comic-white text-pop mb-8 transform -rotate-1">
            超级潮流
            <br />
            <span className="text-pop-yellow">时尚爆炸!</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-comic font-bold text-comic-white mb-12 max-w-2xl mx-auto">
            发现最酷的街头潮服和限量艺术品，让你的个性爆发！每件商品都是独一无二的艺术品。
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="pop" size="pop" className="group bg-pop-yellow text-comic-black border-comic-black">
              <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              立即购买
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="pow" size="pop">
              查看收藏
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-pop text-pop-yellow">500+</div>
              <div className="text-sm font-comic text-comic-white">潮流单品</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-pop text-pop-cyan">50+</div>
              <div className="text-sm font-comic text-comic-white">艺术家</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-pop text-pop-lime">24/7</div>
              <div className="text-sm font-comic text-comic-white">在线服务</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pop-pink rounded-full opacity-20 transform translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pop-purple rounded-full opacity-15 transform -translate-x-48 translate-y-48"></div>
    </section>
  );
};

export default HeroSection;