export interface MenuItem {
  name: string;
  description: string;
  price: string;
  type: 'veg' | 'non-veg';
  popular?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: 'appetizers',
    name: 'Appetizers',
    items: [
      { name: 'Vegetable Samosa', description: 'Crispy pastry filled with spiced potatoes and peas.', price: '6.95', type: 'veg', popular: true },
      { name: 'Onion Bhaji', description: 'Thinly sliced onions dipped in chickpea flour batter and fried.', price: '6.95', type: 'veg' },
      { name: 'Paneer Tikka', description: 'Cubes of homemade cheese marinated and cooked in a tandoor.', price: '12.95', type: 'veg' },
      { name: 'Chicken 65', description: 'Spicy, deep-fried chicken bites originating from Chennai.', price: '11.95', type: 'non-veg', popular: true },
      { name: 'Fish Koliwada', description: 'A spicy fried fish snack from the Koli community of Mumbai.', price: '13.95', type: 'non-veg' },
    ],
  },
  {
    id: 'soups',
    name: 'Soups',
    items: [
      { name: 'Mulligatawny Soup', description: 'A traditional Anglo-Indian soup with lentils, vegetables, and spices.', price: '5.95', type: 'veg' },
      { name: 'Tomato Soup', description: 'Creamy tomato soup with a hint of Indian spices.', price: '5.95', type: 'veg' },
      { name: 'Chicken Corn Soup', description: 'A hearty soup with sweet corn and tender chicken.', price: '6.95', type: 'non-veg' },
    ],
  },
  {
    id: 'tandoor',
    name: 'From The Tandoor',
    items: [
      { name: 'Tandoori Chicken', description: 'Chicken marinated in yogurt and spices, roasted in a tandoor.', price: '15.95', type: 'non-veg', popular: true },
      { name: 'Chicken Tikka', description: 'Boneless chicken pieces marinated and baked on skewers.', price: '16.95', type: 'non-veg' },
      { name: 'Lamb Seekh Kebab', description: 'Minced lamb mixed with spices, skewered, and grilled.', price: '17.95', type: 'non-veg' },
      { name: 'Tandoori Shrimp', description: 'Jumbo shrimp marinated in exotic spices and cooked in the tandoor.', price: '19.95', type: 'non-veg' },
    ],
  },
  {
    id: 'vegetarian',
    name: 'Vegetarian Mains',
    items: [
      { name: 'Paneer Butter Masala', description: 'Cottage cheese cubes in a creamy tomato and butter sauce.', price: '15.95', type: 'veg', popular: true },
      { name: 'Malai Kofta', description: 'Vegetable and cheese dumplings in a rich, creamy sauce.', price: '15.95', type: 'veg' },
      { name: 'Chana Masala', description: 'Chickpeas cooked in a spicy onion and tomato gravy.', price: '13.95', type: 'veg' },
      { name: 'Dal Makhani', description: 'Black lentils and kidney beans slow-cooked in a creamy sauce.', price: '13.95', type: 'veg', popular: true },
      { name: 'Aloo Gobi', description: 'Potatoes and cauliflower florets cooked with Indian spices.', price: '14.95', type: 'veg' },
    ],
  },
  {
    id: 'non-vegetarian',
    name: 'Non-Vegetarian Mains',
    items: [
      { name: 'Chicken Tikka Masala', description: 'Grilled chicken chunks in a spiced, creamy tomato sauce.', price: '17.95', type: 'non-veg', popular: true },
      { name: 'Butter Chicken', description: 'Tender chicken in a mildly spiced tomato sauce.', price: '17.95', type: 'non-veg' },
      { name: 'Lamb Rogan Josh', description: 'Aromatic lamb curry from the Kashmir region.', price: '18.95', type: 'non-veg', popular: true },
      { name: 'Goan Fish Curry', description: 'Fish cooked in a coconut-based gravy with Goan spices.', price: '19.95', type: 'non-veg' },
      { name: 'Shrimp Vindaloo', description: 'A fiery and tangy curry with shrimp and potatoes.', price: '19.95', type: 'non-veg' },
    ],
  },
  {
    id: 'breads',
    name: 'Breads',
    items: [
      { name: 'Naan', description: 'Soft, leavened flatbread baked in a tandoor.', price: '3.95', type: 'veg' },
      { name: 'Garlic Naan', description: 'Naan bread topped with fresh garlic and cilantro.', price: '4.95', type: 'veg', popular: true },
      { name: 'Roti', description: 'Whole wheat flatbread cooked in a tandoor.', price: '3.95', type: 'veg' },
      { name: 'Cheese Kulcha', description: 'Leavened bread stuffed with a blend of cheeses.', price: '5.95', type: 'veg' },
    ],
  },
    {
    id: 'desserts',
    name: 'Desserts',
    items: [
      { name: 'Gulab Jamun', description: 'Soft, melt-in-your-mouth milk-solid balls in a rose-flavored syrup.', price: '5.95', type: 'veg', popular: true },
      { name: 'Ras Malai', description: 'Cheese dumplings soaked in sweetened, thickened milk.', price: '6.95', type: 'veg' },
      { name: 'Kulfi', description: 'Traditional Indian ice cream, available in various flavors.', price: '5.95', type: 'veg' },
    ],
  },
];
