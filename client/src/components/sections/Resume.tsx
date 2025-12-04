import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Resume</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="bg-card/50 border-white/10 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="p-4 rounded-full bg-primary/10 text-primary">
                  <FileText className="w-8 h-8" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">My Professional Resume</h3>
                  <p className="text-muted-foreground">
                    Download my resume to view my full professional history and qualifications.
                  </p>
                </div>
              </div>
              <Button size="lg" className="bg-primary text-black hover:bg-white hover:text-black transition-all min-w-[160px]">
                <Download className="mr-2 h-4 w-4" /> Download PDF
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
