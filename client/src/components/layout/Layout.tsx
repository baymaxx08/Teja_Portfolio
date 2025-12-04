import Navbar from "@/components/layout/Navbar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <footer className="py-8 bg-black text-center text-muted-foreground border-t border-white/10 mt-auto">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Saiteja Reddy Namala. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
