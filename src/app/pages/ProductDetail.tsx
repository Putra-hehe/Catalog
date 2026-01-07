import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, Star, Clock, Package, Check } from 'lucide-react';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import { getProductById, products } from '../data/products';
import { motion } from 'motion/react';
import { useWishlist } from '../context/WishlistContext';
import { toast } from 'sonner';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : null;
  const relatedProducts = products.filter((p) => p.id !== id && p.category === product?.category).slice(0, 3);
  const { addToWishlist, wishlist } = useWishlist();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Link to="/products">
            <Button>Browse Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-foreground">Products</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Back Button */}
        <Link to="/products" className="inline-flex items-center gap-2 mb-8 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Product Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-video rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </motion.div>

            {/* Overview */}
            <div>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-xl text-muted-foreground mb-6">{product.description}</p>
              <div className="flex items-center gap-6 text-sm">
                {product.rating && (
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{product.rating}</span>
                  </div>
                )}
                {product.downloads && (
                  <div className="flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    <span>{product.downloads.toLocaleString()} downloads</span>
                  </div>
                )}
                {product.lastUpdated && (
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>Updated {product.lastUpdated}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-accent rounded-xl text-sm">
                  {tag}
                </span>
              ))}
            </div>

            {/* What's Included */}
            {product.includes && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">What's Included</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {product.includes.map((item) => (
                    <div key={item} className="flex items-start gap-3 p-4 bg-accent rounded-xl">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            {product.techStack && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {product.techStack.map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-primary/10 text-primary rounded-xl">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Purchase Panel */}
          <div>
            <div className="sticky top-24 p-8 bg-card border border-border rounded-3xl shadow-lg space-y-6">
              <div>
                <div className="text-4xl font-bold mb-2">
                  {product.isFree ? 'Free' : `$${product.price}`}
                </div>
                {product.version && (
                  <div className="text-sm text-muted-foreground">Version {product.version}</div>
                )}
              </div>

              <div className="space-y-3">
                <Button className="w-full" size="lg">
                  {product.isFree ? 'Download Free' : 'Get Product'}
                </Button>
                <Button
                  variant="ghost"
                  className="w-full"
                  onClick={() => {
                    if (product) {
                      addToWishlist(product);
                      toast(`${product.name} added to your wishlist`);
                    }
                  }}
                  disabled={!!wishlist.find((w) => w.id === product.id)}
                >
                  {wishlist.find((w) => w.id === product.id) ? 'In Wishlist' : 'Add to Wishlist'}
                </Button>
              </div>

              <div className="pt-6 border-t border-border space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">License</span>
                  <span className="font-medium">Personal</span>
                </div>
                {product.lastUpdated && (
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Last Updated</span>
                    <span className="font-medium">{product.lastUpdated}</span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Format</span>
                  <span className="font-medium">Digital Download</span>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <div className="flex items-start gap-3 p-4 bg-accent rounded-xl">
                  <Package className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <div className="font-medium mb-1">30-Day Money Back Guarantee</div>
                    <div className="text-muted-foreground">Not satisfied? Get a full refund.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <h2 className="text-3xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
