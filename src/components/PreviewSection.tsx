import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const thumbnailExamples = [
  {
    title: "Gaming",
    color: "bg-purple-500",
  },
  {
    title: "Tech Review",
    color: "bg-blue-500",
  },
  {
    title: "Tutorials",
    color: "bg-green-500",
  },
  {
    title: "Vlogs",
    color: "bg-orange-500",
  }
];

const PreviewSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === thumbnailExamples.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? thumbnailExamples.length - 1 : prev - 1));
  };

  return (
    <section id="preview" className="py-20 md:py-32 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 animate-fade-up">
            Thumbnails That <span className="text-blue-600">Get Clicked</span>
          </h2>
          <p className="text-lg text-slate-600 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Browse through examples of stunning thumbnails created with our editor
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Carousel controls */}
          <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-10 w-10 rounded-full bg-white shadow-lg hover:bg-gray-100"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-10 w-10 rounded-full bg-white shadow-lg hover:bg-gray-100"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          
          {/* Carousel */}
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {thumbnailExamples.map((example, index) => (
                <div key={index} className="min-w-full">
                  <div className="aspect-video relative overflow-hidden">
                    <div className={`absolute inset-0 ${example.color} flex items-center justify-center`}>
                      <div className="text-white text-4xl font-display font-bold">
                        {example.title} Thumbnail
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {thumbnailExamples.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index ? "w-8 bg-blue-600" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;