import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Morgan",
    role: "Gaming Content Creator",
    avatar: "AM",
    content: "Since using this thumbnail editor, my CTR has increased by 40%. The templates and customization options are perfect for my gaming channel.",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    role: "Tech Reviewer",
    avatar: "SJ",
    content: "I used to spend hours in Photoshop creating thumbnails. Now I can make even better ones in just minutes. Absolute game changer!",
    rating: 5
  },
  {
    name: "Mark Williams",
    role: "Tutorial Creator",
    avatar: "MW",
    content: "The text effects and stickers help my tutorial thumbnails stand out. My subscribers always comment on how professional they look.",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-[0.03] -z-10"></div>
      
      <div className="container px-4 mx-auto">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 animate-fade-up">
            Loved by <span className="text-blue-600">Content Creators</span>
          </h2>
          <p className="text-lg text-slate-600 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Join thousands of YouTubers who are growing their channels with our thumbnail editor
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all hover:shadow-xl animate-fade-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-medium">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-display font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
              </div>
              <p className="text-slate-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;