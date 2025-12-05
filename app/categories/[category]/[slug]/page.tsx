import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, Check, Share2, Ruler } from "lucide-react";
import { notFound } from "next/navigation";

// --- 1. SHARED DATA (Same as your Mega Menu) ---
const categoriesData = [
  {
    title: "Ethnic Wear",
    items: [
      "Suit Sets",
      "Sharara Sets",
      "Anarkali Suits",
      "Dhoti Suits",
      "Palazzo Suits",
      "Crop Top Sets",
    ],
  },
  {
    title: "Sarees",
    items: ["Organza", "Tissue", "Satin", "Ruffle", "Net", "Custom Embroidery"],
  },
  {
    title: "Blouses",
    items: [
      "Bridal Blouses",
      "Silk Blouses",
      "Backless",
      "Ruffle",
      "Sleeveless",
      "Plain Blouses",
    ],
  },
  {
    title: "Indo-Western",
    items: ["Co-ord Sets", "Gowns", "Jumpsuits", "Jacket Sets", "Cape Sets"],
  },
  {
    title: "Lehengas",
    items: ["Ruffle", "Festive", "Georgette", "Organza", "Satin", "Draped"],
  },
  {
    title: "Wedding Tailoring",
    items: [
      "Engagement",
      "Shaadi",
      "Mehendi",
      "Haldi",
      "Cocktail",
      "Reception",
      "Sangeet",
    ],
  },
];

// Helper to clean strings for URLs (e.g., "Silk Blouses" -> "silk-blouses")
const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, "-");

// --- 2. GENERATE STATIC PARAMS (The Fix) ---
// This loops through ALL data to tell Next.js which pages to build
export function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];

  categoriesData.forEach((cat) => {
    cat.items.forEach((item) => {
      params.push({
        category: slugify(cat.title), // e.g., 'blouses'
        slug: slugify(item), // e.g., 'silk-blouses'
      });
    });
  });

  return params;
}

// --- 3. GET DATA LOGIC ---
const getProductDetails = (categorySlug: string, itemSlug: string) => {
  // Find the category object
  const category = categoriesData.find(
    (c) => slugify(c.title) === categorySlug
  );
  if (!category) return null;

  // Check if item exists in that category
  const itemExists = category.items.some((item) => slugify(item) === itemSlug);
  if (!itemExists) return null;

  // Format titles for display
  const title = itemSlug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  const catTitle = categorySlug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  // Return generic product data (You would fetch real DB data here in future)
  return {
    name: `Custom ${title}`,
    category: catTitle,
    price: "₹12,999",
    description: `Experience the elegance of our hand-crafted ${title}. Designed for the modern woman who cherishes tradition, this piece features intricate detailing and premium fabric, customized exactly to your measurements.`,
    features: [
      "Premium Fabric Quality",
      "Custom Tailored Fit",
      "Intricate Hand Embroidery",
      "Available in Multiple Colors",
      "Includes Matching Accessories",
    ],
    // Image logic: swap based on category to make it look real
    image:
      categorySlug === "sarees"
        ? "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1200"
        : "https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1574773/pexels-photo-1574773.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  };
};

export default function ProductDetailPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const product = getProductDetails(params.category, params.slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen pb-20">
        {/* Breadcrumb */}
        <div className="bg-luxury-cream py-4">
          <div className="container mx-auto px-4 flex items-center text-sm text-luxury-maroon/70">
            <Link href="/" className="hover:text-luxury-maroon">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              href={`/categories/${params.category}`}
              className="hover:text-luxury-maroon"
            >
              {product.category}
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-luxury-maroon">
              {product.name}
            </span>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 lg:py-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* LEFT COLUMN: Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gray-100 border border-gray-200 shadow-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-4 right-4 p-3 bg-white/90 rounded-full hover:bg-luxury-gold hover:text-white transition-colors shadow-md text-luxury-maroon">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {product.gallery.map((img, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-md overflow-hidden border border-gray-200 cursor-pointer hover:border-luxury-gold hover:opacity-80 transition-all"
                  >
                    <img
                      src={img}
                      alt="Detail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: Product Details */}
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <h1 className="font-serif text-4xl lg:text-5xl font-bold text-luxury-maroon mb-2">
                  {product.name}
                </h1>
                <p className="text-luxury-maroon/60 text-lg">
                  {product.category} Collection
                </p>
              </div>

              <div className="mb-8">
                <p className="text-3xl text-luxury-gold font-bold mb-4">
                  Starting from {product.price}
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {product.description}
                </p>
              </div>

              {/* Features List */}
              <div className="bg-luxury-cream/50 p-6 rounded-lg mb-8 border border-luxury-gold/20">
                <h3 className="font-serif text-lg font-bold text-luxury-maroon mb-4">
                  Why choose this style?
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-luxury-maroon/80"
                    >
                      <Check className="w-5 h-5 text-luxury-gold mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="mt-auto space-y-4">
                <Link href="/consult" className="block">
                  <Button className="w-full h-14 text-lg bg-luxury-maroon hover:bg-luxury-maroon/90 text-white rounded-none">
                    Book Consultation For This Look
                  </Button>
                </Link>

                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="h-12 border-luxury-maroon text-luxury-maroon hover:bg-luxury-cream"
                  >
                    <Ruler className="w-4 h-4 mr-2" /> Size Guide
                  </Button>
                  <Button
                    variant="outline"
                    className="h-12 border-luxury-maroon text-luxury-maroon hover:bg-luxury-cream"
                  >
                    <Share2 className="w-4 h-4 mr-2" /> Share Design
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
