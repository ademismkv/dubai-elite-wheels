
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "CHOOSE",
      description: "Select from our curated collection of automotive masterpieces"
    },
    {
      number: "02", 
      title: "CUSTOMIZE",
      description: "Add premium services: roses, champagne, professional chauffeur"
    },
    {
      number: "03",
      title: "PICKUP",
      description: "White-glove delivery to your location or private collection"
    },
    {
      number: "04",
      title: "ENJOY",
      description: "Experience Dubai like never before in unparalleled luxury"
    }
  ];

  return (
    <section className="section-padding bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="heading-display text-6xl md:text-7xl text-white mb-8 animate-fade-in-up">
            HOW IT WORKS
          </h2>
          <div className="w-24 h-px bg-white/30 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-4 gap-16">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="text-center group animate-fade-in-delayed"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-8">
                <span className="heading-display text-8xl text-white/20 group-hover:text-white/40 transition-colors duration-700">
                  {step.number}
                </span>
              </div>
              
              <h3 className="heading-luxury text-2xl text-white mb-6 tracking-[0.2em]">
                {step.title}
              </h3>
              
              <p className="text-luxury text-white/60 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
              
              <div className="mt-8 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
