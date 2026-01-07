import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Package, Sparkles, ChevronDown } from 'lucide-react';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import { getFeaturedProducts, products } from '../data/products';
import * as Accordion from '@radix-ui/react-accordion';

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const soloLevelingProduct = products.find((p) => p.id === 'solo-leveling-productivity');

  const valueProp = [
    {
      icon: Zap,
      title: 'System-First',
      description: 'Built on proven systems, not fleeting motivation. Designed for long-term consistency.',
    },
    {
      icon: Package,
      title: 'Built to Ship',
      description: 'Production-ready code and templates. Start building immediately, no setup overhead.',
    },
    {
      icon: Sparkles,
      title: 'Calm Clarity',
      description: 'Clean, minimal design. No noise, no gimmicks. Just what works.',
    },
  ];

  const faqs = [
    {
      question: 'What format are the digital products?',
      answer: 'Products vary by type: React/TypeScript source code for templates, Notion templates for productivity systems, SVG files for icons, and comprehensive documentation for all products.',
    },
    {
      question: 'Do I get lifetime updates?',
      answer: 'Yes! All premium products include lifetime updates. When we improve a product or add new features, you get them for free.',
    },
    {
      question: 'What is your refund policy?',
      answer: 'We offer a 30-day money-back guarantee. If you are not satisfied with your purchase, contact us for a full refund.',
    },
    {
      question: 'Can I use these for client projects?',
      answer: 'Yes, with a commercial license. Each product clearly states licensing terms. Most products include commercial use rights.',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-accent rounded-full text-sm mb-6">
              crafted by a system builder • musician • writer
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 max-w-4xl mx-auto">
              Curated Digital Systems for{' '}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Structured Progress
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Build better products with systems that work. No chaos, no gimmicks—just clarity, rhythm, and measurable progress.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Button size="lg">
                Browse Products
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="lg">
                Get Free Pack
              </Button>
            </div>
          </motion.div>

          {/* Philosophy Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-20 max-w-3xl mx-auto p-8 bg-accent/50 backdrop-blur rounded-3xl border border-border"
          >
            <p className="text-lg italic text-muted-foreground">
              "Progress is not a burst of motivation. It's a rhythm you return to every day."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground text-lg">Handpicked digital tools for modern builders</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {valueProp.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <prop.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{prop.title}</h3>
                <p className="text-muted-foreground">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solo Leveling Spotlight */}
      {soloLevelingProduct && (
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-block px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm mb-4">
                  Core Product
                </div>
                <h2 className="text-4xl font-bold mb-4">{soloLevelingProduct.name}</h2>
                <p className="text-lg text-muted-foreground mb-6">{soloLevelingProduct.description}</p>
                <p className="text-muted-foreground mb-6">
                  Transform your productivity with a system inspired by RPG mechanics. Level up daily, track progress
                  visually, and build consistency through structured quests and achievements.
                </p>
                <div className="flex items-center gap-4">
                  <Link to={`/products/${soloLevelingProduct.id}`}>
                    <Button size="lg">
                      View Product
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                  <span className="text-2xl font-bold">${soloLevelingProduct.price}</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src={soloLevelingProduct.image}
                  alt={soloLevelingProduct.name}
                  className="w-full rounded-3xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-24 bg-accent/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know</p>
          </div>
          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-2xl overflow-hidden"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-accent transition-colors group">
                    <span className="font-medium">{faq.question}</span>
                    <ChevronDown className="w-5 h-5 transition-transform group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-6 pb-4 text-muted-foreground">
                  {faq.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get notified when new products launch and receive exclusive builder insights
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
