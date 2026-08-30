import { useState } from 'react';
import DemoNavbar from '@/components/DemoNavbar';
import DemoFooter from '@/components/DemoFooter';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { waLink } from '@/data/site';
import { ShoppingBag, X, Plus, Minus, ArrowLeft, ArrowRight, Check, Search, Tag, Truck, Shield } from 'lucide-react';
import DemoImage from '@/components/DemoImage';
import { demoImages } from '@/data/demoImages';

const ACCENT = '#7C3AED';
const BRAND = 'Lumen Store';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Shop', href: '#shop' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  desc: string;
  variants?: string[];
  colors?: string[];
};

const products: Product[] = [
  { id: 1, name: 'Minimalist Watch', category: 'Accessories', price: 199, desc: 'A sleek timepiece with a stainless steel case and sapphire crystal.', variants: ['38mm', '42mm'], colors: ['Silver', 'Black', 'Gold'] },
  { id: 2, name: 'Leather Backpack', category: 'Bags', price: 149, desc: 'Handcrafted full-grain leather backpack with laptop compartment.', colors: ['Tan', 'Black', 'Brown'] },
  { id: 3, name: 'Wireless Earbuds', category: 'Electronics', price: 99, desc: 'Premium sound with active noise cancellation and 30-hour battery.', colors: ['White', 'Black'] },
  { id: 4, name: 'Ceramic Mug Set', category: 'Home', price: 39, desc: 'Set of 4 handcrafted ceramic mugs in matte finish.', colors: ['White', 'Sage', 'Terracotta'] },
  { id: 5, name: 'Linen Shirt', category: 'Apparel', price: 79, desc: 'Breathable linen shirt with a relaxed fit.', variants: ['S', 'M', 'L', 'XL'], colors: ['White', 'Blue', 'Olive'] },
  { id: 6, name: 'Desk Lamp', category: 'Home', price: 89, desc: 'Adjustable LED desk lamp with warm and cool light modes.', colors: ['Black', 'White'] },
  { id: 7, name: 'Sunglasses', category: 'Accessories', price: 59, desc: 'UV-400 polarized lenses with a lightweight frame.', colors: ['Black', 'Tortoise', 'Clear'] },
  { id: 8, name: 'Canvas Tote', category: 'Bags', price: 29, desc: 'Durable organic cotton tote bag with reinforced straps.', colors: ['Natural', 'Black', 'Olive'] },
  { id: 9, name: 'Running Shoes', category: 'Apparel', price: 129, desc: 'Lightweight performance running shoes with breathable mesh.', variants: ['7', '8', '9', '10', '11'], colors: ['Black', 'White', 'Blue'] },
  { id: 10, name: 'Smart Speaker', category: 'Electronics', price: 179, desc: 'Voice-controlled smart speaker with premium 360-degree sound.', colors: ['Charcoal', 'White'] },
  { id: 11, name: 'Wool Throw Blanket', category: 'Home', price: 69, desc: 'Soft merino wool throw blanket, perfect for cozy evenings.', colors: ['Cream', 'Gray', 'Rust'] },
  { id: 12, name: 'Leather Wallet', category: 'Accessories', price: 49, desc: 'Slim bifold wallet in full-grain leather with RFID protection.', colors: ['Brown', 'Black', 'Tan'] },
];

const categories = ['All', 'Accessories', 'Bags', 'Electronics', 'Home', 'Apparel'];

