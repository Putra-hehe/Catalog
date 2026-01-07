import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Product } from '../data/products';
import { products } from '../data/products';

/**
 * WishlistContext manages a list of product IDs representing the user's
 * wishlist. It exposes functions to add or remove items and computes
 * the corresponding product objects on demand. The list is stored in
 * localStorage so that the wishlist persists across sessions.
 */
interface WishlistContextValue {
  /** Array of full product objects in the wishlist */
  wishlist: Product[];
  /**
   * Add a product to the wishlist. If the product is already present
   * it is not added again.
   */
  addToWishlist: (product: Product) => void;
  /** Remove a product from the wishlist by its ID */
  removeFromWishlist: (productId: string) => void;
}

const WishlistContext = createContext<WishlistContextValue | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialise from localStorage or start with an empty list
  const [ids, setIds] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('wishlist');
        if (stored) {
          return JSON.parse(stored);
        }
      } catch {
        // fallthrough
      }
    }
    return [];
  });

  // Persist whenever IDs change
  useEffect(() => {
    try {
      localStorage.setItem('wishlist', JSON.stringify(ids));
    } catch {
      /* no-op on SSR */
    }
  }, [ids]);

  const addToWishlist = (product: Product) => {
    setIds((prev) => {
      if (prev.includes(product.id)) return prev;
      return [...prev, product.id];
    });
  };

  const removeFromWishlist = (productId: string) => {
    setIds((prev) => prev.filter((id) => id !== productId));
  };

  // Compute full product objects for the wishlist. Only include products
  // that still exist in the catalog to guard against stale IDs.
  const wishlist = products.filter((p) => ids.includes(p.id));

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

/**
 * Hook to access the current wishlist and modification functions.
 */
export function useWishlist(): WishlistContextValue {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}