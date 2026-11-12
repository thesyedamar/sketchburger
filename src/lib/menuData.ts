export interface MenuItem {
  id: number;
  name: string;
  price: number;
  badge: string;
  stars: number;
  desc: string;
  img: string;
}

export const menuData: Record<string, MenuItem[]> = {
  steaks: [
    { id: 101, name: "Peri Peri Steak", price: 2450, badge: "Popular", stars: 5, desc: "Choice of tender beef undercut or chicken fillet grilled to perfection, topped with fiery peri peri glaze and served with mashed potatoes & sautéed veggies", img: "photo-1558030006-450675393462" },
    { id: 102, name: "Chef Special Beef Steak", price: 2650, badge: "Bestseller", stars: 5, desc: "Prime undercut beef fillet grilled to your desired temperature, drizzled with our signature house special secret mushroom herb reduction", img: "photo-1544025162-d76694265947" },
    { id: 103, name: "New York Steak", price: 2550, badge: "Classic", stars: 5, desc: "Classic American style grilled beef steak with aromatic garlic butter sauce, crispy baked potato & seasoned greens", img: "photo-1546964124-0cce460f38ef" },
    { id: 104, name: "Chef Special Chicken Steak", price: 2150, badge: "Special", stars: 5, desc: "Marinated twin chicken breasts flame-grilled with creamy peppercorn and mushroom herb sauce", img: "photo-1532550907401-a500c9a57435" },
    { id: 105, name: "Twin Steak", price: 2850, badge: "Duo Feast", stars: 5, desc: "The ultimate combination of juicy grilled beef fillet and tender chicken breast with dual signature sauces", img: "photo-1558030006-450675393462" },
    { id: 106, name: "Moroccan Steak", price: 2450, badge: "Spicy", stars: 5, desc: "Tender grilled steak served in a zesty, creamy Moroccan sambal sauce with golden potato wedges", img: "photo-1544025162-d76694265947" },
    { id: 107, name: "Mexican Beef Steak", price: 2550, badge: "Hot", stars: 5, desc: "Fiery Mexican spiced beef fillet topped with sautéed jalapeños, onions, bell peppers & spicy salsa", img: "photo-1546964124-0cce460f38ef" },
    { id: 108, name: "Mushroom Steak", price: 2450, badge: "Creamy", stars: 5, desc: "Succulent steak smothered in a rich, velvety button mushroom cream sauce with steak fries", img: "photo-1544025162-d76694265947" },
    { id: 109, name: "Herb Beef Steak", price: 2500, badge: "Aromatic", stars: 4, desc: "Infused with fresh rosemary, thyme, cracked black pepper and melted compound garlic herb butter", img: "photo-1558030006-450675393462" },
  ],
  pastas: [
    { id: 201, name: "Chef Special Pasta", price: 1450, badge: "Popular", stars: 5, desc: "Fettuccine pasta tossed with tender grilled chicken strips, sun-dried herbs, and rich velvety creamy white cheese reduction", img: "photo-1621996346565-e3d5d6281724" },
    { id: 202, name: "Alfredo Delight", price: 1350, badge: "Bestseller", stars: 5, desc: "Classic Alfredo prepared with pure butter, parmesan, sautéed sliced mushrooms and grilled chicken chunks", img: "photo-1645112411341-6c4fd023714a" },
    { id: 203, name: "Chicken Kiev and Alfredo Pasta", price: 1750, badge: "Chef Pick", stars: 5, desc: "Signature crispy butter-stuffed Chicken Kiev served over a piping hot bed of creamy Alfredo fettuccine", img: "photo-1621996346565-e3d5d6281724" },
    { id: 204, name: "Chicken Penne Arrabiata", price: 1250, badge: "Spicy", stars: 4, desc: "Penne pasta tossed in a robust fiery Italian tomato sauce with garlic, chili flakes, basil and grilled chicken", img: "photo-1551183053-bf91a1d81141" },
    { id: 205, name: "Ultimate Lasagna", price: 1550, badge: "Must Try", stars: 5, desc: "Layers of pasta sheets baked with rich seasoned beef bolognese, béchamel and bubbling golden mozzarella cheese", img: "photo-1574894709920-11b28e7367e3" },
  ],
  continental: [
    { id: 301, name: "Chicken Kiev", price: 1650, badge: "Signature", stars: 5, desc: "Golden crumbed breast of chicken stuffed with cold herb garlic butter that bursts open when sliced, served with fries", img: "photo-1604908176997-125f25cc6f3d" },
    { id: 302, name: "Parmesan Chicken", price: 1550, badge: "Popular", stars: 5, desc: "Crisp breaded chicken fillet topped with marinara sauce, melted mozzarella and grated parmesan cheese", img: "photo-1632778149955-e80f8ceca2e8" },
    { id: 303, name: "Chicago Chicken", price: 1500, badge: "Special", stars: 4, desc: "Grilled chicken fillet smothered in a smoky Chicago BBQ cream sauce with cheese and grilled pineapple", img: "photo-1604908176997-125f25cc6f3d" },
    { id: 304, name: "Chicken Fingers", price: 850, badge: "Crispy", stars: 4, desc: "Crispy panko crumbed chicken strips served with house honey mustard and garlic mayo dip", img: "photo-1562967914-608f82629710" },
    { id: 305, name: "Finger Fish", price: 1100, badge: "Fresh", stars: 5, desc: "Golden fried tender sole fish fillets served with tartare sauce and lemon wedges", img: "photo-1580476262798-bddd9f4b7369" },
  ],
  burgers: [
    { id: 401, name: "Chicken Burger and Fries", price: 950, badge: "Popular", stars: 5, desc: "Crispy fried or grilled chicken breast with cheddar cheese, lettuce, pickles and special yard burger sauce", img: "photo-1568901346375-23c9450c58cd" },
    { id: 402, name: "Cheeseburger and Fries with Cheese", price: 1150, badge: "Bestseller", stars: 5, desc: "Juicy smashed prime beef patty topped with double molten cheddar cheese, caramelized onions and cheese lava fries", img: "photo-1568901346375-23c9450c58cd" },
    { id: 403, name: "Double Decker Beef Burger", price: 1450, badge: "Heavy", stars: 5, desc: "Two thick charbroiled beef patties, crispy beef bacon, swiss cheese, BBQ relish & giant onion ring", img: "photo-1568901346375-23c9450c58cd" },
    { id: 404, name: "Smokey BBQ Chicken Burger", price: 990, badge: "Smoky", stars: 4, desc: "Smoky flame-grilled chicken breast glazed with hickory BBQ sauce, cheddar cheese and coleslaw", img: "photo-1568901346375-23c9450c58cd" },
  ],
  chinese: [
    { id: 501, name: "Beef Chow Mein", price: 1150, badge: "Wok Special", stars: 5, desc: "Authentic wok-tossed egg noodles with tender beef slivers, spring onions, cabbage and aromatic soy glaze", img: "photo-1612927601601-6638404737ce" },
    { id: 502, name: "Beef Chilli Dry", price: 1350, badge: "Bestseller", stars: 5, desc: "Crispy beef strips tossed with green chilies, ginger and garlic in a dry spicy glaze, served with fried rice", img: "photo-1529692236671-f1f6cf9683ba" },
    { id: 503, name: "Chicken Fried Rice", price: 650, badge: "Classic", stars: 4, desc: "Fragrant wok-fried jasmine rice tossed with scrambled egg, shredded chicken and diced garden vegetables", img: "photo-1603133872878-684f208fb84b" },
    { id: 504, name: "Chicken Manchurian", price: 1100, badge: "Popular", stars: 5, desc: "Tender chicken cubes in tangy Indo-Chinese sweet & sour spicy red gravy, served with egg fried rice", img: "photo-1529692236671-f1f6cf9683ba" },
  ],
  sides: [
    { id: 601, name: "Loaded Fries", price: 850, badge: "Must Try", stars: 5, desc: "Crispy potato fries loaded with cheddar cheese sauce, grilled chicken bites, jalapeños and spicy ranch", img: "photo-1573080496219-bb080dd4f877" },
    { id: 602, name: "Buffalo Hot Wings", price: 750, badge: "Spicy", stars: 5, desc: "6 pcs tender chicken wings tossed in tangy cayenne buffalo pepper sauce, served with blue cheese dip", img: "photo-1527477396000-e27163b92c2e" },
    { id: 603, name: "Honey Mustard Wings", price: 750, badge: "Popular", stars: 4, desc: "6 pcs crispy wings glazed in sweet and tangy honey Dijon mustard glaze", img: "photo-1527477396000-e27163b92c2e" },
    { id: 604, name: "Garlic Mayo Fries", price: 450, badge: "", stars: 4, desc: "Golden fried French fries drizzled with homemade roasted garlic mayonnaise and parsley", img: "photo-1573080496219-bb080dd4f877" },
  ],
  beverages: [
    { id: 701, name: "Mint Margherita", price: 450, badge: "Bestseller", stars: 5, desc: "Refreshing crushed ice cooler blended with fresh garden mint leaves, lemon juice, sugar and sparkling soda", img: "photo-1513558161293-cdaf765ed2fd" },
    { id: 702, name: "Blueberry Margarita", price: 550, badge: "Special", stars: 5, desc: "Exotic chilled cooler bursting with real blueberry purée, zesty lime, crushed ice and bubbly soda", img: "photo-1551024709-8f23befc6f87" },
    { id: 703, name: "Strawberry Shot Cooler", price: 490, badge: "Popular", stars: 5, desc: "Vibrant sweet strawberry blend with a hint of tang, topped with crushed ice and fresh mint", img: "photo-1551024709-8f23befc6f87" },
    { id: 704, name: "Fresh Lime Soda", price: 280, badge: "", stars: 4, desc: "Classic freshly squeezed lime juice with sweet or salty soda water", img: "photo-1513558161293-cdaf765ed2fd" },
    { id: 705, name: "Soft Drink (Can)", price: 150, badge: "", stars: 5, desc: "330ml chilled Coca-Cola / Sprite / Fanta", img: "photo-1554866585-cd94860890b7" },
  ],
  desserts: [
    { id: 801, name: "Sizzling Brownie with Ice Cream", price: 850, badge: "Iconic", stars: 5, desc: "Decadent warm fudge walnut brownie served on a piping hot sizzler plate, crowned with vanilla ice cream & hot Belgian chocolate sauce", img: "photo-1551024709-8f23befc6f87" },
    { id: 802, name: "Molten Chocolate Lava Cake", price: 790, badge: "Popular", stars: 5, desc: "Warm baked chocolate cake with a molten chocolate center that flows freely on your spoon, served with vanilla scoop", img: "photo-1606313564200-e75d5e30476c" },
    { id: 803, name: "Classic New York Cheesecake", price: 750, badge: "Chef Pick", stars: 5, desc: "Rich and creamy Philadelphia style baked cheesecake on a buttery graham cracker crust with strawberry drizzle", img: "photo-1533134242443-d4fd215305ad" },
  ],
  deals: [
    { id: 901, name: "Twin Steak & Pasta Combo", price: 3850, badge: "Best Value", stars: 5, desc: "1 Peri Peri Steak + 1 Chef Special Pasta + 2 Mint Margheritas", img: "photo-1558030006-450675393462" },
    { id: 902, name: "Sizzler Platter for 2", price: 4200, badge: "DEAL", stars: 5, desc: "1 Chef Special Beef Steak + 1 Chicken Kiev + 1 Sizzling Brownie with Ice Cream + 2 Soft Drinks", img: "photo-1544025162-d76694265947" },
    { id: 903, name: "Grill Yard Family Feast", price: 7500, badge: "Feast", stars: 5, desc: "2 Signature Steaks (Beef & Chicken) + 1 Alfredo Pasta + 1 Beef Chow Mein + 1 Loaded Fries + 4 Mint Margheritas", img: "photo-1558030006-450675393462" },
  ],
};

