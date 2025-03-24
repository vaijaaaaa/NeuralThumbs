
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 -z-10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 right-[10%] w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-[10%] w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 animate-fade-up">
            Start Creating Stunning Thumbnails Today
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Join thousands of content creators who are boosting their click-through rates with professional thumbnails.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="w-full sm:w-auto rounded-lg bg-white text-blue-700 hover:bg-blue-50 shadow-lg transition-all">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-lg border-white/30 text-white hover:bg-white/10 transition-all">
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
