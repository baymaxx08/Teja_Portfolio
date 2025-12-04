import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Server, Database } from "lucide-react";

function About() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-lg blur-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80" 
                alt="Coding Environment" 
                className="relative rounded-lg border border-white/10 shadow-2xl w-full object-cover aspect-video"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">About Me</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {personalInfo.summary}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 bg-secondary/30 rounded-lg border border-white/5 text-center">
                <Code2 className="mx-auto mb-2 text-primary" />
                <span className="text-sm font-medium">Frontend Dev</span>
              </div>
              <div className="p-4 bg-secondary/30 rounded-lg border border-white/5 text-center">
                <Server className="mx-auto mb-2 text-primary" />
                <span className="text-sm font-medium">Backend API</span>
              </div>
              <div className="p-4 bg-secondary/30 rounded-lg border border-white/5 text-center">
                <Database className="mx-auto mb-2 text-primary" />
                <span className="text-sm font-medium">Database Design</span>
              </div>
            </div>

            <a href="/contact">
              <Button className="bg-primary text-black hover:bg-white hover:text-black transition-colors">
                Let's Work Together <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
}
