import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, Download, Tag } from 'lucide-react';
import { Product } from '../data/products';
import { cn } from '../lib/utils';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/products/${product.id}`}>
      {/*
       * Add a subtle 3D tilt effect on hover by rotating the card around
       * the X and Y axes. A perspective is applied via inline style so
       * that the 3D transform has depth. The card also continues to
       * translate upward slightly on hover for a floaty feel. This
       * animation is powered by the motion library.
       */}
      <motion.div
        whileHover={{ y: -8, rotateX: 3, rotateY: -3, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{ perspective: 1000 }}
        className="group relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50"
      >
        {/* Image */}
        <div className="relative aspect-video overflow-hidden bg-accent">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Badges */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            {product.isNew && (
              <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">New</span>
            )}
            {product.isFree && (
              <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full">Free</span>
            )}
          </div>
          
          {/* Quick Preview Button - shows on hover */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <button className="w-full py-2 bg-white text-black rounded-xl text-sm font-medium">
              Quick Preview
            </button>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-semibold mb-2 line-clamp-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{product.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {product.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="px-2 py-1 bg-accent text-xs rounded-lg">
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              {product.rating && (
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  <span>{product.rating}</span>
                </div>
              )}
              {product.downloads && (
                <div className="flex items-center gap-1">
                  <Download className="w-3.5 h-3.5" />
                  <span>{product.downloads.toLocaleString()}</span>
                </div>
              )}
            </div>
            <div className="text-right">
              {product.isFree ? (
                <span className="font-semibold text-green-600">Free</span>
              ) : (
                <span className="font-semibold">${product.price}</span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
