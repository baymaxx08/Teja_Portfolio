import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResumePage() {
  return (
    <Layout>
      <section className="py-12 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="text-center mb-4">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">My Resume</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A detailed overview of my experience, education, and technical expertise.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="/resume.pdf" download="Resume_Saiteja_Reddy.pdf">
              <Button size="lg" className="bg-primary text-black hover:bg-white hover:text-black">
                <Download className="mr-2 h-4 w-4" /> Download PDF
              </Button>
            </a>
          </div>

          <div className="w-full max-w-5xl aspect-[1/1.4] bg-white/5 rounded-lg border border-white/10 overflow-hidden shadow-2xl">
            <iframe 
              src="/resume.pdf" 
              className="w-full h-full"
              title="Resume Preview"
            />
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}
