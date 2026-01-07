import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Button from './Button';
import ThemeToggle from './ThemeToggle';
import WishlistMenu from './WishlistMenu';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productCategories = [
    { name: 'Templates', desc: 'Ready-to-use layouts', link: '/templates', popular: true },
    { name: 'UI Kits', desc: 'Component libraries', link: '/products?category=ui-kits' },
    { name: 'Code Tools', desc: 'Developer utilities', link: '/products?category=code' },
    { name: 'Notion Templates', desc: 'Productivity systems', link: '/products?category=notion' },
    { name: 'Digital Assets', desc: 'Icons, fonts & more', link: '/products?category=assets' },
  ];

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products', hasDropdown: true },
    { name: 'Templates', href: '/templates' },
    { name: 'Bundles', href: '/bundles' },
    { name: 'About', href: '/about' },
    { name: 'Support', href: '/support' },
  ];

  return (
    <motion.nav
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-sm' : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">R</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-semibold text-lg">Global Creator Studio</span>
              <p className="text-xs text-muted-foreground">by Rizky Saputra Ramadhan</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                    className="relative"
                  >
                    <button
                      className={cn(
                        'flex items-center gap-1 py-2 transition-colors',
                        location.pathname === item.href ? 'text-primary' : 'text-foreground hover:text-primary'
                      )}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {isProductsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-72 bg-background border border-border rounded-2xl shadow-lg p-4"
                        >
                          {productCategories.map((category) => (
                            <Link
                              key={category.name}
                              to={category.link}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-accent transition-colors group"
                            >
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <span className="font-medium group-hover:text-primary transition-colors">
                                    {category.name}
                                  </span>
                                  {category.popular && (
                                    <span className="text-xs px-2 py-0.5 bg-primary text-primary-foreground rounded-full">
                                      Popular
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-muted-foreground mt-0.5">{category.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      'py-2 transition-colors',
                      location.pathname === item.href ? 'text-primary' : 'text-foreground hover:text-primary'
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          {/* Utility actions: theme toggle, wishlist menu and call-to-actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Toggle between light/dark modes */}
            <ThemeToggle />
            {/* Wishlist icon with dropdown */}
            <WishlistMenu />
            {/* Existing call-to-action buttons */}
            <Button variant="ghost" size="sm">
              Get Updates
            </Button>
            <Button size="sm">Get Free Pack</Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl hover:bg-accent transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                {/* Provide utilities in mobile menu as well */}
                <div className="flex gap-3 mb-4">
                  <ThemeToggle />
                  <WishlistMenu />
                </div>
                <Button variant="ghost" className="w-full">
                  Get Updates
                </Button>
                <Button className="w-full">Get Free Pack</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