export const popularItems = [
  { id: 101, name: "Peri Peri Steak", price: 2450, badge: "Popular", stars: 5, desc: "Grilled undercut beef or chicken fillet with fiery peri peri glaze & veggies", img: "photo-1558030006-450675393462" },
  { id: 201, name: "Chef Special Pasta", price: 1450, badge: "Bestseller", stars: 5, desc: "Fettuccine pasta with grilled chicken in rich creamy white cheese reduction", img: "photo-1621996346565-e3d5d6281724" },
  { id: 301, name: "Chicken Kiev", price: 1650, badge: "Signature", stars: 5, desc: "Crumbed chicken stuffed with bursting herb garlic butter and fries", img: "photo-1604908176997-125f25cc6f3d" },
  { id: 102, name: "Chef Special Beef Steak", price: 2650, badge: "Prime Cut", stars: 5, desc: "Prime undercut beef with house special secret mushroom herb reduction", img: "photo-1544025162-d76694265947" },
  { id: 701, name: "Mint Margherita", price: 450, badge: "Refreshing", stars: 5, desc: "Crushed ice cooler with fresh mint, lemon and sparkling soda", img: "photo-1513558161293-cdaf765ed2fd" },
  { id: 801, name: "Sizzling Brownie with Ice Cream", price: 850, badge: "Iconic", stars: 5, desc: "Warm fudge brownie on sizzling cast iron with vanilla ice cream and chocolate sauce", img: "photo-1551024709-8f23befc6f87" },
];

