import { ShoppingCart, Search, Menu, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const PopHeader = () => {
  return (
    <header className="relative bg-comic-white border-b-4 border-comic-black">
      <div className="dot-pattern absolute inset-0"></div>
      <div className="relative z-10 container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-pop-orange border-3 border-comic-black rounded-full flex items-center justify-center transform rotate-3">
              <Star className="w-6 h-6 text-comic-white" fill="currentColor" />
            </div>
            <h1 className="text-3xl font-pop text-comic-black text-pop">
              POP!SHOP
            </h1>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Input 
                placeholder="搜索潮流好物..." 
                className="border-3 border-comic-black bg-pop-yellow text-comic-black placeholder:text-comic-black/70 font-comic font-semibold"
              />
              <Button 
                size="icon" 
                variant="pop"
                className="absolute right-1 top-1 h-8 w-8"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Button variant="ghost" className="font-comic font-bold text-comic-black hover:text-pop-orange">
              新品
            </Button>
            <Button variant="ghost" className="font-comic font-bold text-comic-black hover:text-pop-pink">
              潮服
            </Button>
            <Button variant="ghost" className="font-comic font-bold text-comic-black hover:text-pop-cyan">
              艺术品
            </Button>
            <Button variant="ghost" className="font-comic font-bold text-comic-black hover:text-pop-purple">
              配饰
            </Button>
          </nav>

          {/* Cart and Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="comic" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-pop-pink text-comic-white text-xs font-pop w-6 h-6 rounded-full flex items-center justify-center border-2 border-comic-black">
                3
              </span>
            </Button>
            <Button variant="pop" size="icon" className="lg:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PopHeader;