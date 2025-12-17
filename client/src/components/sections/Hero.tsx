import { motion } from "framer-motion";
import { ArrowRight, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import heroBg from "@assets/generated_images/dark_abstract_tech_background_with_blue_glowing_lines.png";

export default function Hero() {
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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

      <div className="container mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - About Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6 tracking-wide w-fit">
              FULL STACK DEVELOPER
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tighter mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Saiteja</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
              Aspiring Software Developer with strong foundations in Python, C++, backend engineering, and scalable system design. Passionate about solving real-world problems using clean engineering and efficient architecture.
            </p>

            <div className="space-y-3 mb-8 text-sm text-muted-foreground">
              <p>📧 <strong>Email:</strong> saitejareddynamala@gmail.com</p>
              <p>📱 <strong>Phone:</strong> +91-7989738432</p>
              <p>🎓 <strong>Education:</strong> B.Tech CSE, IIIT Jabalpur (2023-2027)</p>
              <p>💻 <strong>Expertise:</strong> MERN Stack, REST APIs, Database Design</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
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
          </motion.div>

          {/* Right Side - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-blue-600/30 rounded-2xl blur-2xl"></div>
              
              {/* Photo Container */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-1 overflow-hidden shadow-2xl aspect-square">
                {profilePhoto ? (
                  <img 
                    src={profilePhoto} 
                    alt="Profile" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-secondary/40 to-secondary/10 rounded-xl flex flex-col items-center justify-center">
                    <Upload className="w-16 h-16 text-muted-foreground/50 mb-4" />
                    <p className="text-muted-foreground text-center text-sm">Add Your Profile Photo</p>
                  </div>
                )}
              </div>

              {/* Upload Button */}
              <label className="mt-6 flex items-center justify-center cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
                <Button 
                  variant="outline" 
                  className="border-white/20 hover:bg-white/10 transition-all duration-300"
                  asChild
                >
                  <span className="cursor-pointer">
                    <Upload className="mr-2 h-4 w-4" />
                    {profilePhoto ? "Change Photo" : "Upload Photo"}
                  </span>
                </Button>
              </label>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
        <span className="text-sm tracking-widest uppercase opacity-50">Scroll Down</span>
      </div>
    </section>
  );
}
