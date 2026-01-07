import { motion } from 'motion/react';
import ProductCard from '../components/ProductCard';
import { getProductsByCategory } from '../data/products';

export default function Templates() {
  const templates = getProductsByCategory('templates');

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Templates</h1>
          <p className="text-lg text-muted-foreground">
            Ready-to-use templates to speed up your development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {templates.length === 0 && (
          <div className="text-center py-24">
            <p className="text-muted-foreground">No templates available yet</p>
          </div>
        )}
      </div>
    </div>
  );
}
