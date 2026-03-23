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
  burgers: [
    { id: 1, name: "Smash Burger", price: 550, badge: "Bestseller", stars: 5, desc: "Crispy smashed patty, special sauce, pickles", img: "photo-1568901346375-23c9450c58cd" },
    { id: 2, name: "Cheese Burger", price: 480, badge: "", stars: 5, desc: "Double cheddar, caramelized onions, mustard", img: "photo-1550547660-d9450f859349" },
    { id: 3, name: "Double Stack", price: 750, badge: "Popular", stars: 5, desc: "Two patties, pepper jack, jalapeños", img: "photo-1594212699903-ec8a3eca50f5" },
    { id: 4, name: "BBQ Crunch", price: 620, badge: "", stars: 4, desc: "Smoky BBQ sauce, crispy onion rings", img: "photo-1561758033-d89a9ad46330" },
  ],
  rolls: [
    { id: 5, name: "Chicken Roll", price: 320, badge: "", stars: 5, desc: "Grilled chicken, garlic sauce, fresh veg", img: "photo-1626700051175-6818013e1d4f" },
    { id: 6, name: "Beef Seekh Roll", price: 380, badge: "Spicy", stars: 5, desc: "Seekh kebab, green chutney, onions", img: "photo-1565299507177-b0ac66763828" },
    { id: 7, name: "Zinger Roll", price: 350, badge: "", stars: 4, desc: "Crispy zinger fillet, coleslaw, sriracha", img: "photo-1599487488170-d11ec9c172f0" },
    { id: 8, name: "Veggie Roll", price: 280, badge: "", stars: 4, desc: "Mixed vegetables, hummus, fresh herbs", img: "photo-1553979459-d2229ba7433b" },
  ],
  pizza: [
    { id: 9, name: "Margherita", price: 850, badge: "Classic", stars: 5, desc: "Tomato sauce, mozzarella, basil", img: "photo-1574071318508-1cdbab80d002" },
    { id: 10, name: "Pepperoni", price: 950, badge: "Popular", stars: 5, desc: "Loaded pepperoni, extra cheese", img: "photo-1628840042765-356cda07504e" },
    { id: 11, name: "BBQ Chicken", price: 1100, badge: "", stars: 4, desc: "BBQ base, grilled chicken, red onion", img: "photo-1565299624946-b28f40a0ae38" },
    { id: 12, name: "Veggie Supreme", price: 900, badge: "", stars: 4, desc: "Bell peppers, mushrooms, olives", img: "photo-1513104890138-7c749659a591" },
  ],
  sandwiches: [
    { id: 13, name: "Club Sandwich", price: 450, badge: "", stars: 4, desc: "Triple decker, chicken, egg, lettuce", img: "photo-1553909489-cd47e0907980" },
    { id: 14, name: "Grilled Chicken", price: 420, badge: "", stars: 5, desc: "Herb chicken, avocado, tomato", img: "photo-1528735602780-2552fd46c7af" },
    { id: 15, name: "Crispy Beef", price: 480, badge: "", stars: 4, desc: "Crispy beef strips, horseradish mayo", img: "photo-1509722747041-616f39b57569" },
    { id: 16, name: "Veggie Deluxe", price: 380, badge: "", stars: 4, desc: "Falafel, tzatziki, cucumber", img: "photo-1539252554453-80ab65ce3586" },
  ],
  drinks: [
    { id: 17, name: "Coca Cola", price: 120, badge: "", stars: 5, desc: "Ice cold 500ml bottle", img: "photo-1554866585-cd94860890b7" },
    { id: 18, name: "Mango Shake", price: 220, badge: "Seasonal", stars: 5, desc: "Fresh mango, cream, crushed ice", img: "photo-1546173159-315724a31696" },
    { id: 19, name: "Fresh Lime Soda", price: 150, badge: "", stars: 4, desc: "Squeezed lime, mint, soda", img: "photo-1621263764928-df1444c5e859" },
    { id: 20, name: "Strawberry Shake", price: 240, badge: "", stars: 5, desc: "Real strawberries, vanilla ice cream", img: "photo-1572490122747-3968b75cc699" },
  ],
  desserts: [
    { id: 21, name: "Choco Brownie", price: 280, badge: "Chef's Pick", stars: 5, desc: "Warm fudge brownie, vanilla ice cream", img: "photo-1606313564200-e75d5e30476c" },
    { id: 22, name: "Cheesecake Slice", price: 320, badge: "", stars: 5, desc: "NY-style, strawberry compote", img: "photo-1567171466295-4afa63d45416" },
    { id: 23, name: "Ice Cream", price: 180, badge: "", stars: 4, desc: "Two scoops, waffle cone", img: "photo-1563805042-7684c019e1cb" },
    { id: 24, name: "Molten Lava", price: 340, badge: "", stars: 5, desc: "Warm chocolate lava, cocoa dusting", img: "photo-1488477181946-6428a0291777" },
  ],
  deals: [
    { id: 25, name: "Family Deal", price: 1800, badge: "DEAL", stars: 5, desc: "4 burgers + 4 drinks + 2 fries", img: "photo-1568901346375-23c9450c58cd" },
    { id: 26, name: "Duo Combo", price: 1100, badge: "DEAL", stars: 5, desc: "2 smash burgers + 2 drinks", img: "photo-1550547660-d9450f859349" },
    { id: 27, name: "Roll Combo", price: 750, badge: "DEAL", stars: 4, desc: "2 rolls + 1 drink + fries", img: "photo-1626700051175-6818013e1d4f" },
    { id: 28, name: "Pizza Deal", price: 1400, badge: "DEAL", stars: 5, desc: "1 large pizza + 2 drinks", img: "photo-1628840042765-356cda07504e" },
  ],
};

