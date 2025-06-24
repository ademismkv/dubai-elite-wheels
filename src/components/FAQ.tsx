
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What are the minimum requirements to reserve a vehicle?",
      answer: "Minimum age of 25, valid international driving license, passport, and security deposit. Our concierge will verify all requirements during consultation."
    },
    {
      question: "Do you provide chauffeur services?",
      answer: "Yes, we offer professional chauffeurs trained in luxury service and familiar with Dubai's premium destinations. Available 24/7 with advance booking."
    },
    {
      question: "What is included in your premium add-on services?",
      answer: "Rose arrangements, Dom Pérignon champagne, airport transfers, red carpet service, personal concierge, and private photography sessions."
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend 48-72 hours for guaranteed availability. Last-minute requests are accommodated based on fleet availability."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Cancellations made 24+ hours in advance receive full refund. Within 24 hours, 50% cancellation fee applies. No refund for no-shows."
    },
    {
      question: "Do you deliver vehicles outside Dubai?",
      answer: "Yes, we provide delivery throughout the UAE including Abu Dhabi, Sharjah, and other emirates. Additional delivery fees apply for locations outside Dubai."
    }
  ];

  return (
    <section className="section-padding bg-white text-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="heading-display text-6xl md:text-7xl text-black mb-8">
            FREQUENTLY ASKED
          </h2>
          <div className="w-24 h-px bg-black/30 mx-auto" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-b border-black/10 last:border-b-0"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <span className="heading-luxury text-xl md:text-2xl text-black tracking-wide pr-8">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`text-black/40 transition-transform duration-500 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ${
                openItems.includes(index) ? 'max-h-96 pb-8' : 'max-h-0'
              }`}>
                <p className="text-luxury text-black/60 leading-relaxed text-lg">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
