"use client";

import { useState, useMemo, useEffect, useRef } from 'react';
import type { MenuCategory, MenuItem } from '@/lib/menu-data';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { NonVegIcon, VegIcon } from '@/components/icons';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

type FilterType = 'all' | 'veg' | 'non-veg';

export function MenuPage({ menuData }: { menuData: MenuCategory[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>(menuData[0]?.id || '');
  const [filterType, setFilterType] = useState<FilterType>('all');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [menuData]);


  const filteredMenu = useMemo(() => {
    let menuToFilter = menuData;

    const filterBySearch = (categories: MenuCategory[]) => {
      if (!searchQuery) return categories;
      const lowercasedQuery = searchQuery.toLowerCase();
      
      return categories.map(category => {
        const filteredItems = category.items.filter(item => 
          item.name.toLowerCase().includes(lowercasedQuery) || 
          item.description.toLowerCase().includes(lowercasedQuery)
        );
        return { ...category, items: filteredItems };
      }).filter(category => category.items.length > 0);
    };

    const filterByVegNonVeg = (categories: MenuCategory[]) => {
        if (filterType === 'all') return categories;
        
        return categories.map(category => {
            const filteredItems = category.items.filter(item => item.type === filterType);
            return { ...category, items: filteredItems };
        }).filter(category => category.items.length > 0);
    };
    
    menuToFilter = filterByVegNonVeg(menuToFilter);
    menuToFilter = filterBySearch(menuToFilter);

    return menuToFilter;

  }, [searchQuery, menuData, filterType]);

  const visibleCategories = useMemo(() => menuData.filter(category => {
    if (filterType === 'all') return true;
    return category.items.some(item => item.type === filterType);
  }), [menuData, filterType]);


  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 bg-background/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 pb-2 md:pb-0">
          <div className="flex h-20 items-center justify-between gap-4">
              <div className="text-center md:text-left">
                  <h1 className="font-headline text-3xl font-bold text-accent md:text-4xl">Bombay Darbar</h1>
                  <p className="hidden text-sm text-muted-foreground md:block">Authentic Indian Cuisine</p>
              </div>
              <div className="hidden flex-1 items-center justify-end gap-4 md:flex">
                <div className="veg-nonveg-toggle">
                  <button id="all-btn" onClick={() => setFilterType('all')} className={cn('toggle-option', {'active': filterType === 'all'})}>All</button>
                  <button id="veg-btn" onClick={() => setFilterType('veg')} className={cn('toggle-option', {'active': filterType === 'veg'})}>Veg</button>
                  <button id="nonveg-btn" onClick={() => setFilterType('non-veg')} className={cn('toggle-option', {'active': filterType === 'non-veg'})}>Non-Veg</button>
                </div>
                <div className="relative w-full max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search the menu..."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
              </div>
          </div>
          <div className="flex flex-col items-center gap-4 md:hidden">
            <div className="veg-nonveg-toggle">
              <button id="all-btn" onClick={() => setFilterType('all')} className={cn('toggle-option', {'active': filterType === 'all'})}>All</button>
              <button id="veg-btn" onClick={() => setFilterType('veg')} className={cn('toggle-option', {'active': filterType === 'veg'})}>Veg</button>
              <button id="nonveg-btn" onClick={() => setFilterType('non-veg')} className={cn('toggle-option', {'active': filterType === 'non-veg'})}>Non-Veg</button>
            </div>
            <div className="relative w-full max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search the menu..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
          </div>
        </div>
      </header>

      <nav className="sticky top-20 z-20 border-b bg-background/90 backdrop-blur-sm">
        <div className="container mx-auto overflow-x-auto px-4">
          <div className="flex items-center justify-start md:justify-center">
          {visibleCategories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(category.id)?.scrollIntoView({ behavior: 'smooth' });
                setActiveCategory(category.id);
              }}
              className={cn(
                "whitespace-nowrap px-4 py-3 text-sm font-medium transition-colors duration-300",
                activeCategory === category.id
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-muted-foreground hover:text-primary'
              )}
            >
              {category.name}
            </a>
          ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {filteredMenu.length > 0 ? (
          <div className="space-y-12">
            {filteredMenu.map((category) => (
              <section
                key={category.id}
                id={category.id}
                ref={(el) => (sectionRefs.current[category.id] = el)}
                className="animate-fade-in"
              >
                <h2 className="font-headline text-3xl font-bold mb-6 border-b-2 border-primary/20 pb-2">{category.name}</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item) => (
                    <Card key={item.name} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                      <CardHeader className="flex-row items-start justify-between gap-4">
                        <div className="space-y-1.5">
                            <CardTitle className="font-headline text-xl">{item.name}</CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                        </div>
                        {item.type === 'veg' ? <VegIcon /> : <NonVegIcon />}
                      </CardHeader>
                      <CardContent className="flex flex-col-reverse justify-between flex-grow">
                        <div className="flex items-center justify-between pt-4">
                          <p className="text-lg font-semibold menu-price">₹{item.price}</p>
                          {item.popular && <Badge variant="secondary">Popular</Badge>}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">No menu items found for &quot;{searchQuery}&quot;.</p>
          </div>
        )}
      </main>
      <footer className="mt-auto border-t bg-secondary/50 py-6">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bombay Darbar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