export const bestSteaks = [
  { id: 101, name: "Peri Peri Steak", price: 2450, badge: "Popular", stars: 5, desc: "Fiery peri peri glaze with mashed potatoes", img: "photo-1558030006-450675393462" },
  { id: 102, name: "Chef Special Beef Steak", price: 2650, badge: "Bestseller", stars: 5, desc: "Prime undercut with mushroom herb reduction", img: "photo-1544025162-d76694265947" },
  { id: 103, name: "New York Steak", price: 2550, badge: "Classic", stars: 5, desc: "American style steak with garlic herb butter", img: "photo-1546964124-0cce460f38ef" },
  { id: 104, name: "Chef Special Chicken Steak", price: 2150, badge: "Special", stars: 5, desc: "Flame-grilled chicken with peppercorn sauce", img: "photo-1532550907401-a500c9a57435" },
  { id: 105, name: "Twin Steak", price: 2850, badge: "Duo", stars: 5, desc: "Tender beef fillet & chicken breast combo", img: "photo-1558030006-450675393462" },
  { id: 106, name: "Moroccan Steak", price: 2450, badge: "Spicy", stars: 5, desc: "Zesty Moroccan sambal sauce with potato wedges", img: "photo-1544025162-d76694265947" },
  { id: 203, name: "Chicken Kiev and Alfredo Pasta", price: 1750, badge: "Chef Pick", stars: 5, desc: "Crispy butter-stuffed chicken over fettuccine alfredo", img: "photo-1621996346565-e3d5d6281724" },
  { id: 402, name: "Cheeseburger and Fries with Cheese", price: 1150, badge: "Popular", stars: 5, desc: "Prime smashed patty with molten cheddar and lava fries", img: "photo-1568901346375-23c9450c58cd" },
];

export const bestBurgers = bestSteaks;

export const getImageUrl = (imgId: string, width = 400) => 
  `https://images.unsplash.com/${imgId}?w=${width}&auto=format&fit=crop&q=80`;