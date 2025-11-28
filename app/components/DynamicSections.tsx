'use client';

import React from 'react';
import GameCard from './GameCard';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const DynamicSections = () => {
  const recommendations = [
    { 
      id: 1, 
      title: 'Starfield', 
      image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=600&auto=format&fit=crop', 
      rating: 4.5, 
      genre: 'RPG', 
      price: 69.99, 
      tags: ['Bestseller'] 
    },
    { 
      id: 2, 
      title: "Baldur's Gate 3", 
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600&auto=format&fit=crop', 
      rating: 5, 
      genre: 'RPG', 
      price: 59.99, 
      tags: ['Bestseller'] 
    },
    { 
      id: 3, 
      title: 'Cyberpunk 2077', 
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop', 
      rating: 4, 
      genre: 'Action', 
      price: 59.99, 
      discount: 50 
    },
    { 
      id: 4, 
      title: 'Forza Horizon 5', 
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600&auto=format&fit=crop', 
      rating: 4.8, 
      genre: 'Racing', 
      price: 59.99 
    },
  ];

  const newReleases = [
    { 
      id: 5, 
      title: "Assassin's Creed Mirage", 
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop', 
      rating: 4.2, 
      genre: 'Action', 
      price: 49.99, 
      tags: ['New'] 
    },
    { 
      id: 6, 
      title: 'Spider-Man 2', 
      image: 'https://images.unsplash.com/photo-1531306760863-6d827e1d398c?w=600&auto=format&fit=crop', 
      rating: 4.9, 
      genre: 'Action', 
      price: 69.99, 
      tags: ['New'] 
    },
    { 
      id: 7, 
      title: 'Super Mario Wonder', 
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop', 
      rating: 4.7, 
      genre: 'Platformer', 
      price: 59.99, 
      tags: ['New'] 
    },
    { 
      id: 8, 
      title: 'Alan Wake 2', 
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop', 
      rating: 4.6, 
      genre: 'Horror', 
      price: 59.99, 
      tags: ['New'] 
    },
  ];

  return (
    <div className="container space-y-16 py-12">
      {/* Recommendations Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Recommended for You
          </h2>
          <Button variant="ghost" className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/20">
            See All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recommendations.map(game => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>
      </section>

      {/* New Releases with Filters */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Hot Releases
          </h2>
          
          <Tabs defaultValue="all" className="w-full md:w-auto">
            <TabsList className="grid w-full grid-cols-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800">
              <TabsTrigger value="all" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600">
                All
              </TabsTrigger>
              <TabsTrigger value="action" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600">
                Action
              </TabsTrigger>
              <TabsTrigger value="rpg" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600">
                RPG
              </TabsTrigger>
              <TabsTrigger value="strategy" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600">
                Strategy
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {newReleases.map(game => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>
      </section>

      {/* Collections */}
      <section className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
          Curated Collections
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Indie Collection */}
          <div 
            className="group relative h-64 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-900/30"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent group-hover:from-cyan-900/90 group-hover:via-black/80 transition-all duration-500" />
            
            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-6 space-y-3">
              <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                Best Indie Games
              </h3>
              <Button 
                variant="ghost" 
                className="w-fit text-cyan-400 hover:text-cyan-300 hover:bg-cyan-900/20 px-0 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300"
              >
                Explore
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 blur-2xl" />
            </div>
          </div>

          {/* RPG Collection */}
          <div 
            className="group relative h-64 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-900/30"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&auto=format&fit=crop')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent group-hover:from-purple-900/90 group-hover:via-black/80 transition-all duration-500" />
            
            <div className="relative h-full flex flex-col justify-end p-6 space-y-3">
              <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                Epic RPG Adventures
              </h3>
              <Button 
                variant="ghost" 
                className="w-fit text-purple-400 hover:text-purple-300 hover:bg-purple-900/20 px-0 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300"
              >
                Explore
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-2xl" />
            </div>
          </div>

          {/* VR Collection */}
          <div 
            className="group relative h-64 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-900/30"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&auto=format&fit=crop')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent group-hover:from-green-900/90 group-hover:via-black/80 transition-all duration-500" />
            
            <div className="relative h-full flex flex-col justify-end p-6 space-y-3">
              <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 group-hover:bg-clip-text transition-all duration-300">
                VR Experiences
              </h3>
              <Button 
                variant="ghost" 
                className="w-fit text-green-400 hover:text-green-300 hover:bg-green-900/20 px-0 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300"
              >
                Explore
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DynamicSections;
