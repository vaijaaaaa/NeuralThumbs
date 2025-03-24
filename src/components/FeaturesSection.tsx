import React from 'react';
import { Image, Palette, Text, Download, Star } from 'lucide-react';

const features = [
  {
    icon: <Image className="h-8 w-8 text-blue-600" />,
    title: "Image Upload",
    description: "Easily upload your own images or choose from our library of high-quality backgrounds."
  },
  {
    icon: <Palette className="h-8 w-8 text-blue-600" />,
    title: "Background Customization",
    description: "Change colors, add gradients, and apply filters to make your thumbnails pop."
  },
  {
    icon: <Text className="h-8 w-8 text-blue-600" />,
    title: "Text Overlays & Fonts",
    description: "Choose from a wide range of fonts and text effects that grab viewers' attention."
  },
  {
    icon: <Star className="h-8 w-8 text-blue-600" />,
    title: "Stickers & Shapes",
    description: "Add eye-catching elements like arrows, circles, and custom shapes to highlight important info."
  },
  {
    icon: <Download className="h-8 w-8 text-blue-600" />,
    title: "Download in HD",
    description: "Export your thumbnails in perfect quality for YouTube, ready to boost your click-through rate."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-32 relative">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50 to-transparent -z-10"></div>
      
      <div className="container px-4 mx-auto">
        <div className="max-w-xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 animate-fade-up">
            Everything You Need to Create <span className="text-blue-600">Perfect Thumbnails</span>
          </h2>
          <p className="text-lg text-slate-600 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Our intuitive editor makes it easy to create professional-looking thumbnails in minutes, not hours.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;