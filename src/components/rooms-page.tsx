"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const rooms = [
  {
    name: 'Deluxe Room',
    description: 'A spacious room with a king-sized bed, a stunning city view, and a modern bathroom.',
    price: '5000',
    imageUrl: 'https://picsum.photos/600/400?random=1',
    amenities: ['Wi-Fi', 'AC', 'TV', 'Free Breakfast'],
  },
  {
    name: 'Suite',
    description: 'A luxurious suite with a separate living area, a private balcony, and a Jacuzzi.',
    price: '10000',
    imageUrl: 'https://picsum.photos/600/400?random=2',
    amenities: ['Wi-Fi', 'AC', 'TV', 'Free Breakfast', 'Mini Bar'],
  },
  {
    name: 'Standard Room',
    description: 'A comfortable room with a queen-sized bed and all the essential amenities.',
    price: '3000',
    imageUrl: 'https://picsum.photos/600/400?random=3',
    amenities: ['Wi-Fi', 'AC', 'TV'],
  },
];

export function RoomsPage() {
  return (
    <div className="animate-fade-in-up">
      <h2 className="font-headline text-3xl font-bold mb-6 border-b-2 border-primary/20 pb-2">Our Rooms</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <Card key={room.name} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="relative h-60 w-full">
              <Image src={room.imageUrl} alt={room.name} layout="fill" objectFit="cover" />
            </div>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <CardTitle className="font-headline text-xl text-primary">{room.name}</CardTitle>
                <p className="text-lg font-semibold menu-price whitespace-nowrap">₹{room.price}/night</p>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col justify-between flex-grow pt-0">
              <div>
                <CardDescription>{room.description}</CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {room.amenities.map((amenity) => (
                    <Badge key={amenity} variant="secondary">{amenity}</Badge>
                  ))}
                </div>
              </div>
              <Button className="mt-6 w-full">Book Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
