import { Check } from 'lucide-react';

export default function License() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-4">License & Refund Policy</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Clear terms for using our products
        </p>

        {/* License Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">License Types</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-card border border-border rounded-3xl">
              <h3 className="text-2xl font-semibold mb-4">Personal License</h3>
              <p className="text-muted-foreground mb-6">For personal or internal company projects</p>
              <ul className="space-y-3">
                {['Single developer use', 'Unlimited personal projects', 'Free updates', 'Email support'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-card border border-primary rounded-3xl">
              <h3 className="text-2xl font-semibold mb-4">Commercial License</h3>
              <p className="text-muted-foreground mb-6">For client work and commercial products</p>
              <ul className="space-y-3">
                {['Everything in Personal', 'Use for client projects', 'Resell as part of products', 'Priority support'].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Refund Policy */}
        <div id="refund" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Refund Policy</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-4">
              We offer a 30-day money-back guarantee on all products. If you're not satisfied with your purchase, you can request a full refund within 30 days of purchase.
            </p>
            <h3 className="text-xl font-semibold mb-3">To request a refund:</h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Email us at refunds@example.com</li>
              <li>Include your order number and reason for refund</li>
              <li>We'll process your refund within 5-7 business days</li>
            </ol>
            <p className="text-muted-foreground mt-4">
              No questions asked. We want you to be completely satisfied with your purchase.
            </p>
          </div>
        </div>

        {/* Terms */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Terms of Use</h2>
          <div className="prose max-w-none text-muted-foreground space-y-4">
            <p>
              By purchasing and using our products, you agree to the following terms:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Products are licensed, not sold</li>
              <li>You may not redistribute or resell products as-is</li>
              <li>Attribution is appreciated but not required</li>
              <li>We reserve the right to update these terms at any time</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
