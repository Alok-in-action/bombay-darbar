"use client";

import { Wifi, ParkingCircle, Dog, UtensilsCrossed } from 'lucide-react';

export function RoomsPage() {
  const amenities = [
    { icon: Wifi, text: 'Free Wi-Fi connection' },
    { icon: ParkingCircle, text: 'Free parking services' },
    { icon: Dog, text: 'Pet-Friendly premises' },
    { icon: UtensilsCrossed, text: 'On-site dining service' },
  ];

  return (
    <div className="animate-fade-in-up">
      <h2 className="font-headline text-3xl font-bold mb-6 border-b-2 border-primary/20 pb-2">Our Rooms</h2>
      <div className="text-center">
        <h3 className="font-headline text-2xl font-bold text-primary">Luxurious & Flavourish</h3>
        <p className="mt-4 text-muted-foreground max-w-4xl mx-auto text-lg">
          At Bombay Darbar, experience the perfect blend of luxury and culinary excellence. Our elegantly appointed rooms offer a serene escape, while our restaurant serves up a feast of flavors, crafted with the finest ingredients. Whether you're unwinding in style or indulging in a gourmet meal, Bombay Darbar promises a stay that delights all the senses.
        </p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {amenities.map((amenity) => (
            <div key={amenity.text} className="flex flex-col items-center gap-3">
              <amenity.icon className="h-10 w-10 text-primary" />
              <span className="text-sm font-medium text-foreground">{amenity.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
