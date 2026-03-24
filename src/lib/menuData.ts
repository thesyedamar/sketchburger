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
  "pakistani": [
    { id: 1, name: "Handi", price: 1599, badge: "Popular", stars: 5, desc: "White + Red", img: "photo-1565557623262-b51c2513a641" },
    { id: 2, name: "Karahi Chicken", price: 1599, badge: "", stars: 5, desc: "Traditional karahi gravy", img: "photo-1601050690597-df0568f7095a" },
  ],
  chinese: [
    { id: 3, name: "Chicken Fried Rice", price: 399, badge: "Bestseller", stars: 5, desc: "Wok-tossed with vegetables", img: "photo-1603133872878-684f208fb84b" },
    { id: 4, name: "Egg Fried Rice", price: 399, badge: "", stars: 4, desc: "Egg tossed in fried rice", img: "photo-1603133872878-684f208fb84b" },
    { id: 5, name: "Mnc Special Fried Rice", price: 449, badge: "Special", stars: 5, desc: "Special fried rice with chicken", img: "photo-1603133872878-684f208fb84b" },
    { id: 6, name: "Chowmein", price: 799, badge: "", stars: 4, desc: "Stir-fried noodles with veggies", img: "photo-1612927601601-6638404737ce" },
    { id: 7, name: "Chilli Dry", price: 999, badge: "", stars: 5, desc: "Spicy dry chicken", img: "photo-1529692236671-f1f6cf9683ba" },
  ],
  soups: [
    { id: 8, name: "Hot & Sour Soup", price: 150, badge: "", stars: 4, desc: "1 cup - Tangy and spicy", img: "photo-1547592166-23ac45744acd" },
    { id: 9, name: "Chicken Corn Soup", price: 150, badge: "", stars: 4, desc: "1 cup - Creamy corn soup", img: "photo-1547592166-23ac45744acd" },
  ],
  drinks: [
    { id: 10, name: "Regular Drink", price: 80, badge: "", stars: 5, desc: "500ml", img: "photo-1554866585-cd94860890b7" },
    { id: 11, name: "Cane", price: 120, badge: "", stars: 4, desc: "Sugar cane juice", img: "photo-1621263764928-df1444c5e859" },
    { id: 12, name: "Sting", price: 150, badge: "", stars: 4, desc: "Energy drink", img: "photo-1621263764928-df1444c5e859" },
    { id: 13, name: "1L Drink", price: 170, badge: "", stars: 5, desc: "1 Liter", img: "photo-1554866585-cd94860890b7" },
    { id: 14, name: "1.5L Drink", price: 200, badge: "Family", stars: 5, desc: "1.5 Liter", img: "photo-1554866585-cd94860890b7" },
    { id: 15, name: "Water (S)", price: 60, badge: "", stars: 5, desc: "Small bottle", img: "photo-1554866585-cd94860890b7" },
    { id: 16, name: "Water (L)", price: 100, badge: "", stars: 5, desc: "Large bottle", img: "photo-1554866585-cd94860890b7" },
  ],
  fries: [
    { id: 17, name: "Masala Fries", price: 299, badge: "Popular", stars: 5, desc: "Spiced fries", img: "photo-1573080496219-bb080dd4f877" },
    { id: 18, name: "Garlic Mayo Fries", price: 350, badge: "", stars: 5, desc: "Loaded with garlic mayo", img: "photo-1573080496219-bb080dd4f877" },
    { id: 19, name: "Family Fries", price: 599, badge: "Family", stars: 5, desc: "Large family pack", img: "photo-1573080496219-bb080dd4f877" },
    { id: 20, name: "Large Fries", price: 299, badge: "", stars: 4, desc: "Large portion", img: "photo-1573080496219-bb080dd4f877" },
    { id: 21, name: "Loaded Fries", price: 599, badge: "", stars: 5, desc: "Fully loaded toppings", img: "photo-1573080496219-bb080dd4f877" },
  ],
  sandwiches: [
    { id: 22, name: "Mnc Special", price: 500, badge: "Special", stars: 5, desc: "Special sandwich", img: "photo-1553909489-cd47e0907980" },
    { id: 23, name: "Tikka Sandwich", price: 350, badge: "", stars: 4, desc: "Chicken tikka filling", img: "photo-1553909489-cd47e0907980" },
    { id: 24, name: "Malai Tikka", price: 350, badge: "", stars: 4, desc: "Creamy malai chicken", img: "photo-1553909489-cd47e0907980" },
  ],
  salads: [
    { id: 25, name: "Russian Salad", price: 599, badge: "", stars: 4, desc: "Mix vegetables salad", img: "photo-1540420773420-3366772f4996" },
    { id: 26, name: "Penny Salad", price: 499, badge: "", stars: 4, desc: "Penny special salad", img: "photo-1540420773420-3366772f4996" },
    { id: 27, name: "American Salad", price: 499, badge: "", stars: 4, desc: "American style salad", img: "photo-1540420773420-3366772f4996" },
  ],
  pizzas: [
    { id: 28, name: "Crown Crust", price: 800, badge: "Popular", stars: 5, desc: "S/M/L sizes", img: "photo-1565299624946-b28f40a0ae38" },
    { id: 29, name: "Calazone", price: 800, badge: "", stars: 4, desc: "S/M/L sizes", img: "photo-1565299624946-b28f40a0ae38" },
    { id: 30, name: "Meat N Cheese Special", price: 800, badge: "Special", stars: 5, desc: "S/M/L sizes", img: "photo-1565299624946-b28f40a0ae38" },
    { id: 31, name: "Lazania", price: 800, badge: "", stars: 4, desc: "S/M/L sizes", img: "photo-1565299624946-b28f40a0ae38" },
    { id: 32, name: "Deep Pizza", price: 800, badge: "", stars: 4, desc: "S/M/L sizes", img: "photo-1565299624946-b28f40a0ae38" },
    { id: 33, name: "Chicken Supreme", price: 800, badge: "", stars: 5, desc: "S/M/L sizes", img: "photo-1565299624946-b28f40a0ae38" },
    { id: 34, name: "Chicken Fajita", price: 800, badge: "", stars: 5, desc: "S/M/L sizes", img: "photo-1565299624946-b28f40a0ae38" },
    { id: 35, name: "Tikka Pizza", price: 800, badge: "", stars: 4, desc: "S/M/L sizes", img: "photo-1565299624946-b28f40a0ae38" },
    { id: 36, name: "Bbq Pizza", price: 800, badge: "", stars: 5, desc: "S/M/L sizes", img: "photo-1565299624946-b28f40a0ae38" },
    { id: 37, name: "Cheese Lover", price: 800, badge: "", stars: 5, desc: "S/M/L sizes - Extra cheese", img: "photo-1565299624946-b28f40a0ae38" },
  ],
  wraps: [
    { id: 38, name: "Chicken Shawarma", price: 200, badge: "Bestseller", stars: 5, desc: "Classic chicken shawarma", img: "photo-1599487488170-d11ec9c172f0" },
    { id: 39, name: "Chicken Cheese Shawarma", price: 250, badge: "", stars: 5, desc: "With extra cheese", img: "photo-1599487488170-d11ec9c172f0" },
    { id: 40, name: "Zinger Shawarma", price: 350, badge: "Spicy", stars: 5, desc: "Crispy zinger filling", img: "photo-1599487488170-d11ec9c172f0" },
    { id: 41, name: "Arabian Shawarma", price: 350, badge: "", stars: 4, desc: "Arabian style", img: "photo-1599487488170-d11ec9c172f0" },
    { id: 42, name: "Paratha Roll", price: 250, badge: "", stars: 4, desc: "Paratha wrapped", img: "photo-1626700051175-6818013e1d4f" },
    { id: 43, name: "Zinger Paratha Roll", price: 350, badge: "Popular", stars: 5, desc: "Zinger in paratha", img: "photo-1626700051175-6818013e1d4f" },
    { id: 44, name: "Patty Paratha Roll", price: 350, badge: "", stars: 4, desc: "Beef patty in paratha", img: "photo-1626700051175-6818013e1d4f" },
    { id: 45, name: "Nugguts Paratha Roll", price: 300, badge: "", stars: 4, desc: "Chicken nuggets in paratha", img: "photo-1626700051175-6818013e1d4f" },
    { id: 46, name: "Special Wrap", price: 400, badge: "Special", stars: 5, desc: "Special recipe", img: "photo-1626700051175-6818013e1d4f" },
    { id: 47, name: "Crispy Wrap", price: 450, badge: "Hot Shot", stars: 5, desc: "Extra crispy - Hot shot", img: "photo-1626700051175-6818013e1d4f" },
    { id: 48, name: "Syberian Roll", price: 350, badge: "", stars: 4, desc: "Special syberian filling", img: "photo-1626700051175-6818013e1d4f" },
    { id: 49, name: "Pizza Roll", price: 550, badge: "", stars: 4, desc: "Pizza style roll", img: "photo-1626700051175-6818013e1d4f" },
    { id: 50, name: "Turkish Roll", price: 599, badge: "", stars: 5, desc: "2 pcs - Turkish style", img: "photo-1626700051175-6818013e1d4f" },
  ],
  burgers: [
    { id: 51, name: "Zinger Burger", price: 399, badge: "Bestseller", stars: 5, desc: "Crispy zinger patty", img: "photo-1568901346375-23c9450c58cd" },
    { id: 52, name: "Zinger Cheese", price: 449, badge: "Popular", stars: 5, desc: "Zinger with cheese", img: "photo-1568901346375-23c9450c58cd" },
    { id: 53, name: "American Special", price: 499, badge: "Special", stars: 5, desc: "American style special", img: "photo-1568901346375-23c9450c58cd" },
    { id: 54, name: "Tikka Burger", price: 399, badge: "", stars: 4, desc: "Chicken tikka patty", img: "photo-1568901346375-23c9450c58cd" },
    { id: 55, name: "Tikka Patty Burger", price: 499, badge: "", stars: 4, desc: "Extra tikka patty", img: "photo-1568901346375-23c9450c58cd" },
    { id: 56, name: "Chicken Patty", price: 349, badge: "", stars: 4, desc: "Simple chicken patty", img: "photo-1568901346375-23c9450c58cd" },
    { id: 57, name: "Tower Burger", price: 549, badge: "", stars: 5, desc: "Layered burger", img: "photo-1568901346375-23c9450c58cd" },
    { id: 58, name: "Double Decker Burger", price: 599, badge: "", stars: 5, desc: "Two patties double deck", img: "photo-1568901346375-23c9450c58cd" },
    { id: 59, name: "Pizza Burger", price: 599, badge: "", stars: 4, desc: "Pizza flavored burger", img: "photo-1568901346375-23c9450c58cd" },
    { id: 60, name: "Deep BBQ Burger", price: 449, badge: "", stars: 4, desc: "BBQ sauce loaded", img: "photo-1568901346375-23c9450c58cd" },
  ],
  fried: [
    { id: 61, name: "Hot Wings", price: 349, badge: "Popular", stars: 5, desc: "5pcs - Spicy wings", img: "photo-1527477396000-e27163b92c2e" },
    { id: 62, name: "BBQ Sauce Wings", price: 399, badge: "", stars: 5, desc: "5pcs - BBQ flavor", img: "photo-1527477396000-e27163b92c2e" },
    { id: 63, name: "Honey Mustard", price: 399, badge: "", stars: 4, desc: "5pcs - Honey mustard sauce", img: "photo-1527477396000-e27163b92c2e" },
    { id: 64, name: "Garlic Mayo", price: 399, badge: "", stars: 4, desc: "5pcs - Garlic mayo", img: "photo-1527477396000-e27163b92c2e" },
    { id: 65, name: "American Wings", price: 399, badge: "", stars: 4, desc: "5pcs - American style", img: "photo-1527477396000-e27163b92c2e" },
    { id: 66, name: "Buffalo Hot Wings", price: 399, badge: "Spicy", stars: 5, desc: "5pcs - Buffalo hot", img: "photo-1527477396000-e27163b92c2e" },
    { id: 67, name: "Hot Shots", price: 999, badge: "", stars: 5, desc: "15 pcs - Bulk pack", img: "photo-1527477396000-e27163b92c2e" },
    { id: 68, name: "Chicken Strips", price: 799, badge: "", stars: 4, desc: "6pcs - Chicken strips", img: "photo-1527477396000-e27163b92c2e" },
    { id: 69, name: "Special Hot Wings", price: 899, badge: "Special", stars: 5, desc: "10pcs - Special recipe", img: "photo-1527477396000-e27163b92c2e" },
  ],
  pastas: [
    { id: 70, name: "Red Pasta", price: 499, badge: "Popular", stars: 5, desc: "M/L - Tomato based", img: "photo-1473093295043-cdd812d0e291" },
    { id: 71, name: "White Pasta", price: 499, badge: "", stars: 5, desc: "M/L - Creamy white sauce", img: "photo-1473093295043-cdd812d0e291" },
    { id: 72, name: "Green Pasta", price: 499, badge: "", stars: 4, desc: "M/L - Herb sauce", img: "photo-1473093295043-cdd812d0e291" },
    { id: 73, name: "Alfredo Pasta", price: 499, badge: "", stars: 5, desc: "M/L - Alfredo sauce", img: "photo-1473093295043-cdd812d0e291" },
    { id: 74, name: "Crunchy Pasta", price: 499, badge: "", stars: 4, desc: "M/L - With crunchy toppings", img: "photo-1473093295043-cdd812d0e291" },
    { id: 75, name: "Cheesy Pasta", price: 499, badge: "Special", stars: 5, desc: "M/L - Extra cheese", img: "photo-1473093295043-cdd812d0e291" },
  ],
  deals: [
    { id: 76, name: "Deal 1", price: 0, badge: "DEAL", stars: 5, desc: "2 Zinger Burgers + 1 French Fries Reg + 500ml Drink (Coca-cola)", img: "photo-1568901346375-23c9450c58cd" },
    { id: 77, name: "Deal 1 Half", price: 0, badge: "DEAL", stars: 4, desc: "1 Zinger Burger + 1 French Fries Reg Half + 1 Can (Coca-cola)", img: "photo-1568901346375-23c9450c58cd" },
    { id: 78, name: "Super Deal 1 - Small", price: 2200, badge: "DEAL", stars: 5, desc: "3 Small Pizzas + 1Ltr Cold Drinks (Coca-cola)", img: "photo-1568901346375-23c9450c58cd" },
    { id: 79, name: "Super Deal 1 - Medium", price: 4100, badge: "DEAL", stars: 5, desc: "3 Medium Pizzas + 1.5Ltr Cold Drinks (Coca-cola)", img: "photo-1568901346375-23c9450c58cd" },
    { id: 80, name: "Super Deal 1 - Large", price: 5400, badge: "DEAL", stars: 5, desc: "3 Large Pizzas + 2 x 1.5Ltr Cold Drinks (Coca-cola)", img: "photo-1568901346375-23c9450c58cd" },
    { id: 81, name: "Family Deal 3", price: 3400, badge: "DEAL", stars: 5, desc: "6 Zinger Burgers + 15 Wings + 1.5Ltr Drink", img: "photo-1568901346375-23c9450c58cd" },
    { id: 82, name: "Family Deal 1", price: 4000, badge: "DEAL", stars: 5, desc: "2 Small Meet N Cheese Special Pizzas + 4 Zinger Burgers + 4 Chicken Pcs + 1.5Ltr Cold Drink", img: "photo-1568901346375-23c9450c58cd" },
    { id: 83, name: "Deal 1", price: 849, badge: "DEAL", stars: 5, desc: "1 Zinger Shawarma + 1 Zinger Parata Roll + 1 Regular Fries + 1 Regular Drink", img: "photo-1599487488170-d11ec9c172f0" },
    { id: 84, name: "Deal 2", price: 1100, badge: "DEAL", stars: 5, desc: "2 Paratha Roll + 2 Shawarmas + 1 Large Fries + 1 Drink", img: "photo-1599487488170-d11ec9c172f0" },
    { id: 85, name: "Deal 3", price: 3000, badge: "DEAL", stars: 5, desc: "2 Small Pizzas + 1 Pc Chicken Tikka Bbq + 2 Zinger Burgers + 10 Hot Wings + 1.5Ltr Cold Drink", img: "photo-1568901346375-23c9450c58cd" },
  ],
};

