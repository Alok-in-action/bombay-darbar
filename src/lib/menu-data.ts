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
    id: 'beverages',
    name: 'Beverages',
    items: [
      { name: 'Green Tea', description: '', price: '20', type: 'veg' },
      { name: 'Special Tea', description: '', price: '25', type: 'veg' },
      { name: 'Lemon Tea', description: '', price: '15', type: 'veg' },
      { name: 'Hot Coffee', description: '', price: '40', type: 'veg' },
      { name: 'Virgin Mojito', description: '', price: '80', type: 'veg' },
      { name: 'Butter Milk', description: '', price: '15', type: 'veg' },
      { name: 'Lassi', description: '', price: '40', type: 'veg' },
      { name: 'Lemonade', description: '', price: '30', type: 'veg' },
      { name: 'Cold Coffee', description: '', price: '80', type: 'veg' },
      { name: 'Aromatic Beverage', description: '', price: '30', type: 'veg' }
    ]
  },
  {
    id: 'salads',
    name: 'Salads',
    items: [
      { name: 'Green Salad', description: '', price: '50', type: 'veg' },
      { name: 'Tomato Salad', description: '', price: '40', type: 'veg' },
      { name: 'Raitha Salad', description: '', price: '50', type: 'veg' },
      { name: 'Onion Salad', description: '', price: '30', type: 'veg' },
      { name: 'Fruit Salad', description: '', price: '120', type: 'veg' }
    ]
  },
  {
    id: 'soups',
    name: 'Soups',
    items: [
      { name: 'Cream of Tomato', description: '', price: '100', type: 'veg' },
      { name: 'Veg Clear Soup', description: '', price: '90', type: 'veg' },
      { name: 'Veg Manchow Soup', description: '', price: '90', type: 'veg' },
      { name: 'Sweet Corn Soup', description: '', price: '105', type: 'veg' }
    ]
  },
  {
    id: 'quick_serve',
    name: 'Quick Serve',
    items: [
        { name: 'Sev Masala Papad', description: '', price: '20', type: 'veg' },
        { name: 'Fry Masala Papad', description: '', price: '15', type: 'veg' },
        { name: 'Roasted Masala Papad', description: '', price: '15', type: 'veg' },
        { name: 'Plain Fried Papad', description: '', price: '10', type: 'veg' },
        { name: 'Plain Roasted Papad', description: '', price: '10', type: 'veg' },
        { name: 'Chana Lehsun', description: '', price: '120', type: 'veg' },
        { name: 'Oats', description: '', price: '60', type: 'veg' },
        { name: 'Masala Oats', description: '', price: '80', type: 'veg' },
        { name: 'Peanut Chat', description: '', price: '120', type: 'veg' },
        { name: 'Peanut Fry', description: '', price: '100', type: 'veg' }
    ]
  },
  {
    id: 'fritters',
    name: 'Fritters',
    items: [
        { name: 'Onion Pakora', description: '', price: '80', type: 'veg' },
        { name: 'Paneer Pakora', description: '', price: '180', type: 'veg' },
        { name: 'French Fries', description: '', price: '120', type: 'veg' },
        { name: 'Aloo Tickies', description: '', price: '100', type: 'veg' },
        { name: 'Crispy Corn', description: '', price: '180', type: 'veg' },
        { name: 'Ring Onion', description: '', price: '80', type: 'veg' },
        { name: 'Mirchi Pakora', description: '', price: '60', type: 'veg' },
        { name: 'Fish Pakora', description: '', price: '280', type: 'non-veg' },
        { name: 'Chicken Pakora', description: '', price: '240', type: 'non-veg' }
    ]
  },
  {
    id: 'veg_appetizer',
    name: 'Veg Appetizer',
    items: [
        { name: 'Paneer Tikka', description: '', price: '260', type: 'veg' },
        { name: 'Paneer Pahadi Tikka', description: '', price: '230', type: 'veg' },
        { name: 'Paneer Schezwan Tikka', description: '', price: '220', type: 'veg' },
        { name: 'Paneer Reshmi Tikka', description: '', price: '220', type: 'veg' },
        { name: 'Paneer Malai Tikka', description: '', price: '280', type: 'veg' },
        { name: 'Mushroom Tikka', description: '', price: '240', type: 'veg' },
        { name: 'Paneer Trianga', description: '', price: '240', type: 'veg' },
        { name: 'Veg Tiranga', description: '', price: '180', type: 'veg' },
        { name: 'Veg Pahadi Kabab', description: '', price: '170', type: 'veg' },
        { name: 'Veg Spring Roll', description: '', price: '150', type: 'veg' },
        { name: 'Paneer Finger', description: '', price: '230', type: 'veg' },
        { name: 'Hara Bhara Kabab', description: '', price: '200', type: 'veg' },
        { name: 'Paneer Hara Bhara', description: '', price: '260', type: 'veg' },
        { name: 'Veg Mayoneese Kabab', description: '', price: '210', type: 'veg' },
        { name: 'Veg Malai Kulfi', description: '', price: '210', type: 'veg' },
        { name: 'Veg Lolipop', description: '', price: '220', type: 'veg' },
        { name: 'Veg Cutlets', description: '', price: '170', type: 'veg' },
        { name: 'Paneer Sizzler', description: '', price: '470', type: 'veg' },
        { name: 'Paneer Kandi', description: '', price: '280', type: 'veg' }
    ]
  },
  {
    id: 'veg_appetizer_chinese',
    name: 'Veg Appetizer - Chinese',
    items: [
        { name: 'Honey Chilli Potato', description: '', price: '180', type: 'veg' },
        { name: 'Chilli Potato', description: '', price: '160', type: 'veg' },
        { name: 'Paneer 65 - Dry', description: '', price: '220', type: 'veg' },
        { name: 'Paneer Schezwan - Dry', description: '', price: '240', type: 'veg' },
        { name: 'Paneer Crispy', description: '', price: '210', type: 'veg' },
        { name: 'Chilli Paneer', description: '', price: '230', type: 'veg' },
        { name: 'Paneer Manchurian', description: '', price: '240', type: 'veg' },
        { name: 'Gobhi Manchurian', description: '', price: '220', type: 'veg' },
        { name: 'Gobhi Chilli', description: '', price: '240', type: 'veg' },
        { name: 'Mashroom Chilli', description: '', price: '240', type: 'veg' },
        { name: 'Dragon Paneer', description: '', price: '300', type: 'veg' },
        { name: 'Mix Veg Sizzler', description: '', price: '320', type: 'veg' },
        { name: 'Veg Manchurian - Dry', description: '', price: '140', type: 'veg' },
        { name: 'Veg Manchurian - Semi Gravy', description: '', price: '160', type: 'veg' }
    ]
  },
  {
    id: 'veg_sandwich',
    name: 'Veg Sandwich',
    items: [
        { name: 'Veg Sandwich', description: '', price: 'N/A', type: 'veg' },
        { name: 'Veg Club Sandwich', description: '', price: 'N/A', type: 'veg' },
        { name: 'Veg Grilled Sandwich', description: '', price: 'N/A', type: 'veg' },
        { name: 'Veg Cheese Grilled Sandwich', description: '', price: 'N/A', type: 'veg' }
    ]
  },
  {
    id: 'veg_main_course',
    name: 'Veg Main Course',
    items: [
        { name: 'Soya Chaap', description: '', price: '260', type: 'veg' },
        { name: 'Mushroom Masala', description: '', price: '230', type: 'veg' },
        { name: 'Bhindi Masala', description: '', price: '220', type: 'veg' },
        { name: 'Mushroom Do Pyaza', description: '', price: '220', type: 'veg' },
        { name: 'Shahi Bhindi', description: '', price: '280', type: 'veg' },
        { name: 'Veg Kolhapuri', description: '', price: '240', type: 'veg' },
        { name: 'Matar Mushroom', description: '', price: '240', type: 'veg' },
        { name: 'Veg Singapuri', description: '', price: '180', type: 'veg' },
        { name: 'Aloo Jeera', description: '', price: '170', type: 'veg' },
        { name: 'Bhindi Do Pyaza', description: '', price: '260', type: 'veg' },
        { name: 'Shahi Kaju', description: '', price: '210', type: 'veg' },
        { name: 'Kaju Paneer', description: '', price: '210', type: 'veg' },
        { name: 'Mix Veg', description: '', price: '220', type: 'veg' },
        { name: 'Chana Masala', description: '', price: '240', type: 'veg' },
        { name: 'Kaju Curry', description: '', price: '170', type: 'veg' },
        { name: 'Sev Tamatar', description: '', price: '470', type: 'veg' },
        { name: 'Sev Doodh', description: '', price: '280', type: 'veg' },
        { name: 'Dal Fry', description: '', price: '260', type: 'veg' },
        { name: 'Dal Tadka', description: '', price: '250', type: 'veg' },
        { name: 'Dal Makhni', description: '', price: '270', type: 'veg' },
        { name: 'Dal Khichdi', description: '', price: '200', type: 'veg' },
        { name: 'Veg Thali', description: '', price: '200', type: 'veg' },
        { name: 'Paneer Lajawab', description: '', price: '140', type: 'veg' },
        { name: 'Paneer Lababdaar', description: '', price: '300', type: 'veg' },
        { name: 'Paneer Indori', description: '', price: '280', type: 'veg' },
        { name: 'Paneer Punjabi', description: '', price: '220', type: 'veg' },
        { name: 'Paneer Angara', description: '', price: '230', type: 'veg' },
        { name: 'Paneer Toofani', description: '', price: '140', type: 'veg' },
        { name: 'Paneer Mirch', description: '', price: '120', type: 'veg' },
        { name: 'Paneer Chatpata', description: '', price: '160', type: 'veg' },
        { name: 'Paneer Haryali', description: '', price: '190', type: 'veg' },
        { name: 'Kadhai Paneer', description: '', price: '230', type: 'veg' },
        { name: 'Paneer Kashmiri', description: '', price: '160', type: 'veg' },
        { name: 'Makhan Paneer', description: '', price: '220', type: 'veg' },
        { name: 'Paneer Tikka Masala', description: '', price: '270', type: 'veg' },
        { name: 'Paneer Masala Kofta', description: '', price: '260', type: 'veg' },
        { name: 'Paneer Malai Kofta', description: '', price: '290', type: 'veg' },
        { name: 'Palak Paneer', description: '', price: '300', type: 'veg' },
        { name: 'Matar Paneer', description: '', price: '290', type: 'veg' },
        { name: 'Paneer Sizzler', description: '', price: '300', type: 'veg' }
    ]
  },
  {
    id: 'veg_fried_rice',
    name: 'Veg Fried Rice',
    items: [
        { name: 'Veg Fried Rice', description: '', price: '120', type: 'veg' },
        { name: 'Veg Schezwan Fried Rice', description: '', price: '130', type: 'veg' },
        { name: 'Veg Triple Fried Rice', description: '', price: '180', type: 'veg' },
        { name: 'Veg Manchurian Fried Rice', description: '', price: '180', type: 'veg' },
        { name: 'Veg Hong Kong Fried Rice', description: '', price: '160', type: 'veg' },
        { name: 'Veg Singapore Rice', description: '', price: '470', type: 'veg' },
        { name: 'Paneer Fried Rice', description: '', price: '180', type: 'veg' }
    ]
  },
  {
    id: 'veg_biryani_pulao',
    name: 'Veg Biryani & Pulao',
    items: [
        { name: 'Veg Biryani', description: '', price: '160', type: 'veg' },
        { name: 'Mushroom Biryani', description: '', price: '190', type: 'veg' },
        { name: 'Paneer Dum Biryani', description: '', price: '210', type: 'veg' },
        { name: 'Paneer Hyderabadi Biryani', description: '', price: '220', type: 'veg' },
        { name: 'Veg Pulao', description: '', price: '180', type: 'veg' },
        { name: 'Paneer Khafsa', description: '', price: '800', type: 'veg' },
        { name: 'Manchurian Biryani', description: '', price: '230', type: 'veg' },
        { name: 'Jeera Rice', description: '', price: '120', type: 'veg' },
        { name: 'Plain Rice', description: '', price: '100', type: 'veg' },
        { name: 'Steam Rice', description: '', price: '100', type: 'veg' },
        { name: 'Curd Rice', description: '', price: '120', type: 'veg' }
    ]
  },
  {
    id: 'breads',
    name: 'Breads',
    items: [
        { name: 'Chapati', description: '', price: '10', type: 'veg' },
        { name: 'Chapati Butter', description: '', price: '15', type: 'veg' },
        { name: 'Tandoori Roti', description: '', price: '15', type: 'veg' },
        { name: 'Tandoori Butter Roti', description: '', price: '20', type: 'veg' },
        { name: 'Butter Naan', description: '', price: '25', type: 'veg' },
        { name: 'Garlic Naan', description: '', price: '30', type: 'veg' },
        { name: 'Garlic Naan Butter', description: '', price: '35', type: 'veg' },
        { name: 'Mughlai Naan', description: '', price: '40', type: 'veg' },
        { name: 'Aloo Paratha', description: '', price: '50', type: 'veg' },
        { name: 'Paneer Paratha', description: '', price: '30', type: 'veg' },
        { name: 'Lachha Paratha', description: '', price: '40', type: 'veg' },
        { name: 'Onion Paratha', description: '', price: '40', type: 'veg' }
    ]
  },
  {
    id: 'veg_noodles',
    name: 'Veg Noodles',
    items: [
        { name: 'Veg Noodles Bhel', description: '', price: '90', type: 'veg' },
        { name: 'Veg Noodles', description: '', price: '120', type: 'veg' },
        { name: 'Veg Schezwan Noodles', description: '', price: '125', type: 'veg' },
        { name: 'Veg Triple Noodles', description: '', price: '200', type: 'veg' },
        { name: 'Veg Manchurian Noodles', description: '', price: '150', type: 'veg' },
        { name: 'Veg Haqqa Noodles', description: '', price: '120', type: 'veg' },
        { name: 'Noodles With Soya Chunks', description: '', price: '140', type: 'veg' }
    ]
  },
  {
    id: 'non_veg_appetizers',
    name: 'Non-Veg Appetizers',
    items: [
        { name: 'Chicken Burrah', description: '', price: '450', type: 'non-veg' },
        { name: 'Lemon Chicken', description: '', price: '430', type: 'non-veg' },
        { name: 'Chicken Malai Tandoori', description: '', price: '460', type: 'non-veg' },
        { name: 'Chicken Pahadi Tikka', description: '', price: '180', type: 'non-veg' },
        { name: 'Chicken Tikka', description: '', price: '200', type: 'non-veg' },
        { name: 'Chicken Tiranga Tikka', description: '', price: '220', type: 'non-veg' },
        { name: 'Tandoori Leg Pcs', description: '', price: '370', type: 'non-veg' }
    ]
  },
  {
    id: 'non_veg_fried_appetizers',
    name: 'Non-Veg Fried Appetizers',
    items: [
        { name: 'Chicken Breast', description: '', price: '270', type: 'non-veg' },
        { name: 'Chicken Shami Kabab', description: '', price: '240', type: 'non-veg' },
        { name: 'Chicken Chapli Kabab', description: '', price: '220', type: 'non-veg' },
        { name: 'Chicken Cheese Kebab', description: '', price: '470', type: 'non-veg' },
        { name: 'Chicken Shahi Roll', description: 'Crunchy on the outside, flavorful on the inside. Crispy golden Rolls filled with savory spiced chicken keema', price: '320', type: 'non-veg', popular: true },
        { name: 'Chicken Palak Kebab', description: '', price: '380', type: 'non-veg' },
        { name: 'Chicken Cutlets', description: '', price: '380', type: 'non-veg' },
        { name: 'Chicken Drum Stick', description: '', price: '340', type: 'non-veg' },
        { name: 'Leg Piece Fried', description: '', price: '280', type: 'non-veg' },
        { name: 'Tandoori Schezwan Leg Piece', description: '', price: '400', type: 'non-veg' }
    ]
  },
  {
    id: 'non_veg_chinese_appetizers',
    name: 'Non-Veg Chinese Appetizers',
    items: [
        { name: 'Chicken Malai Kulfi', description: '', price: '360', type: 'non-veg' },
        { name: 'Chicken Seekh Kebab (6 Pc)', description: '', price: '200', type: 'non-veg' },
        { name: 'Chicken Tikka Dry (6 Pc)', description: '', price: '170', type: 'non-veg' },
        { name: 'Chicken Makhmali Kebab (6 Pc)', description: '', price: '200', type: 'non-veg' },
        { name: 'Chicken Reshmi Kebab (6 Pc)', description: '', price: '220', type: 'non-veg' },
        { name: 'Chicken Achari (6 Pc)', description: '', price: '200', type: 'non-veg' },
        { name: 'Chicken Gulab Khass', description: '', price: '440', type: 'non-veg' },
        { name: 'Chicken Kandi Tiranga', description: '', price: '280', type: 'non-veg' },
        { name: 'Chicken Crispy Fried', description: '', price: '240', type: 'non-veg' },
        { name: 'Chicken Fry', description: '', price: '400', type: 'non-veg' }
    ]
  },
  {
    id: 'non_veg_chinese_starters_dry',
    name: 'Non-Veg Chinese Starters - Dry',
    items: [
        { name: 'Chicken Schezwan (Dry)', description: '', price: '220', type: 'non-veg' },
        { name: 'Chicken Lollipop (Dry)', description: '', price: '240', type: 'non-veg' },
        { name: 'Chicken Lollipop (Semi Gravy)', description: '', price: '260', type: 'non-veg' },
        { name: 'Chicken Crispy (Dry)', description: '', price: '240', type: 'non-veg' },
        { name: 'Dragon Chicken (Dry)', description: '', price: '300', type: 'non-veg' },
        { name: 'Chicken Manchurian (Dry)', description: '', price: '260', type: 'non-veg' },
        { name: 'Chilli Chicken (Dry)', description: '', price: '210', type: 'non-veg' },
        { name: 'Chicken 65 (Dry)', description: '', price: '215', type: 'non-veg' }
    ]
  },
  {
    id: 'non_veg_chinese_noodles',
    name: 'Non-Veg Chinese Noodles',
    items: [
        { name: 'Chicken Noodles', description: '', price: '150', type: 'non-veg' },
        { name: 'Chicken Schezwan Noodles', description: '', price: '160', type: 'non-veg' },
        { name: 'Chicken Triple Noodles', description: '', price: '200', type: 'non-veg' },
        { name: 'Chicken Manchurian Noodles', description: '', price: '160', type: 'non-veg' },
        { name: 'Egg Noodles', description: '', price: '130', type: 'non-veg' },
        { name: 'Egg Schezwan Noodles', description: '', price: '150', type: 'non-veg' }
    ]
  },
  {
    id: 'non_veg_chinese_main_course',
    name: 'Non-Veg Chinese Main Course',
    items: [
        { name: 'Chicken Fried Rice', description: '', price: '150', type: 'non-veg' },
        { name: 'Chicken Schezwan Fried Rice', description: '', price: '160', type: 'non-veg' },
        { name: 'Chicken Triple Fried Rice', description: '', price: '190', type: 'non-veg' },
        { name: 'Chicken Manchurian Fried Rice', description: '', price: '200', type: 'non-veg' },
        { name: 'Egg Fried Rice', description: '', price: '120', type: 'non-veg' },
        { name: 'Egg Schezwan Fried Rice', description: '', price: '125', type: 'non-veg' },
        { name: 'Chicken Hong-Kong Rice', description: '', price: '200', type: 'non-veg' },
        { name: 'Chicken Singapore Rice', description: '', price: '180', type: 'non-veg' },
        { name: '1000 Rice (Thousand rice)', description: '', price: '200', type: 'non-veg' }
    ]
  },
  {
    id: 'non_veg_main_course_chicken',
    name: 'Non-Veg Main Course - Chicken',
    items: [
        { name: 'Chicken Banjara', description: '', price: '400', type: 'non-veg' },
        { name: 'Chicken Kali Mirch', description: '', price: '340', type: 'non-veg' },
        { name: 'Chicken Bhuna', description: '', price: '300', type: 'non-veg' },
        { name: 'Chicken Keema', description: '', price: '280', type: 'non-veg' },
        { name: 'Chicken Lucknowee', description: '', price: '560', type: 'non-veg' },
        { name: 'Chicken Afghani', description: '', price: '300', type: 'non-veg' },
        { name: 'Chicken Tabba Gosht', description: '', price: '290', type: 'non-veg' },
        { name: 'Chicken Haryali', description: '', price: '280', type: 'non-veg' },
        { name: 'Tawa Chicken', description: '', price: '260', type: 'non-veg' },
        { name: 'Butter Chicken', description: '', price: '265', type: 'non-veg', popular: true }
    ]
  },
  {
    id: 'non_veg_main_course_chicken_boneless',
    name: 'Non-Veg Main Course - Chicken Boneless',
    items: [
        { name: 'Chicken Chatpata', description: '', price: '300', type: 'non-veg' },
        { name: 'Chicken Patiyala', description: '', price: '360', type: 'non-veg' },
        { name: 'Chicken Mirch', description: '', price: '275', type: 'non-veg' },
        { name: 'Chicken Toofani', description: '', price: '280', type: 'non-veg' },
        { name: 'Chicken Angara', description: '', price: '300', type: 'non-veg' },
        { name: 'Chicken Lazeez', description: '', price: '285', type: 'non-veg' },
        { name: 'Chicken Punjabi', description: '', price: '300', type: 'non-veg' },
        { name: 'Chicken Lajawab', description: '', price: '295', type: 'non-veg' },
        { name: 'Special Bombay Chicken Curry', description: '', price: '300', type: 'non-veg' },
        { name: 'Chicken Changezi', description: '', price: '550', type: 'non-veg' },
        { name: 'Chicken Makhni', description: '', price: '570', type: 'non-veg' },
        { name: 'Chicken Peshawari', description: '', price: '540', type: 'non-veg' },
        { name: 'Chicken Mughlai', description: '', price: '460', type: 'non-veg' },
        { name: 'Chicken Tikka Masala', description: '', price: '400', type: 'non-veg' },
        { name: 'Palak Chicken', description: '', price: '370', type: 'non-veg' },
        { name: 'Chicken Makhanwala', description: '', price: '400', type: 'non-veg' },
        { name: 'Chicken Kashmiri', description: '', price: '380', type: 'non-veg' },
        { name: 'Chicken Charbagh', description: '', price: '360', type: 'non-veg' }
    ]
  },
  {
    id: 'non_veg_main_course_mutton',
    name: 'Non-Veg Main Course - Mutton',
    items: [
        { name: 'Tawa Gurda', description: '', price: '425', type: 'non-veg' },
        { name: 'Mutton Tawa Chaap', description: '', price: '790', type: 'non-veg' },
        { name: 'Tawa Bhuna', description: '', price: '620', type: 'non-veg' },
        { name: 'Mutton Arabi Raan', description: '', price: '2500', type: 'non-veg' },
        { name: 'Mutton Tandoori Raan', description: '', price: '2000', type: 'non-veg' },
        { name: 'Mutton Raan Masala', description: '', price: '2200', type: 'non-veg' },
        { name: 'Mutton Kurma', description: '', price: '465', type: 'non-veg' },
        { name: 'Mutton Kolhapuri', description: '', price: '475', type: 'non-veg' },
        { name: 'Mutton Handi', description: '', price: '520', type: 'non-veg' },
        { name: 'Mutton Angara', description: '', price: '470', type: 'non-veg' },
        { name: 'Mutton Do Pyaza', description: '', price: '480', type: 'non-veg' },
        { name: 'Mutton Charbagh', description: '', price: '490', type: 'non-veg' },
        { name: 'Mutton Kashmiri', description: '', price: '500', type: 'non-veg' },
        { name: 'Mutton Mughlai', description: '', price: '510', type: 'non-veg' },
        { name: 'Mutton Makkhan Wala', description: '', price: '500', type: 'non-veg' },
        { name: 'Mutton Paya', description: '', price: '460', type: 'non-veg' },
        { name: 'Mutton Rogan Josh', description: '', price: '560', type: 'non-veg' }
    ]
  },
  {
    id: 'non_veg_main_course_fish_prawns',
    name: 'Non-Veg Main Course - Fish & Prawns',
    items: [
        { name: 'Fish Curry', description: '', price: '450', type: 'non-veg' },
        { name: 'Prawns Curry', description: '', price: '670', type: 'non-veg', popular: true },
        { name: 'Prawns Kolhapuri', description: '', price: '600', type: 'non-veg' },
        { name: 'Fish Tawa Fry', description: '', price: '300', type: 'non-veg' },
        { name: 'Fish Deep Fry', description: '', price: '300', type: 'non-veg' },
        { name: 'Fish Tandoori', description: '', price: '720', type: 'non-veg' },
        { name: 'Prawns Fry', description: '', price: '670', type: 'non-veg' },
        { name: 'Aquatic Food Half', description: '', price: '280', type: 'non-veg' }
    ]
  },
  {
    id: 'non_veg_biryani',
    name: 'Non-Veg Biryani',
    items: [
        { name: 'Chicken Dum Biryani', description: '', price: '210', type: 'non-veg' },
        { name: 'Chicken Tikka Biryani', description: '', price: '240', type: 'non-veg' },
        { name: 'Chicken Hyderabadi Biryani', description: '', price: '220', type: 'non-veg' },
        { name: 'Chicken Seek Malai Biryani', description: '', price: '260', type: 'non-veg' },
        { name: 'Chicken Tandoori Biryani', description: '', price: '250', type: 'non-veg' },
        { name: 'Chicken Malai Biryani', description: '', price: '240', type: 'non-veg' },
        { name: 'Chicken Lucknowee Biryani', description: '', price: '280', type: 'non-veg' },
        { name: 'Mutton Dum Biryani', description: '', price: '360', type: 'non-veg' },
        { name: 'Mutton Malai Biryani', description: '', price: '400', type: 'non-veg' },
        { name: 'Egg Biryani', description: '', price: '210', type: 'non-veg' }
    ]
  },
  {
    id: 'pulao',
    name: 'Pulao',
    items: [
        { name: 'Veg Pulao', description: '', price: '140', type: 'veg' },
        { name: 'Chicken Yakhni Pulao', description: '', price: '180', type: 'non-veg' },
        { name: 'Chicken Pulao', description: '', price: '170', type: 'non-veg' },
        { name: 'Chicken Zam Zam', description: '', price: '190', type: 'non-veg' },
        { name: 'Mutton Pulao', description: '', price: '330', type: 'non-veg' },
        { name: 'Mutton Yakhni', description: '', price: '340', type: 'non-veg' }
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    items: [
      { name: 'Gulab Jamun', description: 'Soft, spongy milk-based dumplings, deep-fried to golden brown perfection, and soaked in a fragrant rose-flavored syrup', price: 'N/A', type: 'veg', popular: true },
    ],
  },
];
