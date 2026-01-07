import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useWishlist } from '../context/WishlistContext';

/**
 * A component that displays a heart icon with a badge indicating the
 * number of items in the wishlist. Clicking the heart toggles a
 * dropdown listing each item with its image, name and price along
 * with a remove button. When the wishlist is empty it shows a small
 * message instead. The dropdown uses animations from the motion
 * package for smooth appearance and exit.
 */
export default function WishlistMenu() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Wishlist"
        className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent hover:bg-primary text-foreground hover:text-primary-foreground transition-colors"
      >
        <Heart className="w-5 h-5" />
        {wishlist.length > 0 && (
          <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-xs leading-none bg-primary text-primary-foreground rounded-full">
            {wishlist.length}
          </span>
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-3 w-72 bg-background border border-border rounded-2xl shadow-xl overflow-hidden z-50"
          >
            {wishlist.length === 0 ? (
              <div className="p-4 text-sm text-muted-foreground">Your wishlist is empty.</div>
            ) : (
              <ul className="divide-y divide-border">
                {wishlist.map((item) => (
                  <li key={item.id} className="flex items-start gap-3 p-3 hover:bg-accent transition-colors">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 rounded-md object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <Link
                        to={`/products/${item.id}`}
                        onClick={() => setOpen(false)}
                        className="block font-medium hover:text-primary"
                      >
                        {item.name}
                      </Link>
                      <span className="text-xs text-muted-foreground">
                        {item.isFree ? 'Free' : `$${item.price}`}
                      </span>
                    </div>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      aria-label="Remove"
                      className="p-1 rounded-md hover:bg-destructive/20 text-muted-foreground hover:text-destructive"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}