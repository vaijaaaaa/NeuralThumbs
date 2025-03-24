
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50 -z-10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 right-[5%] w-24 h-24 bg-blue-400/10 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-1/4 left-[10%] w-32 h-32 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-8 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
            Professional YouTube Thumbnails in Minutes
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6 animate-fade-up">
            Create <span className="text-blue-600">Stunning</span> YouTube Thumbnails
            <span className="block">That Drive Views</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            The fastest way to design eye-catching thumbnails that boost your click-through rate. No design skills required.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="w-full sm:w-auto rounded-lg bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-lg">
              <Play className="mr-2 h-4 w-4 fill-current" />
              Watch Demo
            </Button>
          </div>
          
          <div className="mt-16 md:mt-24 max-w-4xl w-full animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="relative">
                {/* Editor UI Image Placeholder - Replace with your actual UI mockup */}
                <div className="aspect-video bg-gradient-to-r from-gray-100 to-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-white rounded-lg shadow-md flex items-center justify-center border border-gray-200">
                      <div className="text-gray-400 text-lg font-display">Thumbnail Editor Preview</div>
                    </div>
                  </div>
                </div>
                
                {/* Reflection effect */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 animate-fade-up" style={{ animationDelay: "0.8s" }}>
            {/* Client logos would go here */}
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-8 bg-gray-200 rounded opacity-50"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;