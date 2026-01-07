import Button from '../components/Button';

export default function DesignSystem() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-4">Design System</h1>
        <p className="text-lg text-muted-foreground mb-16">
          Complete component library and design tokens
        </p>

        {/* Colors */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['primary', 'secondary', 'accent', 'muted', 'destructive'].map((color) => (
              <div key={color} className="space-y-2">
                <div className={`h-24 rounded-2xl bg-${color}`} />
                <p className="text-sm font-medium capitalize">{color}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Typography</h2>
          <div className="space-y-4">
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <p>Body text - The quick brown fox jumps over the lazy dog</p>
            <p className="text-muted-foreground">Muted text - The quick brown fox jumps over the lazy dog</p>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
            <Button isLoading>Loading</Button>
            <Button disabled>Disabled</Button>
          </div>
        </section>

        {/* Spacing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Spacing (8pt Grid)</h2>
          <div className="space-y-2">
            {[1, 2, 3, 4, 6, 8, 12, 16, 24].map((space) => (
              <div key={space} className="flex items-center gap-4">
                <span className="w-12 text-sm text-muted-foreground">{space * 8}px</span>
                <div className="h-8 bg-primary rounded" style={{ width: `${space * 8}px` }} />
              </div>
            ))}
          </div>
        </section>

        {/* Radius */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Border Radius</h2>
          <div className="flex flex-wrap gap-8">
            {[
              { name: 'sm', value: '8px' },
              { name: 'md', value: '12px' },
              { name: 'lg', value: '16px' },
              { name: 'xl', value: '24px' },
            ].map((radius) => (
              <div key={radius.name} className="text-center">
                <div
                  className="w-24 h-24 bg-primary mb-2"
                  style={{ borderRadius: radius.value }}
                />
                <p className="text-sm font-medium">{radius.name}</p>
                <p className="text-xs text-muted-foreground">{radius.value}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
