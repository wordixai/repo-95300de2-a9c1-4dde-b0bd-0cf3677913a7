import { Button } from "@/components/ui/button";
import { Palette, Shirt, Sparkles, Headphones } from "lucide-react";

const CategorySection = () => {
  const categories = [
    {
      icon: Shirt,
      name: "潮流服饰",
      description: "街头风格的独特设计",
      color: "bg-pop-orange",
      items: "200+ 商品"
    },
    {
      icon: Palette,
      name: "艺术收藏",
      description: "限量版艺术作品",
      color: "bg-pop-pink",
      items: "50+ 作品"
    },
    {
      icon: Sparkles,
      name: "潮流配饰",
      description: "完美搭配你的风格",
      color: "bg-pop-cyan",
      items: "150+ 配饰"
    },
    {
      icon: Headphones,
      name: "生活好物",
      description: "让生活更有趣",
      color: "bg-pop-purple",
      items: "100+ 商品"
    }
  ];

  return (
    <section className="py-16 bg-pop-gradient relative overflow-hidden">
      <div className="dot-pattern absolute inset-0"></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-pop-yellow rounded-full opacity-20 transform -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-pop-lime rounded-full opacity-15 transform translate-x-24 translate-y-24"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-pop text-comic-white text-pop transform rotate-1 mb-4">
            商品分类
          </h2>
          <p className="text-xl font-comic text-comic-white/90">
            探索我们精心策划的各种风格分类
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.name}
                className="bounce-in group cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="pop-frame bg-comic-white p-6 text-center hover:scale-105 transition-transform">
                  <div className={`w-16 h-16 ${category.color} rounded-full mx-auto mb-4 flex items-center justify-center border-3 border-comic-black group-hover:animate-wobble`}>
                    <IconComponent className="w-8 h-8 text-comic-white" />
                  </div>
                  
                  <h3 className="text-2xl font-pop text-comic-black mb-2">
                    {category.name}
                  </h3>
                  
                  <p className="text-gray-600 font-comic mb-3">
                    {category.description}
                  </p>
                  
                  <div className="text-sm font-comic text-pop-orange font-bold mb-4">
                    {category.items}
                  </div>
                  
                  <Button 
                    variant="comic" 
                    size="sm" 
                    className={`${category.color} text-comic-white border-comic-black hover:scale-110 transition-transform`}
                  >
                    探索分类
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-block relative">
            <Button variant="pow" size="pop" className="bg-pop-yellow text-comic-black text-xl px-8 py-4">
              浏览全部商品
            </Button>
            <div className="absolute -top-8 -right-8 transform rotate-12">
              <div className="comic-bubble bg-pop-lime">
                <span className="font-pop text-xs text-comic-black">CLICK!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;