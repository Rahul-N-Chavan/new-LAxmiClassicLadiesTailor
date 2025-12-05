'use client';

import Link from 'next/link';

interface MegaMenuProps {
  type: 'categories' | 'collections';
  onClose: () => void;
}

const categoriesData = [
  {
    title: 'Ethnic Wear',
    items: [
      'Suit Sets',
      'Sharara Sets',
      'Anarkali Suits',
      'Dhoti Suits',
      'Palazzo Suits',
      'Crop Top Sets',
    ],
  },
  {
    title: 'Sarees',
    items: [
      'Organza',
      'Tissue',
      'Satin',
      'Ruffle',
      'Net',
      'Custom Embroidery',
    ],
  },
  {
    title: 'Blouses',
    items: [
      'Bridal Blouses',
      'Silk Blouses',
      'Backless',
      'Ruffle',
      'Sleeveless',
      'Plain Blouses',
    ],
  },
  {
    title: 'Indo-Western',
    items: [
      'Co-ord Sets',
      'Gowns',
      'Jumpsuits',
      'Jacket Sets',
      'Cape Sets',
    ],
  },
  {
    title: 'Lehengas',
    items: [
      'Ruffle',
      'Festive',
      'Georgette',
      'Organza',
      'Satin',
      'Draped',
    ],
  },
  {
    title: 'Wedding Tailoring',
    items: [
      'Engagement',
      'Shaadi',
      'Mehendi',
      'Haldi',
      'Cocktail',
      'Reception',
      'Sangeet',
    ],
  },
];

const collectionsData = [
  {
    title: 'Seasonal & Custom',
    items: [
      'Top Picks For You',
      'Punjabi Style',
      'Velvet Collection',
      'Our Custom Design Gallery',
    ],
  },
];

export default function MegaMenu({ type, onClose }: MegaMenuProps) {
  const data = type === 'categories' ? categoriesData : collectionsData;

  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-screen bg-white border-t border-gray-200 shadow-xl animate-fade-in">
      <div className="container mx-auto px-4 py-12">
        <div className={`grid ${type === 'categories' ? 'grid-cols-3 lg:grid-cols-6' : 'grid-cols-1 lg:grid-cols-4'} gap-8`}>
          {data.map((column, index) => (
            <div key={index}>
              <h3 className="font-serif text-lg font-bold text-luxury-maroon mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      href={`/${type}/${column.title.toLowerCase().replace(/\s+/g, '-')}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-luxury-maroon/70 hover:text-luxury-gold transition-colors block"
                      onClick={onClose}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {type === 'categories' && (
          <div className="mt-12 p-6 bg-luxury-cream rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-serif text-base font-bold text-luxury-maroon mb-2">
                  Custom Tailoring
                </h4>
                <p className="text-sm text-luxury-maroon/70 mb-3">
                  Experience the perfect fit with our expert tailoring services
                </p>
                <Link
                  href="/consult"
                  className="text-sm text-luxury-gold hover:underline font-medium"
                  onClick={onClose}
                >
                  Book Consultation →
                </Link>
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-luxury-maroon mb-2">
                  Design Gallery
                </h4>
                <p className="text-sm text-luxury-maroon/70 mb-3">
                  Browse our collection of custom designs and inspirations
                </p>
                <Link
                  href="/collections/custom-gallery"
                  className="text-sm text-luxury-gold hover:underline font-medium"
                  onClick={onClose}
                >
                  View Gallery →
                </Link>
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-luxury-maroon mb-2">
                  Upcycling Service
                </h4>
                <p className="text-sm text-luxury-maroon/70 mb-3">
                  Transform your old garments into stunning new pieces
                </p>
                <Link
                  href="/about"
                  className="text-sm text-luxury-gold hover:underline font-medium"
                  onClick={onClose}
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
