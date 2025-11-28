'use client';

import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star } from 'lucide-react';

interface GameCardProps {
  title: string;
  image: string;
  rating: number;
  genre: string;
  price: number;
  discount?: number;
  tags?: string[];
}

const GameCard: React.FC<GameCardProps> = ({ title, image, rating, genre, price, discount, tags }) => {
  const discountedPrice = discount ? (price * (1 - discount / 100)).toFixed(2) : price.toFixed(2);

  return (
    <Card className="group relative overflow-hidden border-none bg-gradient-to-br from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-900 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-900/20">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          width={300} 
          height={400} 
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" 
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* Hover Overlay with Button */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
            {tags.map((tag, index) => (
              <Badge 
                key={index} 
                className={`
                  ${tag.toLowerCase() === 'bestseller' ? 'bg-gradient-to-r from-yellow-500 to-orange-500' : ''}
                  ${tag.toLowerCase() === 'new' ? 'bg-gradient-to-r from-green-500 to-emerald-500' : ''}
                  text-white border-none shadow-lg font-bold text-xs
                `}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Discount Badge */}
        {discount && (
          <Badge className="absolute top-3 right-3 bg-gradient-to-r from-red-600 to-pink-600 text-white border-none shadow-lg font-bold text-sm z-10">
            -{discount}%
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400 font-medium">{genre}</span>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
            <span className="text-yellow-500 font-bold">{rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-bold text-lg text-white truncate group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2">
          {discount && (
            <span className="text-gray-500 line-through text-sm">${price.toFixed(2)}</span>
          )}
          <span className="text-white font-bold text-xl bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            ${discountedPrice}
          </span>
        </div>
      </div>

      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 blur-xl" />
      </div>
    </Card>
  );
};

export default GameCard;
