'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, ShoppingCart } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2865&auto=format&fit=crop')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        
        {/* Additional gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 h-full flex items-center">
        <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {/* Badge */}
          <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-none text-xs font-bold tracking-widest px-4 py-1.5">
            FEATURED RELEASE
          </Badge>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent drop-shadow-2xl">
              Cyberpunk 2077:
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
              Phantom Liberty
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl drop-shadow-lg">
            Return to the neon-soaked streets of Night City. Embark on a high-stakes mission of espionage and intrigue to save the NUSA President.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg px-8 py-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Buy Now - $29.99
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white/50 text-white hover:bg-white/10 hover:border-white backdrop-blur-sm font-bold text-lg px-8 py-6 shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Trailer
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-4">
            <div className="space-y-1">
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                9.2
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Rating</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                5M+
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Players</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                100+
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Awards</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 animate-pulse" />
    </section>
  );
};

export default HeroSection;
