import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Templates from './pages/Templates';
import Bundles from './pages/Bundles';
import About from './pages/About';
import Support from './pages/Support';
import License from './pages/License';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';
import DesignSystem from './pages/DesignSystem';
import { ThemeProvider } from './context/ThemeContext';
import { WishlistProvider } from './context/WishlistContext';

export default function App() {
  return (
    <ThemeProvider>
      <WishlistProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/templates" element={<Templates />} />
                <Route path="/bundles" element={<Bundles />} />
                <Route path="/about" element={<About />} />
                <Route path="/support" element={<Support />} />
                <Route path="/license" element={<License />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/design-system" element={<DesignSystem />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            {/* Floating Scroll To Top Button */}
            <ScrollToTop />
            <Toaster position="bottom-right" />
          </div>
        </BrowserRouter>
      </WishlistProvider>
    </ThemeProvider>
  );
}
