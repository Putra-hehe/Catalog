import { Lock } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default function Checkout() {
  return (
    <div className="min-h-screen py-24 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-accent flex items-center justify-center">
          <Lock className="w-12 h-12 text-muted-foreground" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Checkout Coming Soon</h1>
        <p className="text-lg text-muted-foreground mb-8">
          We're building a secure checkout experience. Join our waitlist to be notified when it's ready.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-12">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <Button>Join Waitlist</Button>
        </div>
        <Link to="/products">
          <Button variant="ghost">Browse Products</Button>
        </Link>
      </div>
    </div>
  );
}