export const popularItems = [
  { id: 1, name: "Handi", price: 1599, badge: "Popular", stars: 5, desc: "White + Red", img: "photo-1565557623262-b51c2513a641" },
  { id: 3, name: "Chicken Fried Rice", price: 399, badge: "Bestseller", stars: 5, desc: "Wok-tossed with vegetables", img: "photo-1603133872878-684f208fb84b" },
  { id: 38, name: "Chicken Shawarma", price: 200, badge: "Bestseller", stars: 5, desc: "Classic chicken shawarma", img: "photo-1599487488170-d11ec9c172f0" },
  { id: 51, name: "Zinger Burger", price: 399, badge: "Bestseller", stars: 5, desc: "Crispy zinger patty", img: "photo-1568901346375-23c9450c58cd" },
  { id: 61, name: "Hot Wings", price: 349, badge: "Popular", stars: 5, desc: "5pcs - Spicy wings", img: "photo-1527477396000-e27163b92c2e" },
  { id: 30, name: "Meat N Cheese Special", price: 800, badge: "Special", stars: 5, desc: "S/M/L sizes", img: "photo-1565299624946-b28f40a0ae38" },
];

export const bestBurgers = [
  { id: 51, name: "Zinger Burger", price: 399, badge: "Bestseller", stars: 5, desc: "Crispy zinger patty", img: "photo-1568901346375-23c9450c58cd" },
  { id: 52, name: "Zinger Cheese", price: 449, badge: "Popular", stars: 5, desc: "Zinger with cheese", img: "photo-1568901346375-23c9450c58cd" },
  { id: 53, name: "American Special", price: 499, badge: "Special", stars: 5, desc: "American style special", img: "photo-1568901346375-23c9450c58cd" },
  { id: 57, name: "Tower Burger", price: 549, badge: "", stars: 5, desc: "Layered burger", img: "photo-1568901346375-23c9450c58cd" },
  { id: 58, name: "Double Decker Burger", price: 599, badge: "", stars: 5, desc: "Two patties double deck", img: "photo-1568901346375-23c9450c58cd" },
  { id: 43, name: "Zinger Paratha Roll", price: 350, badge: "Popular", stars: 5, desc: "Zinger in paratha", img: "photo-1626700051175-6818013e1d4f" },
  { id: 28, name: "Crown Crust", price: 800, badge: "Popular", stars: 5, desc: "S/M/L sizes", img: "photo-1565299624946-b28f40a0ae38" },
  { id: 17, name: "Masala Fries", price: 299, badge: "Popular", stars: 5, desc: "Spiced fries", img: "photo-1573080496219-bb080dd4f877" },
];

export const getImageUrl = (imgId: string, width = 400) => 
  `https://images.unsplash.com/${imgId}?w=${width}&auto=format&fit=crop&q=80`;