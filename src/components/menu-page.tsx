"use client";

import { useState, useMemo, useEffect, useRef } from 'react';
import type { MenuCategory, MenuItem } from '@/lib/menu-data';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { NonVegIcon, VegIcon } from '@/components/icons';
import { Search, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { RoomsPage } from './rooms-page';

type ViewType = 'menu' | 'rooms';
type FilterType = 'all' | 'veg' | 'non-veg';

export function MenuPage({ menuData }: { menuData: MenuCategory[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>(menuData[0]?.id || '');
  const [filterType, setFilterType] = useState<FilterType>('all');
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const navContainerRef = useRef<HTMLDivElement>(null);
  const navItemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [navHeight, setNavHeight] = useState(0);
  const isScrollingToCategory = useRef(false);
  const [activeView, setActiveView] = useState<ViewType>('menu');

  useEffect(() => {
    const updateHeights = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight);
      }
    };
    updateHeights();
    window.addEventListener('resize', updateHeights);
    return () => window.removeEventListener('resize', updateHeights);
  }, []);

  useEffect(() => {
    if (activeView !== 'menu') return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingToCategory.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { rootMargin: `-${headerHeight + navHeight}px 0px -${window.innerHeight - (headerHeight + navHeight) - 1}px 0px`, threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
        Object.values(sectionRefs.current).forEach((ref) => {
            if (ref) observer.unobserve(ref);
        });
    };
  }, [menuData, headerHeight, navHeight, activeView]);

  useEffect(() => {
    if (activeView !== 'menu') return;
    const activeNavItem = navItemRefs.current[activeCategory];
    if (activeNavItem && navContainerRef.current) {
      const container = navContainerRef.current;
      const { offsetLeft, offsetWidth } = activeNavItem;
      const { scrollLeft, clientWidth } = container;

      // Check if the active item is not fully visible
      const isVisible = offsetLeft >= scrollLeft && offsetLeft + offsetWidth <= scrollLeft + clientWidth;
      
      if (!isVisible) {
        // Scroll to the center of the active item
        const scrollOffset = offsetLeft + offsetWidth / 2 - clientWidth / 2;
        container.scrollTo({
          left: scrollOffset,
          behavior: 'smooth',
        });
      }
    }
  }, [activeCategory, activeView]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const filteredMenu = useMemo(() => {
    if (activeView !== 'menu') return [];
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

  }, [searchQuery, menuData, filterType, activeView]);

  const visibleCategories = useMemo(() => menuData.filter(category => {
    if (filterType === 'all') return true;
    return category.items.some(item => item.type === filterType);
  }), [menuData, filterType]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleCategoryClick = (e: React.MouseEvent<HTMLAnchorElement>, categoryId: string) => {
    e.preventDefault();
    isScrollingToCategory.current = true;
    setActiveCategory(categoryId);
    
    const targetElement = document.getElementById(categoryId);
    if (targetElement) {
      const yOffset = - (headerHeight + navHeight); 
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});

      // Use a timeout to reset the flag after scrolling is likely complete.
      setTimeout(() => {
        isScrollingToCategory.current = false;
      }, 1000); // 1s is usually enough for smooth scroll
    }
  }


  return (
    <div className="min-h-screen bg-background text-foreground">
      <header ref={headerRef} className="fixed top-0 left-0 right-0 z-20 bg-background shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 py-2 md:flex-row md:flex-wrap">
              <div className="flex flex-shrink-0 items-center text-center">
                  <Image src="/bg.png" alt="Bombay Darbar Logo" width={60} height={60} className="mr-4 h-16 w-16"/>
                  <div className="flex flex-col">
                      <h1 className="font-headline text-3xl font-bold text-primary">Bombay Darbar</h1>
                      <span className="font-headline text-lg -mt-1 text-center">Hotel &amp; Restaurant</span>
                  </div>
              </div>
              <div className="flex w-full flex-col items-center gap-4 md:w-auto md:flex-row md:justify-end">
                <div className="veg-nonveg-toggle toggle-group">
                  <button id="all-btn" onClick={() => { setActiveView('menu'); setFilterType('all'); }} className={cn('toggle-option', {'active': activeView === 'menu' && filterType === 'all'})}>All</button>
                  <button id="veg-btn" onClick={() => { setActiveView('menu'); setFilterType('veg'); }} className={cn('toggle-option', {'active': activeView === 'menu' && filterType === 'veg'})}>Veg</button>
                  <button id="nonveg-btn" onClick={() => { setActiveView('menu'); setFilterType('non-veg'); }} className={cn('toggle-option non-veg', {'active': activeView === 'menu' && filterType === 'non-veg'})}>Non-Veg</button>
                  <button onClick={() => setActiveView('rooms')} className={cn('toggle-option', {'active': activeView === 'rooms'})}>Rooms</button>
                </div>
              </div>
              <div className="relative w-full md:w-auto md:flex-grow md:max-w-sm md:ml-auto">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                      type="search"
                      placeholder="Search..."
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                  />
              </div>
          </div>
        </div>
      </header>

      {activeView === 'menu' && (
        <nav ref={navRef} className="sticky z-20 border-b bg-background/90 backdrop-blur-sm" style={{ top: `${headerHeight}px` }}>
          <div className="container mx-auto overflow-x-auto px-4" ref={navContainerRef}>
            <div className="flex items-center justify-start md:justify-center">
            {visibleCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                ref={(el) => (navItemRefs.current[category.id] = el)}
                onClick={(e) => handleCategoryClick(e, category.id)}
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
      )}

      <main className="container mx-auto px-4" style={{ paddingTop: `${(activeView === 'menu' ? headerHeight + navHeight : headerHeight) + 32}px` }}>
        {activeView === 'menu' ? (
          <>
            {filteredMenu.length > 0 ? (
              <div className="space-y-12">
                {filteredMenu.map((category) => (
                  <section
                    key={category.id}
                    id={category.id}
                    ref={(el) => (sectionRefs.current[category.id] = el)}
                    className="animate-fade-in-up"
                    style={{ scrollMarginTop: `${headerHeight + navHeight}px` }}
                  >
                    <h2 className="font-headline text-3xl font-bold mb-6 border-b-2 border-primary/20 pb-2">{category.name}</h2>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {category.items.map((item) => (
                        <Card key={item.name} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in">
                          <CardHeader>
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex items-center gap-2 flex-grow flex-wrap">
                                <CardTitle className="font-headline text-lg text-primary">
                                  {item.name}
                                </CardTitle>
                                {item.type === 'veg' ? <VegIcon /> : <NonVegIcon />}
                              </div>
                              <p className="text-lg font-semibold menu-price whitespace-nowrap">₹{item.price}</p>
                            </div>
                          </CardHeader>
                          <CardContent className="flex flex-col justify-between flex-grow pt-0">
                            <div>
                              <CardDescription>{item.description}</CardDescription>
                            </div>
                            {item.popular && (
                                <div className="pt-4">
                                    <Badge variant="secondary">Popular</Badge>
                                </div>
                            )}
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
          </>
        ) : (
          <RoomsPage />
        )}
      </main>
      <footer className="mt-auto border-t bg-card py-6">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bombay Darbar. All rights reserved.</p>
        </div>
      </footer>
      {showScrollToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 h-12 w-12 rounded-full shadow-lg"
          size="icon"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}
