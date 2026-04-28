const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const products = [
  // Men (10 products)
  { name: 'Classic Men Suit', category: 'Men', price: 120, description: 'Elegant black suit for formal occasions', image: 'https://placehold.co/400x400/1a1a1a/ffffff?text=Classic+Men+Suit', stock: 15, location: 'Kigali, Kanombe' },
  { name: 'Men Casual Shirt', category: 'Men', price: 35, description: 'Comfortable cotton casual shirt', image: 'https://placehold.co/400x400/3b82f6/ffffff?text=Men+Casual+Shirt', stock: 30, location: 'Kigali, Kanombe' },
  { name: 'Men Denim Jeans', category: 'Men', price: 45, description: 'Classic blue denim jeans, regular fit', image: 'https://placehold.co/400x400/1e40af/ffffff?text=Men+Denim+Jeans', stock: 25, location: 'Kigali, Kanombe' },
  { name: 'Men Polo Shirt', category: 'Men', price: 28, description: 'Breathable polo shirt for casual outings', image: 'https://placehold.co/400x400/10b981/ffffff?text=Men+Polo+Shirt', stock: 40, location: 'Kigali, Kanombe' },
  { name: 'Men Leather Jacket', category: 'Men', price: 150, description: 'Premium leather jacket, stylish and durable', image: 'https://placehold.co/400x400/78350f/ffffff?text=Men+Leather+Jacket', stock: 12, location: 'Kigali, Kanombe' },
  { name: 'Men Chino Shorts', category: 'Men', price: 25, description: 'Smart casual chino shorts for summer', image: 'https://placehold.co/400x400/d97706/ffffff?text=Men+Chino+Shorts', stock: 35, location: 'Kigali, Kanombe' },
  { name: 'Men Hoodie Sweatshirt', category: 'Men', price: 38, description: 'Warm hoodie sweatshirt for chilly days', image: 'https://placehold.co/400x400/374151/ffffff?text=Men+Hoodie', stock: 22, location: 'Kigali, Kanombe' },
  { name: 'Men Formal Trousers', category: 'Men', price: 55, description: 'Slim fit formal trousers for office wear', image: 'https://placehold.co/400x400/4b5563/ffffff?text=Men+Formal+Trousers', stock: 20, location: 'Kigali, Kanombe' },
  { name: 'Men Trench Coat', category: 'Men', price: 130, description: 'Elegant trench coat for rainy seasons', image: 'https://placehold.co/400x400/92400e/ffffff?text=Men+Trench+Coat', stock: 10, location: 'Kigali, Kanombe' },
  { name: 'Men Cargo Pants', category: 'Men', price: 42, description: 'Durable cargo pants with multiple pockets', image: 'https://placehold.co/400x400/57534e/ffffff?text=Men+Cargo+Pants', stock: 28, location: 'Kigali, Kanombe' },

  // Women (10 products)
  { name: 'Women Evening Dress', category: 'Women', price: 95, description: 'Stunning evening dress for special events', image: 'https://placehold.co/400x400/db2777/ffffff?text=Evening+Dress', stock: 12, location: 'Kigali, Kanombe' },
  { name: 'Women Blouse', category: 'Women', price: 40, description: 'Stylish blouse for everyday wear', image: 'https://placehold.co/400x400/f472b6/ffffff?text=Women+Blouse', stock: 25, location: 'Kigali, Kanombe' },
  { name: 'Women Maxi Skirt', category: 'Women', price: 50, description: 'Flowing maxi skirt for elegant looks', image: 'https://placehold.co/400x400/8b5cf6/ffffff?text=Maxi+Skirt', stock: 18, location: 'Kigali, Kanombe' },
  { name: 'Women Skinny Jeans', category: 'Women', price: 48, description: 'Stretchable skinny jeans, perfect fit', image: 'https://placehold.co/400x400/1e3a8a/ffffff?text=Women+Skinny+Jeans', stock: 30, location: 'Kigali, Kanombe' },
  { name: 'Women Summer Top', category: 'Women', price: 32, description: 'Lightweight summer top, floral design', image: 'https://placehold.co/400x400/f59e0b/ffffff?text=Summer+Top', stock: 35, location: 'Kigali, Kanombe' },
  { name: 'Women Cardigan', category: 'Women', price: 55, description: 'Cozy knit cardigan for layering', image: 'https://placehold.co/400x400/7c3aed/ffffff?text=Women+Cardigan', stock: 20, location: 'Kigali, Kanombe' },
  { name: 'Women Office Blazer', category: 'Women', price: 85, description: 'Professional blazer for the workplace', image: 'https://placehold.co/400x400/1f2937/ffffff?text=Office+Blazer', stock: 15, location: 'Kigali, Kanombe' },
  { name: 'Women Jumpsuit', category: 'Women', price: 72, description: 'Trendy jumpsuit for modern women', image: 'https://placehold.co/400x400/ec4899/ffffff?text=Women+Jumpsuit', stock: 14, location: 'Kigali, Kanombe' },
  { name: 'Women Wrap Dress', category: 'Women', price: 68, description: 'Beautiful wrap dress, flattering fit', image: 'https://placehold.co/400x400/be185d/ffffff?text=Wrap+Dress', stock: 16, location: 'Kigali, Kanombe' },
  { name: 'Women Leggings', category: 'Women', price: 22, description: 'High-waist leggings for comfort', image: 'https://placehold.co/400x400/4c1d95/ffffff?text=Women+Leggings', stock: 45, location: 'Kigali, Kanombe' },

  // Children (10 products)
  { name: 'Kids T-Shirt', category: 'Children', price: 15, description: 'Colorful t-shirt for kids', image: 'https://placehold.co/400x400/ef4444/ffffff?text=Kids+T-Shirt', stock: 40, location: 'Kigali, Kanombe' },
  { name: 'Kids Shorts', category: 'Children', price: 18, description: 'Comfortable shorts for children', image: 'https://placehold.co/400x400/f97316/ffffff?text=Kids+Shorts', stock: 35, location: 'Kigali, Kanombe' },
  { name: 'Kids School Uniform', category: 'Children', price: 30, description: 'Complete school uniform set', image: 'https://placehold.co/400x400/2563eb/ffffff?text=School+Uniform', stock: 50, location: 'Kigali, Kanombe' },
  { name: 'Kids Party Dress', category: 'Children', price: 38, description: 'Pretty party dress for girls', image: 'https://placehold.co/400x400/e879f9/ffffff?text=Party+Dress', stock: 22, location: 'Kigali, Kanombe' },
  { name: 'Kids Hoodie', category: 'Children', price: 25, description: 'Warm hoodie for boys and girls', image: 'https://placehold.co/400x400/0891b2/ffffff?text=Kids+Hoodie', stock: 30, location: 'Kigali, Kanombe' },
  { name: 'Kids Tracksuit', category: 'Children', price: 35, description: 'Sporty tracksuit for active kids', image: 'https://placehold.co/400x400/059669/ffffff?text=Kids+Tracksuit', stock: 28, location: 'Kigali, Kanombe' },
  { name: 'Kids Raincoat', category: 'Children', price: 28, description: 'Waterproof raincoat with hood', image: 'https://placehold.co/400x400/0ea5e9/ffffff?text=Kids+Raincoat', stock: 20, location: 'Kigali, Kanombe' },
  { name: 'Kids Pajama Set', category: 'Children', price: 20, description: 'Soft cotton pajama set for good sleep', image: 'https://placehold.co/400x400/a855f7/ffffff?text=Pajama+Set', stock: 40, location: 'Kigali, Kanombe' },
  { name: 'Kids Denim Jacket', category: 'Children', price: 32, description: 'Stylish denim jacket for kids', image: 'https://placehold.co/400x400/4338ca/ffffff?text=Kids+Denim+Jacket', stock: 18, location: 'Kigali, Kanombe' },
  { name: 'Kids Sandals', category: 'Children', price: 16, description: 'Comfortable sandals for daily wear', image: 'https://placehold.co/400x400/d946ef/ffffff?text=Kids+Sandals', stock: 35, location: 'Kigali, Kanombe' },

  // Shoes (10 products)
  { name: 'Running Shoes', category: 'Shoes', price: 85, description: 'Lightweight running shoes', image: 'https://placehold.co/400x400/dc2626/ffffff?text=Running+Shoes', stock: 20, location: 'Kigali, Kanombe' },
  { name: 'Leather Boots', category: 'Shoes', price: 110, description: 'Premium leather boots', image: 'https://placehold.co/400x400/7c2d12/ffffff?text=Leather+Boots', stock: 10, location: 'Kigali, Kanombe' },
  { name: 'Women High Heels', category: 'Shoes', price: 65, description: 'Elegant high heels for parties', image: 'https://placehold.co/400x400/9f1239/ffffff?text=High+Heels', stock: 18, location: 'Kigali, Kanombe' },
  { name: 'Men Loafers', category: 'Shoes', price: 75, description: 'Classic leather loafers', image: 'https://placehold.co/400x400/451a03/ffffff?text=Men+Loafers', stock: 22, location: 'Kigali, Kanombe' },
  { name: 'Kids Sneakers', category: 'Shoes', price: 40, description: 'Colorful sneakers for children', image: 'https://placehold.co/400x400/ea580c/ffffff?text=Kids+Sneakers', stock: 30, location: 'Kigali, Kanombe' },
  { name: 'Women Flat Sandals', category: 'Shoes', price: 30, description: 'Comfortable flat sandals', image: 'https://placehold.co/400x400/c2410c/ffffff?text=Flat+Sandals', stock: 25, location: 'Kigali, Kanombe' },
  { name: 'Men Formal Shoes', category: 'Shoes', price: 95, description: 'Shiny formal leather shoes', image: 'https://placehold.co/400x400/171717/ffffff?text=Formal+Shoes', stock: 15, location: 'Kigali, Kanombe' },
  { name: 'Women Ankle Boots', category: 'Shoes', price: 88, description: 'Trendy ankle boots for women', image: 'https://placehold.co/400x400/881337/ffffff?text=Ankle+Boots', stock: 14, location: 'Kigali, Kanombe' },
  { name: 'Slippers', category: 'Shoes', price: 15, description: 'Soft indoor slippers', image: 'https://placehold.co/400x400/065f46/ffffff?text=Slippers', stock: 50, location: 'Kigali, Kanombe' },
  { name: 'Men Sports Sandals', category: 'Shoes', price: 35, description: 'Durable sports sandals', image: 'https://placehold.co/400x400/166534/ffffff?text=Sports+Sandals', stock: 28, location: 'Kigali, Kanombe' }
];

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log(`${products.length} products seeded successfully`);
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

