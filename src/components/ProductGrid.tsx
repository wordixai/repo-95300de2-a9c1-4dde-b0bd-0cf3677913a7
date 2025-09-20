import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "波普艺术潮T",
      price: 299,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      rating: 5,
      isNew: true,
      isHot: false
    },
    {
      id: 2,
      name: "街头涂鸦卫衣",
      price: 599,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      rating: 4,
      isNew: false,
      isHot: true
    },
    {
      id: 3,
      name: "复古波点连衣裙",
      price: 799,
      originalPrice: 999,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop",
      rating: 5,
      isNew: true,
      isHot: true
    },
    {
      id: 4,
      name: "漫画风帆布鞋",
      price: 399,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
      rating: 4,
      isNew: false,
      isHot: false
    },
    {
      id: 5,
      name: "波普艺术背包",
      price: 199,
      originalPrice: 299,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      rating: 4,
      isNew: true,
      isHot: false
    },
    {
      id: 6,
      name: "霓虹色太阳镜",
      price: 159,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop",
      rating: 5,
      isNew: false,
      isHot: true
    }
  ];

  return (
    <section className="py-16 bg-comic-white relative">
      <div className="dot-pattern absolute inset-0 opacity-5"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <h2 className="text-5xl font-pop text-comic-black text-pop transform -rotate-1">
              热门商品
            </h2>
            <div className="absolute -top-4 -right-4">
              <div className="comic-bubble bg-pop-yellow transform rotate-12 scale-75">
                <span className="font-pop text-sm text-comic-black">HOT!</span>
              </div>
            </div>
          </div>
          
          <p className="text-xl font-comic text-gray-600 mt-4">
            精选最受欢迎的波普风格潮流单品
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="bounce-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="pow" size="pop" className="bg-pop-pink">
            查看更多商品
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;