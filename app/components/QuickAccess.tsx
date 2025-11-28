'use client';

import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Download, ShoppingCart } from 'lucide-react';

const QuickAccess = () => {
  return (
    <section className="container relative z-20 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Daily Deal Card - Takes 2 columns */}
        <Card className="lg:col-span-2 overflow-hidden border-none bg-gradient-to-br from-orange-900/30 via-red-900/30 to-pink-900/30 backdrop-blur-sm shadow-2xl shadow-orange-900/20">
          <div className="flex flex-col md:flex-row items-stretch h-full">
            {/* Content */}
            <div className="flex-1 p-6 md:p-8 space-y-4 flex flex-col justify-center">
              {/* Header */}
              <div className="flex items-center gap-4">
                <Badge className="bg-gradient-to-r from-orange-600 to-red-600 text-white border-none shadow-lg font-bold">
                  DAILY DEAL
                </Badge>
                <div className="flex items-center gap-2 text-orange-300 font-mono text-lg">
                  <Clock className="h-5 w-5 animate-pulse" />
                  <span className="font-bold">08:45:12</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                Elden Ring
              </h3>

              {/* Price */}
              <div className="flex items-center gap-4">
                <span className="text-2xl text-gray-500 line-through">$59.99</span>
                <span className="text-4xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  $29.99
                </span>
                <Badge className="bg-gradient-to-r from-red-600 to-pink-600 text-white border-none text-lg px-3 py-1 shadow-lg">
                  -50%
                </Badge>
              </div>

              {/* Button */}
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full md:w-auto"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Buy Now
              </Button>
            </div>

            {/* Image */}
            <div className="relative w-full md:w-64 h-48 md:h-auto overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600&auto=format&fit=crop"
                alt="Elden Ring"
                width={400}
                height={300}
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-orange-900/50" />
            </div>
          </div>
        </Card>

        {/* Free to Play Card */}
        <Card className="overflow-hidden border-none bg-gradient-to-br from-green-900/30 via-emerald-900/30 to-teal-900/30 backdrop-blur-sm shadow-2xl shadow-green-900/20">
          <div className="p-6 space-y-6 h-full flex flex-col">
            {/* Header */}
            <div className="space-y-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                Play for Free
              </h3>
              <p className="text-gray-400 text-sm">
                Try the latest demos and free-to-play hits.
              </p>
            </div>

            {/* Demo List */}
            <div className="space-y-3 flex-1">
              {/* Demo Item 1 */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group cursor-pointer border border-white/10 hover:border-green-500/50">
                <div className="relative w-14 h-14 rounded-md overflow-hidden flex-shrink-0 bg-gradient-to-br from-green-600 to-emerald-600">
                  <div className="w-full h-full flex items-center justify-center text-2xl">
                    🎮
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-white truncate group-hover:text-green-400 transition-colors">
                    Hades II
                  </h4>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="h-auto p-0 text-green-400 hover:text-green-300 hover:bg-transparent font-semibold text-xs"
                  >
                    <Download className="mr-1 h-3 w-3" />
                    Download Demo
                  </Button>
                </div>
              </div>

              {/* Demo Item 2 */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group cursor-pointer border border-white/10 hover:border-green-500/50">
                <div className="relative w-14 h-14 rounded-md overflow-hidden flex-shrink-0 bg-gradient-to-br from-teal-600 to-cyan-600">
                  <div className="w-full h-full flex items-center justify-center text-2xl">
                    ⚔️
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-white truncate group-hover:text-green-400 transition-colors">
                    Valorant
                  </h4>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="h-auto p-0 text-green-400 hover:text-green-300 hover:bg-transparent font-semibold text-xs"
                  >
                    <Download className="mr-1 h-3 w-3" />
                    Free to Play
                  </Button>
                </div>
              </div>

              {/* Demo Item 3 */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group cursor-pointer border border-white/10 hover:border-green-500/50">
                <div className="relative w-14 h-14 rounded-md overflow-hidden flex-shrink-0 bg-gradient-to-br from-purple-600 to-indigo-600">
                  <div className="w-full h-full flex items-center justify-center text-2xl">
                    🎯
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-white truncate group-hover:text-green-400 transition-colors">
                    Apex Legends
                  </h4>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="h-auto p-0 text-green-400 hover:text-green-300 hover:bg-transparent font-semibold text-xs"
                  >
                    <Download className="mr-1 h-3 w-3" />
                    Free to Play
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Animated glow effect */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-gradient-to-r from-orange-600/20 via-green-600/20 to-purple-600/20 blur-3xl opacity-50" />
    </section>
  );
};

export default QuickAccess;
