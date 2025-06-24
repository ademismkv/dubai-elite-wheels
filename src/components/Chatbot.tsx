
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickActions = [
    "Reserve with roses 🌹",
    "Request chauffeur service 🛎️", 
    "Airport pickup 🛫",
    "Same-day booking ⚡"
  ];

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-2xl"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-28 right-8 z-50 w-96 transition-all duration-500 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        <div className="glass-panel rounded-none bg-black/90 border border-white/20 p-8">
          <div className="mb-6">
            <h3 className="heading-luxury text-white text-xl mb-2 tracking-wider">
              CONCIERGE SERVICE
            </h3>
            <p className="text-white/60 text-sm">
              How may we assist with your luxury experience?
            </p>
          </div>

          <div className="space-y-3 mb-6">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => {
                  const message = encodeURIComponent(`Hi, I'm interested in: ${action}`);
                  window.open(`https://wa.me/971501234567?text=${message}`, '_blank');
                }}
                className="w-full text-left p-3 border border-white/20 text-white text-sm hover:bg-white/10 transition-colors duration-300"
              >
                {action}
              </button>
            ))}
          </div>

          <a
            href="https://wa.me/971501234567?text=Hello, I would like to inquire about your luxury car rental services"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-white text-black py-3 text-sm tracking-wider hover:bg-white/90 transition-colors duration-300"
          >
            START WHATSAPP CHAT
          </a>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