export default function EcommerceDemo() {
  const [cart, setCart] = useState<{ product: Product; qty: number; variant?: string; color?: string }[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filter, setFilter] = useState('All');
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const addToCart = (product: Product, variant?: string, color?: string) => {
    setCart((c) => {
      const existing = c.find((item) => item.product.id === product.id && item.variant === variant && item.color === color);
      if (existing) return c.map((item) => item === existing ? { ...item, qty: item.qty + 1 } : item);
      return [...c, { product, qty: 1, variant, color }];
    });
    setCartOpen(true);
  };

  const updateQty = (idx: number, delta: number) => {
    setCart((c) => c.map((item, i) => i === idx ? { ...item, qty: Math.max(1, item.qty + delta) } : item));
  };

  const removeItem = (idx: number) => setCart((c) => c.filter((_, i) => i !== idx));

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.qty * item.product.price, 0);
  const filtered = filter === 'All' ? products : products.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-[#faf8fc]">
      <DemoNavbar brand={BRAND} accent={ACCENT} links={navLinks} ctaLabel="Cart" onCta={() => setCartOpen(true)} category="E-COMMERCE" />

      {/* Hero */}
      <section id="home" className="relative overflow-hidden py-16 md:py-24">
        <DemoImage src={demoImages.ecommerce.images.hero} alt="Online shopping" className="absolute inset-0 h-full w-full" fallbackGradient="from-violet-50 to-purple-50" eager />
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/90 to-purple-100/85" />
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 text-center">
          <span className="inline-block rounded-full bg-violet-100 px-4 py-1.5 text-xs font-semibold text-violet-700">TRYSONVEX DEMO CONCEPT</span>
          <h1 className="mt-4 text-4xl font-black text-gray-900 md:text-5xl lg:text-6xl">Designed for Modern Living.</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">Curated essentials with clean design and lasting quality.</p>
          <a href="#shop" className="mt-8 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white transition hover:brightness-110" style={{ background: ACCENT }}>
            Shop Now <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Categories */}
      <section id="shop" className="py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((c) => (
              <button key={c} onClick={() => setFilter(c)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${filter === c ? 'text-white' : 'border border-gray-200 bg-white text-gray-600 hover:bg-gray-50'}`}
                style={filter === c ? { background: ACCENT } : {}}>
                {c}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((p) => (
              <div key={p.id} className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white transition hover:shadow-lg" onClick={() => setSelectedProduct(p)}>
                <DemoImage src={demoImages.ecommerce.images.extra![`p${p.id}` as string] ?? demoImages.ecommerce.images.gallery[0]} alt={p.name} className="relative aspect-square w-full" fallbackGradient="from-violet-100 to-purple-100">
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-white/80 px-2.5 py-1 text-xs font-semibold text-violet-700">{p.category}</span>
                </DemoImage>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900">{p.name}</h3>
                  <p className="mt-1 text-sm text-gray-400 line-clamp-1">{p.desc}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-lg font-black text-gray-900">${p.price}</span>
                    <button onClick={(e) => { e.stopPropagation(); addToCart(p); }}
                      className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-xs font-bold text-white transition hover:brightness-110" style={{ background: ACCENT }}>
                      <ShoppingBag className="h-3.5 w-3.5" /> Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="flex items-center gap-4 rounded-2xl border border-gray-100 p-5"><Truck className="h-8 w-8 text-violet-600" /><div><p className="font-bold text-gray-900">Free Shipping</p><p className="text-sm text-gray-400">On orders over $50</p></div></div>
            <div className="flex items-center gap-4 rounded-2xl border border-gray-100 p-5"><Shield className="h-8 w-8 text-violet-600" /><div><p className="font-bold text-gray-900">Secure Checkout</p><p className="text-sm text-gray-400">Protected payment</p></div></div>
            <div className="flex items-center gap-4 rounded-2xl border border-gray-100 p-5"><Tag className="h-8 w-8 text-violet-600" /><div><p className="font-bold text-gray-900">Best Prices</p><p className="text-sm text-gray-400">Quality guaranteed</p></div></div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-3xl font-black text-gray-900 md:text-4xl">About Lumen Store</h2>
          <p className="mt-4 text-gray-600">Lumen Store is a demo concept by TRYSONVEX showcasing a complete e-commerce experience — product grid, product detail, cart, and checkout. No real payments are processed. This is a demonstration only.</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <div className="rounded-3xl bg-gradient-to-br from-violet-600 to-purple-700 p-10 text-white md:p-16">
            <h2 className="text-3xl font-black md:text-4xl">Want a Store Like This?</h2>
            <p className="mt-4 text-white/80">TRYSONVEX can build your complete e-commerce website.</p>
            <a href={waLink('Hi TRYSONVEX, I would like an e-commerce website like the Lumen Store demo.')} target="_blank" rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold text-white transition hover:brightness-110">
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      <DemoFooter brand={BRAND} accent={ACCENT} />
      <FloatingWhatsApp message="Hi, I found Lumen Store (TRYSONVEX demo) and have a question." />

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-[200] flex justify-end bg-black/40" onClick={() => setCartOpen(false)}>
          <div className="flex h-full w-full max-w-md flex-col bg-white" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
              <h3 className="text-lg font-black text-gray-900">Your Cart ({cartCount})</h3>
              <button onClick={() => setCartOpen(false)}><X className="h-5 w-5 text-gray-400" /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-5">
              {cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <ShoppingBag className="h-12 w-12 text-gray-300" />
                  <p className="mt-4 text-gray-400">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item, idx) => (
                    <div key={idx} className="flex gap-3 rounded-2xl border border-gray-100 p-3">
                      <DemoImage src={demoImages.ecommerce.images.extra![`p${item.product.id}` as string] ?? demoImages.ecommerce.images.gallery[0]} alt={item.product.name} className="h-16 w-16 flex-shrink-0 rounded-xl" fallbackGradient="from-violet-100 to-purple-100" />
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">{item.product.name}</h4>
                        {item.variant && <p className="text-xs text-gray-400">Size: {item.variant}</p>}
                        {item.color && <p className="text-xs text-gray-400">Color: {item.color}</p>}
                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button onClick={() => updateQty(idx, -1)} className="rounded-lg border border-gray-200 p-1"><Minus className="h-3 w-3" /></button>
                            <span className="text-sm font-semibold">{item.qty}</span>
                            <button onClick={() => updateQty(idx, 1)} className="rounded-lg border border-gray-200 p-1"><Plus className="h-3 w-3" /></button>
                          </div>
                          <span className="font-bold text-gray-900">${item.qty * item.product.price}</span>
                        </div>
                      </div>
                      <button onClick={() => removeItem(idx)} className="text-gray-300 hover:text-red-500"><X className="h-4 w-4" /></button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {cart.length > 0 && (
              <div className="border-t border-gray-100 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="text-2xl font-black text-gray-900">${cartTotal}</span>
                </div>
                <button onClick={() => { setCartOpen(false); setCheckoutOpen(true); }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white transition hover:brightness-110" style={{ background: ACCENT }}>
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Product Detail */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-5" onClick={() => setSelectedProduct(null)}>
          <div className="w-full max-w-3xl overflow-hidden rounded-3xl bg-white" onClick={(e) => e.stopPropagation()}>
            <div className="grid gap-6 md:grid-cols-2">
              <DemoImage src={demoImages.ecommerce.images.extra![`p${selectedProduct.id}` as string] ?? demoImages.ecommerce.images.gallery[0]} alt={selectedProduct.name} className="aspect-square w-full" fallbackGradient="from-violet-100 to-purple-100" />
              <div className="p-6">
                <button onClick={() => setSelectedProduct(null)} className="mb-4 inline-flex items-center gap-1 text-sm text-gray-400"><ArrowLeft className="h-4 w-4" /> Close</button>
                <span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-700">{selectedProduct.category}</span>
                <h2 className="mt-3 text-2xl font-black text-gray-900">{selectedProduct.name}</h2>
                <p className="mt-2 text-gray-500">{selectedProduct.desc}</p>
                <p className="mt-4 text-3xl font-black text-gray-900">${selectedProduct.price}</p>
                {selectedProduct.variants && (
                  <div className="mt-4">
                    <p className="text-xs font-semibold text-gray-500">Size</p>
                    <div className="mt-2 flex gap-2">
                      {selectedProduct.variants.map((v) => (
                        <button key={v} className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:border-violet-500">{v}</button>
                      ))}
                    </div>
                  </div>
                )}
                {selectedProduct.colors && (
                  <div className="mt-4">
                    <p className="text-xs font-semibold text-gray-500">Color</p>
                    <div className="mt-2 flex gap-2">
                      {selectedProduct.colors.map((c) => (
                        <button key={c} className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:border-violet-500">{c}</button>
                      ))}
                    </div>
                  </div>
                )}
                <button onClick={() => { addToCart(selectedProduct); setSelectedProduct(null); }}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white transition hover:brightness-110" style={{ background: ACCENT }}>
                  <ShoppingBag className="h-4 w-4" /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Checkout */}
      {checkoutOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-5" onClick={() => setCheckoutOpen(false)}>
          <div className="w-full max-w-md rounded-3xl bg-white p-8" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-black text-gray-900">Checkout</h3>
            <div className="mt-4 rounded-xl bg-amber-50 p-4 text-sm text-amber-700">
              <strong>Demo Notice:</strong> This is a TRYSONVEX demo. No real payments are processed. Checkout is for demonstration only.
            </div>
            <div className="mt-6 space-y-3">
              <input className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-violet-500 focus:outline-none" placeholder="Full Name" />
              <input className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-violet-500 focus:outline-none" placeholder="Address" />
              <input className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-violet-500 focus:outline-none" placeholder="Card Number (disabled)" disabled />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="font-semibold text-gray-900">Total</span>
              <span className="text-2xl font-black text-gray-900">${cartTotal}</span>
            </div>
            <button disabled className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gray-300 px-6 py-3.5 text-sm font-bold text-gray-500 cursor-not-allowed">
              <Check className="h-4 w-4" /> Payment Disabled (Demo)
            </button>
            <button onClick={() => setCheckoutOpen(false)} className="mt-2 w-full text-sm text-gray-400">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
