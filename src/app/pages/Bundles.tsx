import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Package, Check } from 'lucide-react';
import Button from '../components/Button';
import { bundles } from '../data/products';

export default function Bundles() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Product Bundles</h1>
          <p className="text-lg text-muted-foreground">
            Save big with curated product bundles
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {bundles.map((bundle, index) => (
            <motion.div
              key={bundle.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-card border border-border rounded-3xl hover:shadow-lg transition-shadow"
            >
              <div className="mb-6">
                <img src={bundle.image} alt={bundle.name} className="w-full h-48 object-cover rounded-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{bundle.name}</h3>
              <p className="text-muted-foreground mb-6">{bundle.description}</p>

              <div className="mb-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold">${bundle.price}</span>
                  <span className="text-muted-foreground line-through">${bundle.price + bundle.savings}</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-medium">
                    Save ${bundle.savings}
                  </span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Package className="w-4 h-4" />
                  <span>{bundle.products.length} products included</span>
                </div>
              </div>

              <Button className="w-full">Get Bundle</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
