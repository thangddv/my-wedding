import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Add your image filenames here
const images = [
  '/images/og-image.jpg',
  '/images/bg.jpeg',
  // Add more image paths as needed
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);

  return (
    <section
      id="image"
      className="min-h-screen relative overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center min-h-[60vh] w-full relative z-10">
        <div className="relative w-full max-w-md aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
          <img
            src={images[current]}
            alt={`Gallery image ${current + 1}`}
            className="object-cover w-full h-full transition-all duration-500"
          />
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-rose-500" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-rose-500" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`inline-block w-2 h-2 rounded-full ${idx === current ? 'bg-rose-500' : 'bg-white/70 border border-rose-300'}`}
              />
            ))}
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          {current + 1} / {total}
        </div>
      </div>
    </section>
  );
}
