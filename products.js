// TODO: replace BASE-hosted images with CCIO's own product photos.
// Current images hotlink from pattyafoods.com which is fragile and not ours.
const BASE = 'https://pattyafoods.com/wp-content/uploads/';

const PRODUCTS = [
  // CONDIMENTS
  {id:1,  name:"Ogbono (200g)",               cat:"Condiment",       price:5.00,  img:BASE+'2026/01/ogbono.jpg',                              badge:""},
  {id:2,  name:"Periwinkle (200g)",            cat:"Condiment",       price:5.99,  img:BASE+'2025/04/periwinkle.jpg',                          badge:""},
  {id:3,  name:"Ugba – African Oil Bean (200g)",cat:"Condiment",      price:5.99,  img:BASE+'2026/01/Ugba.webp',                               badge:""},
  {id:4,  name:"Egusi Ground (400g)",          cat:"Condiment",       price:8.99,  img:BASE+'2025/04/egusi-ground.jpg',                        badge:"",  emoji:"🌿"},
  {id:5,  name:"Crayfish Ground (100g)",       cat:"Condiment",       price:4.99,  img:BASE+'2025/04/crayfish.jpg',                            badge:"",  emoji:"🦐"},
  {id:6,  name:"Palm Oil (1L)",               cat:"Condiment",       price:9.99,  img:BASE+'2025/04/palm-oil.jpg',                            badge:"",  emoji:"🛢️"},
  // FLOUR & GRAINS
  {id:7,  name:"Ayoola Beans Flour (2lb)",     cat:"Flour & Grains",  price:10.99, img:BASE+'2026/01/ayoola-1.jpg',                            badge:""},
  {id:8,  name:"Ayoola Cassava Fufu (2lb)",    cat:"Flour & Grains",  price:10.99, img:BASE+'2025/04/1727463258740-1024x1024.jpg',             badge:""},
  {id:9,  name:"Ayoola Poundo Yam (2lb)",      cat:"Flour & Grains",  price:10.99, img:BASE+'2025/04/PoundoYam1kg_-600x600-1.jpg',             badge:""},
  {id:10, name:"Garri Ijebu (2kg)",            cat:"Flour & Grains",  price:9.49,  img:BASE+'2025/04/garri.jpg',                               badge:"",  emoji:"🌽"},
  {id:11, name:"Semovita (2kg)",               cat:"Flour & Grains",  price:11.99, img:BASE+'2025/04/semovita.jpg',                            badge:"",  emoji:"🌾"},
  {id:12, name:"Plantain Flour (1.5kg)",       cat:"Flour & Grains",  price:12.99, img:BASE+'2025/04/plantain-flour.jpg',                      badge:"new",emoji:"🍌"},
  // MEAT & FISH
  {id:13, name:"Chicken Gizzard (5kg)",        cat:"Meat & Fish",     price:38.00, img:BASE+'2025/04/gizzard-3.jpg',                           badge:""},
  {id:14, name:"Beef (2lb)",                   cat:"Meat & Fish",     price:14.00, img:BASE+'2025/04/goat-meat-1024x575.jpeg',                 badge:""},
  {id:15, name:"Bone-in Stockfish Bits",       cat:"Meat & Fish",     price:15.00, img:BASE+'2025/08/merex-bone-in-stockfish-bits.jpg',        badge:""},
  {id:16, name:"Boneless Stockfish Bits",      cat:"Meat & Fish",     price:15.00, img:BASE+'2025/08/Merex-Bone-in-StockFish-Bits-300x300-1.jpg',badge:""},
  {id:17, name:"Chicken Breast (5kg)",         cat:"Meat & Fish",     price:34.99, img:BASE+'2025/04/breast.jpg',                              badge:"sale"},
  {id:18, name:"Smoked Catfish",              cat:"Meat & Fish",     price:14.99, img:BASE+'2025/04/catfish.jpg',                             badge:"",  emoji:"🐟"},
  // VEGETABLES
  {id:19, name:"Frozen Spinach (1kg)",         cat:"Vegetables",      price:5.99,  img:BASE+'2026/01/spinach.jpg',                             badge:"sale"},
  {id:20, name:"Bitter Leaf (dried 100g)",     cat:"Vegetables",      price:4.49,  img:BASE+'2025/04/bitter-leaf.jpg',                         badge:"",  emoji:"🌿"},
  {id:21, name:"Okra (frozen 500g)",           cat:"Vegetables",      price:6.49,  img:BASE+'2025/04/okra.jpg',                                badge:"",  emoji:"🌱"},
  {id:22, name:"African Eggplant (5 pcs)",     cat:"Vegetables",      price:5.99,  img:BASE+'2025/04/african-eggplant.jpg',                    badge:"",  emoji:"🍆"},
  // TUBERS
  {id:23, name:"Yam (whole ~3kg)",             cat:"Tubers",          price:16.99, img:BASE+'2025/04/yam.jpg',                                 badge:"",  emoji:"🍠"},
  {id:24, name:"Sweet Potato (2kg)",           cat:"Tubers",          price:7.99,  img:BASE+'2025/04/sweet-potato.jpg',                        badge:"",  emoji:"🍠"},
  {id:25, name:"Cassava (fresh 2kg)",          cat:"Tubers",          price:8.49,  img:BASE+'2025/04/cassava.jpg',                             badge:"",  emoji:"🌿"},
  // SNACKS & DRINKS
  {id:26, name:"African Prune / Ube",          cat:"Snacks & Drinks", price:10.99, img:BASE+'2025/04/Prune-scaled-1-768x1024.jpg',             badge:""},
  {id:27, name:"Aiy's Plate Chinchin",         cat:"Snacks & Drinks", price:5.00,  img:BASE+'2025/12/chin-chin-recipe-recipe-main-photo.jpg',  badge:""},
  {id:28, name:"Prawn Crackers (227g)",        cat:"Snacks & Drinks", price:4.99,  img:BASE+'2025/10/prawn-crackers-1024x768.jpg',             badge:""},
  {id:29, name:"Alomo Bitters (small)",        cat:"Snacks & Drinks", price:10.99, img:BASE+'2025/04/Alomo-1.jpg',                             badge:""},
  {id:30, name:"Aiy's Plate Moi Moi",         cat:"Snacks & Drinks", price:5.00,  img:BASE+'2025/10/OIP-4.webp',                              badge:"new"},
  {id:31, name:"Malta Guinness (6-pack)",      cat:"Snacks & Drinks", price:11.99, img:BASE+'2025/04/malta.jpg',                               badge:"",  emoji:"🍺"},
  {id:32, name:"Plantain Chips (200g)",        cat:"Snacks & Drinks", price:4.99,  img:BASE+'2025/04/plantain-chips.jpg',                      badge:"",  emoji:"🍌"},
  // BREAKFAST & CEREAL
  {id:33, name:"Arla Dano Milk (800g)",        cat:"Breakfast & Cereal",price:26.73,img:BASE+'2025/04/images-5.jpg',                           badge:""},
  {id:34, name:"Oats (1kg)",                   cat:"Breakfast & Cereal",price:6.49, img:BASE+'2025/04/oats.jpg',                               badge:"",  emoji:"🥣"},
  {id:35, name:"Akamu / Ogi Mix (500g)",       cat:"Breakfast & Cereal",price:5.99, img:BASE+'2025/04/akamu.jpg',                              badge:"",  emoji:"🥣"},
  // FASHION & BEAUTY
  {id:36, name:"Soul Mate Hair Cream (300g)",  cat:"Fashion & Beauty",price:5.99,  img:BASE+'2025/10/soul-mate-hair-cream.webp',               badge:""},
  {id:37, name:"Apple Hair Cream",             cat:"Fashion & Beauty",price:5.99,  img:BASE+'2025/10/apple-hair-cream-green.png',              badge:""},
  {id:38, name:"Shea Butter (pure 250g)",      cat:"Fashion & Beauty",price:12.99, img:BASE+'2025/04/shea-butter.jpg',                        badge:"new",emoji:"🧴"},
  // PANTRY
  {id:39, name:"Tomato Paste (400g)",          cat:"Pantry",          price:3.49,  img:BASE+'2025/04/tomato-paste.jpg',                        badge:"",  emoji:"🍅"},
  {id:40, name:"Maggi Cubes (100pcs)",         cat:"Pantry",          price:5.99,  img:BASE+'2025/04/maggi.jpg',                               badge:"",  emoji:"🧂"},
  {id:41, name:"Scotch Bonnet Pepper (jar)",   cat:"Pantry",          price:7.99,  img:BASE+'2025/04/scotch-bonnet.jpg',                       badge:"",  emoji:"🌶️"},
  {id:42, name:"Coconut Oil (500ml)",          cat:"Pantry",          price:11.99, img:BASE+'2025/04/coconut-oil.jpg',                         badge:"",  emoji:"🥥"},
  {id:43, name:"Ackee (canned 540ml)",         cat:"Pantry",          price:9.99,  img:BASE+'2025/04/ackee.jpg',                               badge:"",  emoji:"🥫"},
  {id:44, name:"Jerk Seasoning (300g)",        cat:"Pantry",          price:8.49,  img:BASE+'2025/04/jerk-seasoning.jpg',                      badge:"new",emoji:"🌶️"},
];

const CATS = [...new Set(PRODUCTS.map(p => p.cat))];

const FEATURED_IDS = [12, 4, 17, 19, 23, 31, 38, 41]; // hand-picked spread across categories
