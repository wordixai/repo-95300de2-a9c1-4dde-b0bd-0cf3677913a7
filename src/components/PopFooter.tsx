import { Button } from "@/components/ui/button";
import { Heart, Star, Facebook, Instagram, Twitter, Mail } from "lucide-react";

const PopFooter = () => {
  return (
    <footer className="bg-comic-black text-comic-white relative overflow-hidden">
      <div className="dot-pattern absolute inset-0 opacity-10"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-pop-orange border-2 border-comic-white rounded-full flex items-center justify-center transform rotate-3">
                <Star className="w-5 h-5 text-comic-white" fill="currentColor" />
              </div>
              <h3 className="text-2xl font-pop text-pop-yellow">POP!SHOP</h3>
            </div>
            <p className="font-comic text-comic-white/80">
              让每个人都能拥有独特的波普艺术风格，展现真实的自我。
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-pop-pink hover:text-pop-yellow hover:bg-pop-pink/20">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-pop-cyan hover:text-pop-yellow hover:bg-pop-cyan/20">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-pop-purple hover:text-pop-yellow hover:bg-pop-purple/20">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-pop-orange hover:text-pop-yellow hover:bg-pop-orange/20">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-pop text-pop-yellow">快速链接</h4>
            <ul className="space-y-2 font-comic">
              <li><a href="#" className="hover:text-pop-orange transition-colors">新品上架</a></li>
              <li><a href="#" className="hover:text-pop-pink transition-colors">热门商品</a></li>
              <li><a href="#" className="hover:text-pop-cyan transition-colors">限量收藏</a></li>
              <li><a href="#" className="hover:text-pop-purple transition-colors">艺术家合作</a></li>
              <li><a href="#" className="hover:text-pop-lime transition-colors">品牌故事</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-pop text-pop-yellow">客户服务</h4>
            <ul className="space-y-2 font-comic">
              <li><a href="#" className="hover:text-pop-orange transition-colors">联系我们</a></li>
              <li><a href="#" className="hover:text-pop-pink transition-colors">配送信息</a></li>
              <li><a href="#" className="hover:text-pop-cyan transition-colors">退换政策</a></li>
              <li><a href="#" className="hover:text-pop-purple transition-colors">尺码指南</a></li>
              <li><a href="#" className="hover:text-pop-lime transition-colors">常见问题</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-pop text-pop-yellow">订阅资讯</h4>
            <p className="font-comic text-comic-white/80 text-sm">
              第一时间获取新品发布和独家优惠信息！
            </p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="输入邮箱地址..."
                className="w-full px-4 py-2 rounded-lg border-2 border-pop-pink bg-comic-white text-comic-black font-comic placeholder:text-gray-500"
              />
              <Button variant="pop" className="w-full bg-pop-pink text-comic-white">
                订阅
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t-2 border-pop-yellow/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 font-comic text-comic-white/60">
              <span>© 2024 POP!SHOP. Made with</span>
              <Heart className="w-4 h-4 text-pop-pink fill-current animate-pulse" />
              <span>for Pop Art Lovers</span>
            </div>
            
            <div className="flex space-x-6 font-comic text-sm">
              <a href="#" className="hover:text-pop-orange transition-colors">隐私政策</a>
              <a href="#" className="hover:text-pop-pink transition-colors">服务条款</a>
              <a href="#" className="hover:text-pop-cyan transition-colors">Cookie政策</a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-pop-orange rounded-full opacity-20 transform -translate-x-12 translate-y-12"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-pop-purple rounded-full opacity-15 transform translate-x-16 -translate-y-16"></div>
    </footer>
  );
};

export default PopFooter;