export const popularItems = [
  { id: 17, name: "Water Bottle", price: 80, badge: "", stars: 5, desc: "500ml refreshing water", img: "photo-1554866585-cd94860890b7" },
  { id: 12, name: "Veggie Lover", price: 750, badge: "Popular", stars: 5, desc: "Loaded vegetables, extra cheese", img: "photo-1574071318508-1cdbab80d002" },
  { id: 19, name: "Tropicana Juice", price: 150, badge: "", stars: 4, desc: "Fresh orange juice", img: "photo-1621263764928-df1444c5e859" },
  { id: 2, name: "The Cheese", price: 480, badge: "Bestseller", stars: 5, desc: "Double cheddar, caramelized onions", img: "photo-1550547660-d9450f859349" },
  { id: 1, name: "Smash Burger", price: 550, badge: "", stars: 5, desc: "Crispy smashed patty, special sauce", img: "photo-1568901346375-23c9450c58cd" },
  { id: 7, name: "Zinger Roll", price: 350, badge: "", stars: 4, desc: "Crispy zinger fillet, coleslaw", img: "photo-1599487488170-d11ec9c172f0" },
];

export const bestBurgers = [
  { id: 1, name: "Smash Burger", price: 550, badge: "Bestseller", stars: 5, desc: "Crispy smashed patty, special sauce", img: "photo-1568901346375-23c9450c58cd" },
  { id: 2, name: "Cheese Burger", price: 480, badge: "", stars: 5, desc: "Double cheddar, caramelized onions", img: "photo-1550547660-d9450f859349" },
  { id: 4, name: "BBQ Crunch", price: 620, badge: "", stars: 4, desc: "Smoky BBQ sauce, crispy onion rings", img: "photo-1561758033-d89a9ad46330" },
  { id: 3, name: "Double Stack", price: 750, badge: "Popular", stars: 5, desc: "Two patties, pepper jack, jalapeños", img: "photo-1594212699903-ec8a3eca50f5" },
  { id: 7, name: "Zinger Roll", price: 350, badge: "", stars: 4, desc: "Crispy zinger fillet, coleslaw", img: "photo-1599487488170-d11ec9c172f0" },
  { id: 5, name: "Chicken Roll", price: 320, badge: "", stars: 5, desc: "Grilled chicken, garlic sauce", img: "photo-1626700051175-6818013e1d4f" },
  { id: 9, name: "Margherita", price: 850, badge: "Classic", stars: 5, desc: "Tomato sauce, mozzarella, basil", img: "photo-1574071318508-1cdbab80d002" },
  { id: 18, name: "Mango Shake", price: 220, badge: "Seasonal", stars: 5, desc: "Fresh mango, cream, crushed ice", img: "photo-1546173159-315724a31696" },
];

export const getImageUrl = (imgId: string, width = 400) => 
  `https://images.unsplash.com/${imgId}?w=${width}&auto=format&fit=crop&q=80`;