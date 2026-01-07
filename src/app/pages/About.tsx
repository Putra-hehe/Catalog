import { motion } from 'motion/react';
import { Code, Music, PenTool } from 'lucide-react';

export default function About() {
  const identities = [
    {
      icon: Code,
      title: 'System Builder',
      description: 'Informatics student focused on creating structured, maintainable systems that scale.',
    },
    {
      icon: Music,
      title: 'Musician',
      description: 'Understanding rhythm and flow—consistency beats motivation every time.',
    },
    {
      icon: PenTool,
      title: 'Writer',
      description: 'Clarity over noise. Every word matters, every system has purpose.',
    },
  ];

  const values = [
    'Clarity over noise',
    'System over motivation',
    'Consistency over hype',
    'Depth over virality',
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">About This Studio</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Global Creator Studio by Rizky Saputra Ramadhan—a place where systems, rhythm, and clarity converge
          </p>
        </motion.div>

        {/* Identity Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {identities.map((identity, index) => (
            <motion.div
              key={identity.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-accent rounded-2xl text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                <identity.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{identity.title}</h3>
              <p className="text-muted-foreground">{identity.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="p-8 bg-card border border-border rounded-3xl mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Core Philosophy</h2>
          <p className="text-lg text-muted-foreground text-center mb-8 italic">
            "Progress is not a burst of motivation. It's a rhythm you return to every day."
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((value) => (
              <div key={value} className="flex items-center gap-3 p-4 bg-accent rounded-xl">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span>{value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* What We Avoid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold mb-4">What We Avoid</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Chaos, gimmicks, empty motivation, aggressive marketing, and hype-driven noise. This is a calm, high-trust
            environment for builders who think long-term.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
