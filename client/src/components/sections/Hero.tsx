import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/dark_abstract_tech_background_with_blue_glowing_lines.png";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background z-10" />
        <img 
          src={heroBg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6 tracking-wide">
            FULL STACK DEVELOPER
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tighter mb-6"
        >
          Building Digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            Experiences
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
        >
          I am a passionate MERN Stack developer dedicated to crafting scalable, 
          high-performance web applications. With a keen eye for design and 
          a strong technical foundation, I turn complex problems into 
          elegant solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#projects">
            <Button size="lg" className="bg-primary text-black hover:bg-white hover:text-black transition-all duration-300 text-base px-8 py-6">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <a href="#contact">
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 transition-all duration-300 text-base px-8 py-6">
              Contact Me
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
        <span className="text-sm tracking-widest uppercase opacity-50">Scroll Down</span>
      </div>
    </section>
  );
}
