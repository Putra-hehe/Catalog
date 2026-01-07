import { Mail, MessageCircle, FileText } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import Button from '../components/Button';

export default function Support() {
  const faqs = [
    {
      question: 'How do I download my purchased products?',
      answer: 'After purchase, you will receive an email with download links. You can also access your products from your account dashboard.',
    },
    {
      question: 'Can I get a refund?',
      answer: 'Yes, we offer a 30-day money-back guarantee on all products. Contact us if you are not satisfied.',
    },
    {
      question: 'Do you offer technical support?',
      answer: 'Yes, all products include basic technical support via email. Premium products include priority support.',
    },
    {
      question: 'Can I use products for client work?',
      answer: 'Yes, with a commercial license. Most products include commercial use rights by default.',
    },
    {
      question: 'How often are products updated?',
      answer: 'We regularly update products with new features and improvements. All updates are free for existing customers.',
    },
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email within 24 hours',
      action: 'hello@example.com',
      href: 'mailto:hello@example.com',
    },
    {
      icon: MessageCircle,
      title: 'Community',
      description: 'Join our Discord community',
      action: 'Join Discord',
      href: '#',
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Browse comprehensive guides',
      action: 'View Docs',
      href: '#',
    },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Support</h1>
          <p className="text-lg text-muted-foreground">
            We're here to help. Find answers or get in touch.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method) => (
            <div key={method.title} className="p-6 bg-card border border-border rounded-2xl text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <method.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{method.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
              <a href={method.href} className="text-primary hover:underline">
                {method.action}
              </a>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl overflow-hidden"
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

        {/* Contact Form */}
        <div className="mt-16 p-8 bg-accent rounded-3xl">
          <h3 className="text-2xl font-semibold mb-6 text-center">Still have questions?</h3>
          <form className="space-y-4 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <textarea
              placeholder="Your message"
              rows={4}
              className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
            <Button className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
