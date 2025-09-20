import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Star } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  isNew?: boolean;
  isHot?: boolean;
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  originalPrice, 
  image, 
  rating, 
  isNew, 
  isHot 
}: ProductCardProps) => {
  return (
    <div className="pop-frame bg-comic-white p-4 group cursor-pointer">
      <div className="relative">
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-lg bg-gray-100 mb-4 halftone">
          <img 
            src={image} 
            alt={name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {isNew && (
              <Badge className="bg-pop-lime text-comic-black font-pop text-xs border-2 border-comic-black transform rotate-3">
                NEW!
              </Badge>
            )}
            {isHot && (
              <Badge className="bg-pop-orange text-comic-white font-pop text-xs border-2 border-comic-black transform -rotate-3">
                HOT!
              </Badge>
            )}
          </div>

          {/* Favorite Button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="absolute top-2 right-2 bg-comic-white/80 hover:bg-pop-pink hover:text-comic-white border-2 border-comic-black"
          >
            <Heart className="w-4 h-4" />
          </Button>

          {/* Quick Add Overlay */}
          <div className="absolute inset-0 bg-comic-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button variant="pop" size="sm">
              <ShoppingCart className="w-4 h-4 mr-2" />
              快速购买
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <h3 className="font-comic font-bold text-comic-black text-lg group-hover:text-pop-orange transition-colors">
            {name}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < rating ? 'text-pop-yellow fill-current' : 'text-gray-300'}`} 
              />
            ))}
            <span className="text-sm text-gray-600 ml-2">({rating}.0)</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-pop text-pop-orange">
              ¥{price}
            </span>
            {originalPrice && (
              <span className="text-lg text-gray-500 line-through font-comic">
                ¥{originalPrice}
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <Button 
            variant="comic" 
            className="w-full mt-3 bg-pop-cyan hover:bg-pop-purple text-comic-black hover:text-comic-white border-2 border-comic-black"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            加入购物车
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;