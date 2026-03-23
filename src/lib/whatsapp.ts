interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
}

export function buildWhatsAppURL(items: CartItem[], total: number): string {
  const header =
    "Hi! I'd like to order from *SKETCH BURGER* (Dargai):\n\n";
  const lines = items.map(
    (i) =>
      `• ${i.qty}x ${i.name} — PKR ${(i.price * i.qty).toLocaleString()}`
  ).join("\n");
  const footer =
    `\n\n*Total: PKR ${total.toLocaleString()}*` +
    `\n\nPlease confirm. JazakAllah! 🙏`;
  return (
    "https://wa.me/923411175466?text=" +
    encodeURIComponent(header + lines + footer)
  );
}